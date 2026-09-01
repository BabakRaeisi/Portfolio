import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

emailjs.init('U69mT6IhousIlYZ9-');


const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle'); // Clear any previous message
    setLoading(true);

    emailjs
        .sendForm('service_sfhdje4', 'template_ukyoqjs', formRef.current!, 'JFKaWOVhmZDu1rjqR')
        .then(() => {
          setLoading(false);
          setSubmitted(true);
          setStatus('success'); // ✅ Success!
          formRef.current?.reset(); // Clear form
        })
        .catch(() => {
          setLoading(false);
          setStatus('error'); // ❌ Error!
        });
  };


  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-terminal-pink glow-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            <span className="text-terminal-green">$</span> ./connect --with developer
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-mono font-bold text-terminal-cyan mb-6">
                Let's collaborate
              </h3>
              <p className="text-muted-foreground font-mono leading-relaxed">
                I'm always interested in hearing about new opportunities, interesting projects,
                or just having a chat about technology. Whether you're looking to build something
                amazing or need help optimizing existing systems, let's connect!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-terminal-green/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-terminal-green"/>
                </div>
                <div>
                  <h4 className="font-mono font-semibold">Email</h4>
                  <p className="text-muted-foreground font-mono">jacobvillard@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-terminal-cyan/20 rounded-lg flex items-center justify-center">
                  <Github className="h-6 w-6 text-terminal-cyan"/>
                </div>
                <div>
                  <h4 className="font-mono font-semibold">GitHub</h4>
                  <p className="text-muted-foreground font-mono">github.com/jacobvillard</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-terminal-amber/20 rounded-lg flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-terminal-amber"/>
                </div>
                <div>
                  <h4 className="font-mono font-semibold">LinkedIn</h4>
                  <p className="text-muted-foreground font-mono">linkedin.com/in/jacobvillard</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-terminal-pink/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-terminal-pink"/>
                </div>
                <div>
                  <h4 className="font-mono font-semibold">Location</h4>
                  <p className="text-muted-foreground font-mono">UK, available for remote work</p>
                </div>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Form */}
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="font-mono text-terminal-green">
                  Send a Message
                </CardTitle>
                <CardDescription className="font-mono">
                  Fill out the form below and I'll get back to you soon!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-mono font-medium mb-2">Name</label>
                    <Input
                        name="name" // 👈 must match {{name}} in EmailJS
                        placeholder="Your name"
                        required
                        className="bg-muted/50 border-primary/30 focus:border-primary font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono font-medium mb-2">Email</label>
                    <Input
                        name="email" // 👈 must match {{email}} in EmailJS
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-muted/50 border-primary/30 focus:border-primary font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-mono font-medium mb-2">Subject</label>
                  <Input
                      name="title" // 👈 must match {{title}} in EmailJS
                      placeholder="Project collaboration"
                      required
                      className="bg-muted/50 border-primary/30 focus:border-primary font-mono"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono font-medium mb-2">Message</label>
                  <Textarea
                      name="message" // 👈 must match {{message}} in EmailJS
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      required
                      className="bg-muted/50 border-primary/30 focus:border-primary font-mono resize-none"
                  />
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-terminal-green hover:bg-terminal-green/80 text-black font-mono font-bold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
                {status === 'success' && (
                    <p className="text-terminal-green font-mono text-sm">
                      ✅ Message sent successfully!
                    </p>
                )}

                {status === 'error' && (
                    <p className="text-terminal-pink font-mono text-sm">
                      ❌ Something went wrong.
                    </p>
                )}

              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </section>
);
};

export default Contact;
