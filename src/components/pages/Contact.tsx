import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Send, Instagram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/myzrnkqj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          _replyto: formData.email,
          email: formData.email,
          _subject: `Lantin Contact Form: ${formData.subject}`,
          subject: formData.subject,
          message: formData.message,
          _format: 'plain',
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-16 px-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent" style={{
            backgroundImage: 'linear-gradient(to right, #61858b, #8fbc8f)'
          }}>
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Have questions about Lantin? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <Card className="border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Your name"
                    required
                    className="border-slate-300 focus:border-[#61858b] focus:ring-[#61858b]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="your@email.com"
                    required
                    className="border-slate-300 focus:border-[#61858b] focus:ring-[#61858b]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  placeholder="What's this about?"
                  required
                  className="border-slate-300 focus:border-[#61858b] focus:ring-[#61858b]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Tell us more..."
                  rows={6}
                  required
                  className="border-slate-300 focus:border-[#61858b] focus:ring-[#61858b]"
                />
              </div>

              {formStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
                  Something went wrong. Please try again or email us directly at lantin.artists@gmail.com
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={formStatus === 'submitting'}
                className="w-full text-white"
                style={{
                  background: 'linear-gradient(to right, #61858b, #8fbc8f)'
                }}
              >
                <Send className="w-5 h-5 mr-2" />
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 text-center space-y-6">
          <div className="flex justify-center max-w-2xl mx-auto">
            <a
              href="https://instagram.com/lantin.artist"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-gradient-to-br from-stone-50 to-emerald-50 hover:shadow-lg transition-shadow cursor-pointer w-64"
            >
              <Instagram className="w-8 h-8 mx-auto mb-3" style={{ color: '#61858b' }} />
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className="text-sm text-slate-600">@lantin.artist</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
