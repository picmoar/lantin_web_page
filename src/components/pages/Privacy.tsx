import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

interface PrivacyProps {
  onNavigate: (section: string) => void;
}

export default function Privacy({ onNavigate }: PrivacyProps) {
  return (
    <section className="py-16 px-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent" style={{
            backgroundImage: 'linear-gradient(to right, #61858b, #8fbc8f)'
          }}>
            Privacy Policy
          </h2>
          <p className="text-sm text-slate-500">Last updated: January 12, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#61858b' }}>Introduction</h3>
                <p className="leading-relaxed">
                  Welcome to Lantin. We respect your privacy and are committed to protecting your personal data.
                  This privacy policy will inform you about how we handle your personal data when you use our mobile application.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#61858b' }}>Information We Collect</h3>
                <p className="leading-relaxed mb-3">We may collect, use, store and transfer different kinds of personal data about you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identity Data:</strong> Name, username or similar identifier</li>
                  <li><strong>Contact Data:</strong> Email address and telephone numbers</li>
                  <li><strong>Profile Data:</strong> Your interests, preferences, feedback and survey responses</li>
                  <li><strong>Usage Data:</strong> Information about how you use our app and services</li>
                  <li><strong>Technical Data:</strong> Device information, IP address, browser type and version</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#61858b' }}>How We Use Your Information</h3>
                <p className="leading-relaxed mb-3">We use your personal data for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#61858b' }}>Data Security</h3>
                <p className="leading-relaxed">
                  We have implemented appropriate security measures to prevent your personal data from being accidentally lost,
                  used or accessed in an unauthorized way. We limit access to your personal data to those employees, agents,
                  contractors and other third parties who have a business need to know.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#61858b' }}>Your Rights</h3>
                <p className="leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#61858b' }}>Contact Us</h3>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:lantin.artists@gmail.com" className="font-semibold hover:underline" style={{ color: '#61858b' }}>
                    lantin.artists@gmail.com
                  </a>
                  {' '}or use our{' '}
                  <button
                    onClick={() => onNavigate('contact')}
                    className="font-semibold hover:underline"
                    style={{ color: '#61858b' }}
                  >
                    contact form
                  </button>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={() => onNavigate('home')}
            variant="outline"
            style={{
              borderColor: '#61858b',
              color: '#61858b'
            }}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
