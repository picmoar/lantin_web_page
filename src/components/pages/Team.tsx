import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Heart, Download } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import lantinLogo from '../../lantinlogo.png';

interface TeamProps {
  onNavigate: (section: string) => void;
}

const teamMembers = [
  {
    name: "Moyan Liu",
    role: "Founder",
    bio: "Founder of Lantin. Beyond building Lantin, he's a film photographer, art enthusiast, tea lover, and snowboarder who believes in turning everyday inspiration into meaningful connection.",
    image: lantinLogo,
    iconBg: 'linear-gradient(to bottom right, #61858b, #4a6741)'
  },
];

export default function Team({ onNavigate }: TeamProps) {
  return (
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
        <div className="mb-12 max-w-xl mx-auto">
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
                <p className="text-slate-600 leading-relaxed">
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
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('contact')}
              style={{
                borderColor: '#61858b',
                color: '#61858b'
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
