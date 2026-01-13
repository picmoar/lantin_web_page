import { ImageWithFallback } from '../figma/ImageWithFallback';
import aboutIcon from '../../icons/about.png';

export default function About() {
  return (
    <section className="py-16 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent" style={{
            backgroundImage: 'linear-gradient(to right, #61858b, #8fbc8f)'
          }}>
            The Story of Lantin
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            A name inspired by ancient traditions of art, poetry, and meaningful connection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="order-2 md:order-1 flex">
            <div className="space-y-6 flex flex-col justify-center">
              <h3 className="text-3xl font-bold" style={{ color: '#61858b' }}>The Orchid Pavilion Gathering</h3>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  In ancient China, there was a legendary gathering known as the <span className="font-semibold" style={{ color: '#61858b' }}>Orchid Pavilion (兰亭, Lántíng)</span>.
                  Scholars and poets would meet beside winding streams, where cups of wine floated gently past as they composed poetry,
                  shared laughter, and celebrated the beauty of art and nature.
                </p>
                <p>
                  Surrounded by bamboo groves, pine trees, and distant mountains, these gatherings were more than social events—they
                  were moments of profound creative exchange and authentic human connection. Artists found inspiration not just in
                  the scenery, but in the community they built together.
                </p>
                <p>
                  <span className="font-semibold" style={{ color: '#61858b' }}>Lantin</span> carries this spirit forward into the modern world.
                  Just as those ancient scholars gathered to celebrate creativity and forge meaningful connections, we're creating a platform
                  where artists and art lovers can discover each other, share their passions, and build a vibrant community.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30" style={{
                background: 'linear-gradient(to bottom right, #61858b, #8fbc8f, #20b2aa)'
              }}></div>
              <ImageWithFallback
                src={aboutIcon}
                alt="Ancient Chinese scholars at the Orchid Pavilion"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
