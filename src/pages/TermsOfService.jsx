export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-600 mb-12">Last Updated: April 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By downloading and using the Arbi application ("App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. License Grant</h2>
            <p>
              Arbi grants you a limited, non-exclusive, non-transferable, revocable license to download and use the App on your personal device for personal, non-commercial use only. This license does not include the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>Modify or create derivative works of the App</li>
              <li>Copy, translate, adapt, or otherwise alter the App</li>
              <li>Reverse engineer, disassemble, decompile, or attempt to derive the source code</li>
              <li>Remove, obscure, or alter any copyright, trademark, or other proprietary notices</li>
              <li>Use the App for any commercial purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
            <p>
              All content, features, and functionality in the App are owned by Arbi, its licensors, or other providers of such content and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. User Conduct</h2>
            <p>You agree not to use the App:</p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>In violation of applicable laws or regulations</li>
              <li>To transmit viruses, malware, or any code of a destructive nature</li>
              <li>To engage in harassment, abuse, or threatening behavior</li>
              <li>To infringe upon intellectual property rights of others</li>
              <li>To access or search the App by any means other than Arbi's publicly supported interfaces</li>
              <li>To scrape, crawl, or otherwise extract data from the App without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, ARBI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH THIS APP, EVEN IF ARBI HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Disclaimer of Warranties</h2>
            <p>
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to Terms</h2>
            <p>
              Arbi reserves the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of the App after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with applicable law, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 border border-gray-200 p-6 my-4 rounded">
              <p><strong>Arbi</strong></p>
              <p>Email: <a href="mailto:support@arbiwonderbook.com" className="text-blue-600 hover:underline">support@arbiwonderbook.com</a></p>
              <p>Website: <a href="https://www.arbiwonderbook.com" className="text-blue-600 hover:underline">www.arbiwonderbook.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
