import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

interface TermsProps {
  onNavigate: (section: string) => void;
}

export default function Terms({ onNavigate }: TermsProps) {
  return (
    <section className="py-16 px-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent" style={{
            backgroundImage: 'linear-gradient(to right, #61858b, #8fbc8f)'
          }}>
            Terms of Service
          </h2>
          <p className="text-sm text-slate-500">Last updated: January 12, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#61858b' }}>Agreement to Terms</h3>
                <p className="leading-relaxed">
                  By accessing or using the Lantin mobile application, you agree to be bound by these Terms of Service.
                  If you disagree with any part of the terms, you may not access the service.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#61858b' }}>Use of Service</h3>
                <p className="leading-relaxed mb-3">You agree that you will use Lantin only for purposes that are permitted by:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>These Terms of Service</li>
                  <li>Any applicable law, regulation or generally accepted practices or guidelines</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  You agree not to access (or attempt to access) any of the services by any means other than through
                  the interface that is provided by Lantin.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#61858b' }}>User Accounts</h3>
                <p className="leading-relaxed">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times.
                  Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.
                </p>
                <p className="leading-relaxed mt-3">
                  You are responsible for safeguarding the password that you use to access the service and for any activities
                  or actions under your password.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#61858b' }}>Content</h3>
                <p className="leading-relaxed">
                  Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics,
                  or other material. You are responsible for the content that you post on or through the service, including its legality,
                  reliability, and appropriateness.
                </p>
                <p className="leading-relaxed mt-3">
                  By posting content on or through the service, you grant us the right and license to use, modify, publicly perform,
                  publicly display, reproduce, and distribute such content on and through the service.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#61858b' }}>Prohibited Uses</h3>
                <p className="leading-relaxed mb-3">You may not use Lantin:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>For any unlawful purpose or to solicit others to perform or participate in any unlawful acts</li>
                  <li>To violate any international, federal, provincial or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#61858b' }}>Termination</h3>
                <p className="leading-relaxed">
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever,
                  including without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#61858b' }}>Limitation of Liability</h3>
                <p className="leading-relaxed">
                  In no event shall Lantin, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any
                  indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data,
                  use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#61858b' }}>Changes to Terms</h3>
                <p className="leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of
                  any significant changes by posting the new Terms on this page. Your continued use of the service after any such changes
                  constitutes your acceptance of the new Terms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#61858b' }}>Contact Us</h3>
                <p className="leading-relaxed">
                  If you have any questions about these Terms, please contact us at{' '}
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
