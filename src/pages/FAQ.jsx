import { useState } from 'react';
import CTAStrip from '../components/CTAStrip';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqSections = [
    {
      category: 'Device Support',
      faqs: [
        {
          question: 'What devices do I need?',
          answer: 'Any smartphone or tablet with a camera running iOS or Android. You will need to download the free Arbi app — available on the App Store (iOS) and Google Play (Android) — to view the augmented reality experiences.',
        },
        {
          question: 'Do I need to download an app?',
          answer: 'Yes. To view the augmented reality content you must install the free Arbi app on your device. Search for "Arbi Wonderbook" on the App Store (iPhone/iPad) or on Google Play (Android) and install it before scanning your book.',
        },
        {
          question: 'Does it work on iPad?',
          answer: 'Yes, Arbi works perfectly on iPad and other tablets. The larger screen makes the AR experience even more immersive.',
        },
        {
          question: 'Can I use it on older phones?',
          answer: 'We recommend iOS 12+ or Android 8+. If your device is older, it may still work but performance may vary.',
        },
      ],
    },
    {
      category: 'Usage & Experience',
      faqs: [
        {
          question: 'Do I need special glasses?',
          answer: 'No special glasses needed. Just your regular smartphone or tablet. The AR experience is viewed through your device camera.',
        },
        {
          question: 'How long does one book take to read?',
          answer: 'A typical Arbi book takes 20-30 minutes to read, though children often spend longer exploring the interactive AR elements.',
        },
        {
          question: 'Is the AR experience safe for children\'s eyes?',
          answer: 'Yes. We recommend 30-minute sessions with breaks, just like any screen time. The experience is not straining.',
        },
        {
          question: 'Can multiple children use one book?',
          answer: 'Absolutely. One physical book can be shared among children. The AR works for any device scanning the pages.',
        },
      ],
    },
    {
      category: 'Languages & Availability',
      faqs: [
        {
          question: 'Which languages are available?',
          answer: 'Arbi books are available in English, Spanish, Basque, German, Italian, French, Catalan, and Swedish.',
        },
        {
          question: 'Can I switch languages within a book?',
          answer: 'Each book is in a single language. You can purchase the same book in different languages.',
        },
        {
          question: 'Is the AR content translated too?',
          answer: 'Yes. The AR interactive elements and any in-app text are in the same language as the book.',
        },
      ],
    },
    {
      category: 'Purchasing & Delivery',
      faqs: [
        {
          question: 'Where can I buy Arbi books?',
          answer: 'Arbi books are available on Amazon in all supported languages and regions.',
        },
        {
          question: 'What\'s the price?',
          answer: 'Prices vary by region and language. Check Amazon for pricing in your country.',
        },
        {
          question: 'How long does delivery take?',
          answer: 'Delivery times depend on your Amazon region and shipping method. Standard delivery typically takes 2-3 weeks.',
        },
      ],
    },
    {
      category: 'Age & Learning',
      faqs: [
        {
          question: 'What age is Arbi for?',
          answer: 'Arbi books are designed for children ages 5-10, though children outside this range often enjoy them too.',
        },
        {
          question: 'Can pre-readers enjoy Arbi?',
          answer: 'Yes. Parents or teachers can read the story aloud while children explore the AR experiences independently.',
        },
        {
          question: 'Does Arbi help with language learning?',
          answer: 'Absolutely. The combination of reading and interactive AR reinforces vocabulary and language comprehension naturally.',
        },
      ],
    },
    {
      category: 'Technical Troubleshooting',
      faqs: [
        {
          question: 'The AR isn\'t working. What should I do?',
          answer: 'First, ensure good lighting and that the page is fully visible on screen. Try reloading the browser. If issues persist, restart your device.',
        },
        {
          question: 'Why is the AR laggy or slow?',
          answer: 'Check your device storage and close other apps. AR performance depends on device power. Older devices may experience slower performance.',
        },
        {
          question: 'Can I use Arbi offline?',
          answer: 'No, Arbi requires an internet connection to deliver the AR experience.',
        },
      ],
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  let faqCounter = 0;

  return (
    <main className="bg-white">
      <section className="container-section text-center pt-32">
        <h1 className="mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about Arbi books, AR experiences, and getting started.
        </p>
      </section>

      <section className="container-section">
        {faqSections.map((section) => (
          <div key={section.category} className="mb-16">
            <h2 className="mb-8 text-2xl">{section.category}</h2>
            <div className="space-y-4">
              {section.faqs.map((faq, idx) => {
                const faqId = faqCounter;
                faqCounter += 1;
                return (
                  <div
                    key={faqId}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(faqId)}
                      className="w-full px-6 py-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                    >
                      <span>{faq.question}</span>
                      <span className="text-2xl">
                        {openFaq === faqId ? '−' : '+'}
                      </span>
                    </button>
                    {openFaq === faqId && (
                      <div className="px-6 py-4 bg-white text-gray-600 border-t border-gray-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <CTAStrip
        title="Ready to Get Started?"
        subtitle="Explore Arbi books on Amazon and start your family's AR reading adventure."
        ctaText="Shop on Amazon"
      />
    </main>
  );
}
