import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Apple, PlayCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import lantinLogo from '../../lantinlogo.png';
import discoverIcon from '../../icons/discover.png';
import boothIcon from '../../icons/booth.png';
import eventIcon from '../../icons/event.png';
import heartIcon from '../../icons/heart.png';
import lantinWebImage from '../../icons/lantinwebimage.png';
import discoverPageImg from '../../icons/discoverpage.png';
import boothPageImg from '../../icons/boothpage.png';
import eventPageImg from '../../icons/eventpage.png';
import mapPageImg from '../../icons/mappage.png';

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

export default function Home() {
  return (
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
                }} asChild>
                  <a href="https://apps.apple.com/us/app/lantin/id6756462669" target="_blank" rel="noopener noreferrer">
                    <Apple className="w-5 h-5 mr-2" />
                    Download for iOS
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 hover:bg-teal-50" style={{
                  borderColor: 'rgba(97, 133, 139, 0.4)',
                  color: '#61858b'
                }} onClick={() => alert('Currently unavailable. Coming soon!')}>
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
            Connecting artists and art lovers through innovative experiences and meaningful community building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-50" style={{ color: '#61858b' }} asChild>
              <a href="https://apps.apple.com/us/app/lantin/id6756462669" target="_blank" rel="noopener noreferrer">
                <Apple className="w-5 h-5 mr-2" />
                Download for iOS
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-50" style={{ color: '#61858b' }} onClick={() => alert('Currently unavailable. Coming soon!')}>
              <PlayCircle className="w-5 h-5 mr-2" />
              Get on Android
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
