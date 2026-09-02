import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

emailjs.init("U69mT6IhousIlYZ9-");

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        "service_sfhdje4",
        "template_ukyoqjs",
        formRef.current,
        "JFKaWOVhmZDu1rjqR",
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const contactLinks = [
    {
      label: "Email",
      value: "babak.raeisi.brs@gmail.com",
      href: "mailto:babak.raeisi.brs@gmail.com",
      icon: Mail,
      color: "text-terminal-green",
      background: "bg-terminal-green/10",
      border: "hover:border-terminal-green/40",
    },
    {
      label: "GitHub",
      value: "github.com/BabakRaeisi",
      href: "https://github.com/BabakRaeisi",
      icon: Github,
      color: "text-terminal-cyan",
      background: "bg-terminal-cyan/10",
      border: "hover:border-terminal-cyan/40",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/babakraeisi",
      href: "https://www.linkedin.com/in/babakraeisi/",
      icon: Linkedin,
      color: "text-terminal-pink",
      background: "bg-terminal-pink/10",
      border: "hover:border-terminal-pink/40",
    },
    {
      label: "ArtStation",
      value: "artstation.com/b4k",
      href: "https://artstation.com/b4k",
      icon: Palette,
      color: "text-terminal-amber",
      background: "bg-terminal-amber/10",
      border: "hover:border-terminal-amber/40",
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-48 -left-48 w-[550px] h-[550px] rounded-full bg-terminal-green/5 blur-[150px]" />

        <div className="absolute -top-32 -right-48 w-[550px] h-[550px] rounded-full bg-terminal-pink/5 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-terminal-green" />

              <span className="font-mono text-sm text-terminal-green">
                Get In Touch
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Have something in{" "}
              <span className="bg-gradient-to-r from-terminal-green via-terminal-cyan to-terminal-pink bg-clip-text text-transparent">
                mind?
              </span>
            </h2>

            <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
              I'm open to software engineering opportunities, collaborations,
              and conversations about backend systems, Unity, game development,
              and interactive applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12">
            {/* Left side */}
            <div className="flex flex-col">
              <div className="rounded-2xl border border-border/70 bg-card/45 backdrop-blur-sm p-6 md:p-8 mb-5">
                <p className="font-mono text-sm text-terminal-cyan mb-3">
                  contact.info
                </p>

                <h3 className="text-2xl font-semibold mb-4">
                  Let's build something useful.
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  The easiest way to reach me is through email or LinkedIn. You
                  can also use the form and I'll get back to you directly.
                </p>

                <div className="flex items-center gap-3 mt-7 pt-6 border-t border-border/60">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-terminal-pink/10">
                    <MapPin className="h-5 w-5 text-terminal-pink" />
                  </div>

                  <div>
                    <p className="font-mono text-xs text-muted-foreground">
                      Location
                    </p>

                    <p className="text-sm text-foreground">
                      Vaughan, Ontario, Canada
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact links */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`group flex items-center gap-4 rounded-xl border border-border/60 bg-card/30 p-4 transition-all duration-200 ${item.border} hover:bg-card/60`}
                    >
                      <div
                        className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-lg ${item.background}`}
                      >
                        <Icon className={`h-5 w-5 ${item.color}`} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-xs text-muted-foreground">
                          {item.label}
                        </p>

                        <p className="text-sm text-foreground truncate">
                          {item.value}
                        </p>
                      </div>

                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-terminal-green/5 via-transparent to-terminal-pink/5 blur-2xl pointer-events-none" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative rounded-2xl border border-border/70 bg-card/65 backdrop-blur-xl p-6 md:p-8 shadow-2xl"
              >
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div>
                    <p className="font-mono text-xs text-terminal-green mb-2">
                      message.send()
                    </p>

                    <h3 className="text-2xl font-semibold">
                      Send me a message
                    </h3>
                  </div>

                  <div className="hidden sm:flex items-center justify-center w-11 h-11 rounded-xl border border-terminal-green/20 bg-terminal-green/5">
                    <Mail className="h-5 w-5 text-terminal-green" />
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-mono text-muted-foreground mb-2"
                      >
                        Name
                      </label>

                      <Input
                        id="contact-name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="h-11 bg-background/40 border-border/70 focus-visible:ring-terminal-green/40"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-mono text-muted-foreground mb-2"
                      >
                        Email
                      </label>

                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="h-11 bg-background/40 border-border/70 focus-visible:ring-terminal-green/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-title"
                      className="block text-sm font-mono text-muted-foreground mb-2"
                    >
                      Subject
                    </label>

                    <Input
                      id="contact-title"
                      name="title"
                      placeholder="What's this about?"
                      required
                      className="h-11 bg-background/40 border-border/70 focus-visible:ring-terminal-cyan/40"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-mono text-muted-foreground mb-2"
                    >
                      Message
                    </label>

                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell me what you'd like to discuss..."
                      rows={7}
                      required
                      className="resize-none bg-background/40 border-border/70 focus-visible:ring-terminal-pink/40"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full h-12 bg-terminal-green hover:bg-terminal-green/90 text-black font-mono font-semibold disabled:opacity-60"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {status === "success" && (
                    <div className="rounded-lg border border-terminal-green/20 bg-terminal-green/5 px-4 py-3">
                      <p className="text-terminal-green font-mono text-sm">
                        Message sent successfully.
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-3">
                      <p className="text-red-400 font-mono text-sm">
                        Something went wrong. Please try again or email me
                        directly.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-border/60 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="text-sm text-muted-foreground font-mono">
              © {new Date().getFullYear()} Babak Raeisi
            </p>

            <a
              href="#home"
              className="text-sm font-mono text-muted-foreground hover:text-terminal-green transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
