import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  ArrowUpRight,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { profile } from "../data/content";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const EMAILJS_SERVICE_ID = "service_gg1lz2q";
  const EMAILJS_TEMPLATE_ID = "template_stuomxn";
  const EMAILJS_PUBLIC_KEY = "3RMmvCbY-hBZmtDY3";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Dagm Yibabe",
          to_email: profile.email,
        },
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setStatusMessage("Thanks — I’ll reply soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      setStatusMessage("Couldn’t send. Email me directly instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Say hello"
            index="04"
            className="mb-6"
          />
          <p className="max-w-sm text-muted-foreground">
            Open to internships, collaborations, and interesting problems.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-8 inline-flex max-w-full items-center gap-2 break-words font-serif text-2xl text-warm transition-colors duration-300 hover:text-foreground sm:text-3xl"
          >
            {profile.email}
            <ArrowUpRight className="h-5 w-5 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </a>

          <Reveal delay={100}>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  href={profile.phoneHref}
                  className="group inline-flex items-center gap-3 transition-colors duration-300 hover:text-warm"
                >
                  <Phone className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  {profile.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </li>
            </ul>

            <div className="mt-8 flex gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2 text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2 text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-border bg-card p-6 md:p-8"
          >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows={5}
            />
          </div>

          {submitStatus !== "idle" && (
            <p
              className={`fade-up-in text-sm ${
                submitStatus === "success" ? "" : "text-destructive"
              }`}
            >
              {statusMessage}
            </p>
          )}

          <Button type="submit" disabled={isSubmitting} className="rounded-full">
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send
              </>
            )}
          </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
