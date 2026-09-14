import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
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
    <section id="contact" className="scroll-mt-20 border-t border-border py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm tracking-[0.22em] text-warm uppercase">
            Contact
          </p>
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
            Say hello
          </h2>
          <p className="mt-6 max-w-sm text-muted-foreground">
            Open to internships, collaborations, and interesting problems.
          </p>

          <ul className="mt-10 space-y-4 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 hover:text-warm"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.phoneHref}
                className="inline-flex items-center gap-3 hover:text-warm"
              >
                <Phone className="h-4 w-4" />
                {profile.phone}
              </a>
            </li>
            <li className="inline-flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </li>
          </ul>

          <div className="mt-8 flex gap-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
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
              className={
                submitStatus === "success" ? "text-sm" : "text-sm text-destructive"
              }
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
      </div>
    </section>
  );
};

export default Contact;
