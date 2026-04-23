import Button from './Button';

export default function CTAStrip({ title, subtitle, ctaText = 'Get Started on Amazon' }) {
  return (
    <section className="cta-strip">
      <div className="max-w-2xl mx-auto">
        <h2 className="mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-gray-600 mb-6">{subtitle}</p>}
        <Button href="https://amazon.com" target="_blank" rel="noopener noreferrer">
          {ctaText}
        </Button>
      </div>
    </section>
  );
}
