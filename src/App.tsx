import React, { useState } from 'react';
import { Palette, MapPin, Calendar, Heart, Users, Star, ArrowRight, Download, Apple, PlayCircle, Brush, Camera, Scissors, Eye, Instagram, Twitter, Mail, Send } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import lantinLogo from './lantinlogo.png';
import discoverIcon from './icons/discover.png';
import boothIcon from './icons/booth.png';
import eventIcon from './icons/event.png';
import heartIcon from './icons/heart.png';
import lantinWebImage from './icons/lantinwebimage.png';
import discoverPageImg from './icons/discoverpage.png';
import boothPageImg from './icons/boothpage.png';
import eventPageImg from './icons/eventpage.png';
import mapPageImg from './icons/mappage.png';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const teamMembers = [
    {
      name: "Moyan Liu",
      role: "Founder",
      bio: "Founder of Lantin. Beyond building Lantin, he’s a film photographer, art enthusiast, tea lover, and snowboarder who believes in turning everyday inspiration into meaningful connection.",
      image: lantinLogo,
      iconBg: 'linear-gradient(to bottom right, #61858b, #4a6741)'
    },
  ];

  const features = [
    {
      iconImg: discoverIcon,
      title: "Discover",
      description: "Explore a curated collection of local artists and their stunning portfolios in an immersive visual experience.",
      gradient: "from-stone-50 to-stone-100",
      iconBg: 'linear-gradient(to bottom right, #61858b, #4a6741)',
      image: discoverPageImg
    },
    {
      iconImg: boothIcon,
      title: "Visit Booths",
      description: "Find artist studios and gallery spaces near you with integrated maps and detailed location information.",
      gradient: "from-stone-50 to-stone-100",
      iconBg: 'linear-gradient(to bottom right, #8fbc8f, #61858b)',
      image: boothPageImg
    },
    {
      iconImg: eventIcon,
      title: "Join Events",
      description: "Never miss gallery openings, art fairs, and creative workshops happening in your area.",
      gradient: "from-stone-50 to-stone-100",
      iconBg: 'linear-gradient(to bottom right, #20b2aa, #61858b)',
      image: eventPageImg
    },
    {
      iconImg: heartIcon,
      title: "Connect",
      description: "Build meaningful relationships with artists and fellow art enthusiasts in your community.",
      gradient: "from-stone-50 to-stone-100",
      iconBg: 'linear-gradient(to bottom right, #cd853f, #61858b)',
      image: mapPageImg
    }
  ];

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur px-6 py-3 rounded-full border border-teal-200" style={{ borderColor: 'rgba(97, 133, 139, 0.3)' }}>
                <img src={lantinLogo} alt="LANTIN" className="w-5 h-5 object-contain" />
                <span className="text-base" style={{ color: '#61858b' }}>Coming Soon</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                Where Art<br />
                Comes<br />
                <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{ 
                  backgroundImage: 'linear-gradient(to right, #61858b, #8fbc8f, #20b2aa)' 
                }}>
                  Alive
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                Discover talented local artists, explore immersive gallery experiences, and become part of a vibrant creative community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-white border-0 shadow-lg hover:shadow-xl transition-shadow" style={{ 
                  background: 'linear-gradient(to right, #61858b, #8fbc8f)',
                  '--tw-shadow-color': 'rgba(97, 133, 139, 0.3)'
                }}>
                  <Apple className="w-5 h-5 mr-2" />
                  Download for iOS
                </Button>
                <Button size="lg" variant="outline" className="border-2 hover:bg-teal-50" style={{ 
                  borderColor: 'rgba(97, 133, 139, 0.4)',
                  color: '#61858b'
                }}>
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Get on Android
                </Button>
              </div>
            </div>
            <div className="relative w-full flex items-center justify-center">
              <div className="w-full max-w-sm mx-auto rounded-3xl p-8 shadow-lg" style={{
                background: 'linear-gradient(to bottom right, rgba(97, 133, 139, 0.15), rgba(143, 188, 143, 0.15), rgba(32, 178, 170, 0.15))'
              }}>
                <img
                  src={lantinWebImage}
                  alt="LANTIN App"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Your Creative Journey Starts Here</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Lantin brings together artists, collectors, and art lovers in one beautiful platform designed for discovery and connection.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              return (
                <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${feature.gradient} overflow-hidden`}>
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16">
                      <img src={feature.iconImg} alt={feature.title} className="w-full h-full object-contain" />
                    </div>
                    <h3 className="font-bold text-2xl">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="relative pt-4">
                      <div className="absolute inset-0 rounded-2xl blur-lg opacity-30" style={{
                        background: feature.iconBg
                      }}></div>
                      <ImageWithFallback
                        src={feature.image}
                        alt={`${feature.title} feature`}
                        className="relative w-full rounded-2xl shadow-xl"
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-white" style={{ 
        background: 'linear-gradient(to right, #61858b, #8fbc8f, #20b2aa)' 
      }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Explore the Art World?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of creators and art lovers who are already discovering amazing talent through Lantin.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-50" style={{ color: '#61858b' }}>
              Coming Soon
            </Button>
          </div>
        </div>
      </section>
    </>
  );

  const renderTeam = () => (
    <section className="py-16 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent" style={{ 
            backgroundImage: 'linear-gradient(to right, #cd853f, #61858b)' 
          }}>
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            The passionate people behind Lantin, dedicated to empowering artists and building a vibrant creative community.
          </p>
        </div>

        {/* Founder */}
        <div className="mb-12">
          <Card className={`border-0 shadow-xl overflow-hidden bg-gradient-to-br ${teamMembers[0].gradient}`}>
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-xl opacity-50" style={{ 
                    background: teamMembers[0].iconBg 
                  }}></div>
                  <ImageWithFallback
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    className="relative w-32 h-32 rounded-full object-cover shadow-xl"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{teamMembers[0].name}</h3>
                  <p className="font-semibold" style={{ color: '#61858b' }}>{teamMembers[0].role}</p>
                </div>
                <p className="text-slate-600 leading-relaxed max-w-3xl">
                  {teamMembers[0].bio}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Rest of Team */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.slice(1).map((member, index) => (
            <Card key={index} className={`border-0 shadow-xl overflow-hidden bg-gradient-to-br ${member.gradient}`}>
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full blur-xl opacity-50" style={{ 
                      background: member.iconBg 
                    }}></div>
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="relative w-32 h-32 rounded-full object-cover shadow-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="font-semibold" style={{ color: '#61858b' }}>{member.role}</p>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-8 py-12 px-4 rounded-3xl bg-gradient-to-br from-stone-50 to-emerald-50">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ 
              background: 'linear-gradient(to bottom right, #cd853f, #61858b)' 
            }}>
              <Heart className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold">Join Us on Our Mission</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're building more than just a platform—we're creating a movement that celebrates creativity 
            and connects artists with the community they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white" style={{ 
              background: 'linear-gradient(to right, #cd853f, #61858b)' 
            }}>
              <Download className="w-5 h-5 mr-2" />
              Download Lantin
            </Button>
            <Button size="lg" variant="outline" style={{ 
              borderColor: '#61858b', 
              color: '#61858b' 
            }}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );

  const renderContact = () => (
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
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="border-slate-300 focus:border-[#61858b] focus:ring-[#61858b]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="border-slate-300 focus:border-[#61858b] focus:ring-[#61858b]"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?" 
                  className="border-slate-300 focus:border-[#61858b] focus:ring-[#61858b]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more..." 
                  rows={6}
                  className="border-slate-300 focus:border-[#61858b] focus:ring-[#61858b]"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-white" 
                style={{ 
                  background: 'linear-gradient(to right, #61858b, #8fbc8f)' 
                }}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 text-center space-y-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="https://instagram.com/lantin.artist"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-gradient-to-br from-stone-50 to-emerald-50 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <Instagram className="w-8 h-8 mx-auto mb-3" style={{ color: '#61858b' }} />
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className="text-sm text-slate-600">@lantin.artist</p>
            </a>
            <div className="p-6 rounded-xl bg-gradient-to-br from-stone-50 to-emerald-50">
              <Twitter className="w-8 h-8 mx-auto mb-3" style={{ color: '#61858b' }} />
              <h3 className="font-semibold mb-2">Twitter</h3>
              <p className="text-sm text-slate-600">@lantin_app</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b shadow-sm" style={{ 
        borderColor: 'rgba(97, 133, 139, 0.2)' 
      }}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={lantinLogo} alt="LANTIN Logo" className="w-10 h-10 object-contain" />
            <h1 className="font-bold text-2xl bg-gradient-to-r bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right, #61858b, #8fbc8f)'
            }}>
              Lantin
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setActiveSection('home')}
              className={`transition-colors ${activeSection === 'home' ? 'font-semibold' : 'text-slate-600'}`}
              style={{ color: activeSection === 'home' ? '#61858b' : undefined }}
              onMouseEnter={(e) => e.target.style.color = '#61858b'}
              onMouseLeave={(e) => e.target.style.color = activeSection === 'home' ? '#61858b' : '#475569'}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveSection('team')}
              className={`transition-colors ${activeSection === 'team' ? 'font-semibold' : 'text-slate-600'}`}
              style={{ color: activeSection === 'team' ? '#61858b' : undefined }}
              onMouseEnter={(e) => e.target.style.color = '#61858b'}
              onMouseLeave={(e) => e.target.style.color = activeSection === 'team' ? '#61858b' : '#475569'}
            >
              Team
            </button>
            <button 
              onClick={() => setActiveSection('contact')}
              className={`transition-colors ${activeSection === 'contact' ? 'font-semibold' : 'text-slate-600'}`}
              style={{ color: activeSection === 'contact' ? '#61858b' : undefined }}
              onMouseEnter={(e) => e.target.style.color = '#61858b'}
              onMouseLeave={(e) => e.target.style.color = activeSection === 'contact' ? '#61858b' : '#475569'}
            >
              Contact Us
            </button>
            <Button className="text-white border-0 shadow-lg hover:shadow-xl transition-shadow" style={{ 
              background: 'linear-gradient(to right, #61858b, #8fbc8f)' 
            }}>
              Coming Soon
            </Button>
          </div>
        </div>
      </nav>

      {/* Content */}
      {activeSection === 'home' && renderHome()}
      {activeSection === 'team' && renderTeam()}
      {activeSection === 'contact' && renderContact()}

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-br from-slate-50 to-stone-100 border-t" style={{ 
        borderColor: 'rgba(97, 133, 139, 0.2)' 
      }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="flex items-center space-x-3">
              <img src={lantinLogo} alt="LANTIN Logo" className="w-8 h-8 object-contain" />
              <span className="font-bold text-xl bg-gradient-to-r bg-clip-text text-transparent" style={{
                backgroundImage: 'linear-gradient(to right, #61858b, #8fbc8f)'
              }}>
                Lantin
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md">
              Connecting artists and art lovers through innovative experiences and meaningful community building.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/lantin.artist"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="icon" variant="ghost" className="text-slate-500 transition-colors hover:text-slate-700"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#61858b'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}>
                  <Instagram className="w-5 h-5" />
                </Button>
              </a>
            </div>
            <div className="pt-6 border-t w-full text-sm text-slate-500" style={{ 
              borderColor: 'rgba(97, 133, 139, 0.2)' 
            }}>
              <p>&copy; 2024 Lantin. All rights reserved. Made with ❤️ for the art community.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
