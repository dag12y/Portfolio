import { expect, test } from "@playwright/test";
for (const width of [320, 768, 1440]) {
	test("portfolio navigation and diagram at " + width, async ({ page }) => {
		await page.setViewportSize({ width, height: 850 });
		await page.emulateMedia({ reducedMotion: "reduce" });
		await page.goto("/");
		await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
		const database = page.getByRole("button", { name: "Database" });
		await database.focus();
		await page.keyboard.press("Enter");
		await expect(page.locator(".readout")).toContainText("durable records");
		await page.getByRole("button", { name: "Use light theme" }).click();
		await page.reload();
		await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
		await page.getByRole("link", { name: "View projects" }).click();
		await expect(page).toHaveURL(/#work$/);
		for (const slug of ["devpulse", "saferun", "ethionlp"]) {
			await page.locator('a[href="/projects/' + slug + '/"]').click();
			await page.reload();
			await expect(page.locator("h1")).toHaveText(new RegExp(slug, "i"));
			await expect(page).toHaveTitle(new RegExp(slug, "i"));
			expect(
				await page.evaluate(
					() => document.documentElement.scrollWidth <= innerWidth,
				),
			).toBe(true);
			await page.getByRole("link", { name: "← Selected work" }).click();
		}
		expect(
			await page.evaluate(
				() => document.documentElement.scrollWidth <= innerWidth,
			),
		).toBe(true);
	});
}
