export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-600 mb-12">Last Updated: April 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
            <p>
              Arbi ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how our mobile application ("Arbi App") collects, uses, and protects information when you use our augmented reality children's books application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Camera Permission & Usage</h2>
            <p>
              The Arbi App requests access to your device's camera solely to enable augmented reality (AR) functionality that allows users to view interactive 3D content overlaid on the physical pages of Arbi books.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
              <p className="font-semibold mb-2">Camera Usage Details:</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Camera access is used ONLY to display AR content while reading Arbi books</li>
                <li>Camera data is processed locally on your device only</li>
                <li>We do NOT record, store, or transmit any video, images, or photos from your camera</li>
                <li>We do NOT use camera data for any purpose other than AR visualization</li>
                <li>Camera access can be revoked at any time through your device settings</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Collection & Usage</h2>
            <p>
              The Arbi App collects minimal data to provide you with a quality experience:
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>Device Information:</strong> App version, device type, and operating system (for technical support and improvement)</li>
              <li><strong>Usage Analytics:</strong> Which books you access and reading duration (to improve our content and app experience)</li>
              <li><strong>No Personal Identifiable Information:</strong> We do not collect, store, or request names, email addresses, phone numbers, or other personal identifiers in the free version</li>
              <li><strong>No Location Data:</strong> We do not request or collect location information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy (COPPA Compliance)</h2>
            <p>
              The Arbi App is designed for children and families. We comply with the Children's Online Privacy Protection Act (COPPA) and similar legislation in other jurisdictions:
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>We do not knowingly collect personal information from children under 13 without verifiable parental consent</li>
              <li>We do not require account creation or login to use the app</li>
              <li>We do not use targeted advertising or behavioral tracking</li>
              <li>We do not share children's data with third parties for marketing purposes</li>
              <li>Parents can contact us to request deletion of any data associated with their child</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Permissions Requested</h2>
            <p>
              The Arbi App requests the following device permissions:
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>Camera</strong> - To display augmented reality book content</li>
              <li><strong>Storage</strong> - To store app data, book content, and user preferences locally on your device</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              All permissions are optional and the app will function with limited features if permissions are denied. You can modify permissions at any time through your device settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Retention</h2>
            <p>
              Usage data is retained for as long as your app is installed. When you uninstall the app or clear app data through device settings, all associated data is deleted. You may request deletion of any data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Services</h2>
            <p>
              The Arbi App does not integrate with third-party analytics, advertising, or data collection services that track personal information. We use basic, non-identifying analytics only to understand app performance and user engagement with educational content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Security</h2>
            <p>
              We implement reasonable security measures to protect data processed locally on your device. However, no method of transmission or storage is 100% secure. We encourage you to use standard device security practices, such as device locks and OS updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the app after updates constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 p-6 my-4 rounded">
              <p><strong>Arbi</strong></p>
              <p>Email: <a href="mailto:privacy@arbiwonderbook.com" className="text-blue-600 hover:underline">privacy@arbiwonderbook.com</a></p>
              <p>Website: <a href="https://www.arbiwonderbook.com" className="text-blue-600 hover:underline">www.arbiwonderbook.com</a></p>
              <p className="text-sm text-gray-600 mt-4">
                Parent/Guardian Requests: If you are a parent or guardian and wish to review, correct, or request deletion of information about your child, please contact us with appropriate verification of guardianship.
              </p>
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded mt-12">
            <p className="text-sm text-gray-600">
              This Privacy Policy is provided in English. If there are discrepancies between translated versions, the English version shall prevail. This policy is effective for the Arbi mobile application available on Android and iOS platforms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
