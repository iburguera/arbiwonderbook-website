export default function Home() {
  const books = [
    {
      id: 1,
      title: 'Arbi y el temible dragón Drako',
      pitch:
        'Join Arbi on an epic adventure to discover the secrets of the mysterious dragon Drako.',
      theme: 'Adventure, Dragons, Discovery',
      appeal: 'Interactive AR dragon encounters and magic discovery gameplay.',
      cover: '🐉',
    },
    {
      id: 2,
      title: 'Arbi y el cofre del tesoro',
      pitch:
        'Hunt for treasure with Arbi in an interactive quest through magical lands.',
      theme: 'Treasure, Adventure, Exploration',
      appeal: 'AR treasure hunt mechanics and interactive map exploration.',
      cover: '💎',
    },
  ];

  const howItWorks = [
    {
      step: '01',
      color: '#1E90FF',
      title: 'Get the Book',
      description:
        'Order ARBI 1 or ARBI 2 on Amazon and receive the physical book at home.',
    },
    {
      step: '02',
      color: '#32CD32',
      title: 'Download the Free App',
      description:
        'Get the free ARBI app on the App Store or Google Play. No subscription needed.',
    },
    {
      step: '03',
      color: '#FFD700',
      title: 'Point & Discover',
      description:
        'Open the app, point your device at the book page, and watch the characters come to life.',
    },
    {
      step: '04',
      color: '#FF8C00',
      title: 'Play & Learn',
      description:
        'Interact with 3D characters, explore AR scenes, and experience the story in a new way.',
    },
  ];

  const languages = [
    '🇬🇧 English',
    '🇪🇸 Spanish',
    '🇫🇷 French',
    '🇩🇪 German',
    '🇮🇹 Italian',
    '🏳️ Basque',
    '🏳️ Catalan',
    '🇸🇪 Swedish',
  ];

  const benefits = [
    {
      color: '#1E90FF',
      icon: '📖',
      title: 'Boosts Reading Engagement',
      description:
        'Interactive AR experiences help children stay focused and make reading feel more active.',
    },
    {
      color: '#32CD32',
      icon: '🧠',
      title: 'Supports Story Comprehension',
      description:
        'Seeing characters and scenes in 3D can help children connect visual action with the written story.',
    },
    {
      color: '#FFD700',
      icon: '🎮',
      title: 'Learning Through Play',
      description:
        'AR interactions reinforce the story through exploration, curiosity, and playful discovery.',
    },
    {
      color: '#FF8C00',
      icon: '🌟',
      title: 'Sparks Curiosity & Creativity',
      description:
        'When the world of a book appears on the page, children become active participants in the story.',
    },
    {
      color: '#1E90FF',
      icon: '💪',
      title: 'Builds Emotional Connection',
      description:
        'Arbi’s adventures introduce values such as friendship, cooperation, courage, and empathy.',
    },
    {
      color: '#32CD32',
      icon: '👨‍👩‍👧',
      title: 'Family Bonding Time',
      description:
        'Parents and children can explore the AR experience together and make reading a shared ritual.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      relation: 'Parent, age 7 child',
      quote:
        'My daughter was skeptical about reading, but with Arbi, she asks to read every day. The AR is magical but not distracting.',
      specific:
        'She spent 45 minutes with the dragon book without looking away.',
    },
    {
      name: 'Maria García',
      relation: 'Teacher, bilingual classroom',
      quote:
        'As an educator, I see how Arbi engages children who normally struggle with reading comprehension.',
      specific: 'Even my most reluctant readers are asking to read ahead.',
    },
    {
      name: 'James Chen',
      relation: 'Grandparent, gift-giver',
      quote:
        'Perfect gift for my multilingual grandchildren. They connect to the stories and learn languages naturally.',
      specific: 'My 5-year-old now uses Spanish without hesitation.',
    },
    {
      name: 'Sofia López',
      relation: 'Parent, multilingual family',
      quote:
        'We wanted to expose our kids to multiple languages. Arbi makes it fun and natural.',
      specific:
        'Reading is now a family ritual, and languages are less of a chore.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="container-section text-center pt-40">
        <h1 className="mb-6 leading-tight">
          Augmented Reality Books That Bring Stories to Life
        </h1>

        <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          Arbi books blend physical reading with interactive magic. Available in
          8 languages for families who want reading to be unforgettable.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <Button
            href="https://amazon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discover Arbi on Amazon
          </Button>

          <Button variant="secondary" href="#how-it-works">
            Learn How It Works
          </Button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            '📖 Physical books meet digital magic',
            '🌍 8 languages for every family',
            '💡 Learning through play and curiosity',
            '🎯 Engagement that lasts',
          ].map((value) => (
            <div key={value} className="text-center">
              <p className="text-lg font-semibold text-gray-900">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Books Showcase */}
      <section id="books" className="container-section">
        <h2 className="text-center mb-16">Explore Our Books</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book) => (
            <Card key={book.id} className="overflow-hidden">
              <div className="bg-blue-100 h-48 flex items-center justify-center text-8xl">
                {book.cover}
              </div>

              <div className="p-8">
                <h3 className="mb-3">{book.title}</h3>

                <p className="text-gray-600 mb-4">{book.pitch}</p>

                <div className="mb-6 space-y-2 text-sm">
                  <p>
                    <strong>Theme:</strong> {book.theme}
                  </p>
                  <p>
                    <strong>AR Experience:</strong> {book.appeal}
                  </p>
                </div>

                <Button
                  href="https://amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get {book.title} on Amazon
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-50 py-20 md:py-32">
        <div className="container-section">
          <h2 className="text-center mb-16">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl"
                  style={{ backgroundColor: item.color }}
                >
                  {item.step}
                </div>

                <h3 className="text-xl font-bold mb-2">{item.title}</h3>

                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              You only need the physical book, the free ARBI app, and a device
              with a camera.
            </p>

            <Button href="#faq">Have Questions? See Our FAQ</Button>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="container-section">
        <h2 className="text-center mb-6">Available in 8 Languages</h2>

        <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Arbi books support multilingual families and expose children to
          languages naturally through engaging stories.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {languages.map((lang) => (
            <div
              key={lang}
              className="bg-blue-50 p-6 rounded-lg text-center font-semibold"
            >
              {lang}
            </div>
          ))}
        </div>
      </section>

      {/* Educational Benefits */}
      <section className="bg-blue-50 py-20 md:py-32">
        <div className="container-section">
          <h2 className="text-center mb-12">
            Why Educators & Parents Love Arbi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-8 rounded-lg">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-2xl"
                  style={{ backgroundColor: benefit.color }}
                >
                  {benefit.icon}
                </div>

                <h3 className="mb-4">{benefit.title}</h3>

                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-section">
        <h2 className="text-center mb-16">What Families Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={`${testimonial.name}-${testimonial.relation}`} className="p-8">
              <p className="text-lg italic text-gray-700 mb-4">
                &quot;{testimonial.quote}&quot;
              </p>

              <p className="text-sm text-gray-600 mb-4 font-medium">
                {testimonial.specific}
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.relation}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <CTAStrip
        title="Join Hundreds of Families"
        subtitle="Discover why Arbi is the modern reading experience families love."
        ctaText="Shop Now on Amazon"
      />

      {/* Blog Preview */}
      <section className="container-section">
        <h2 className="text-center mb-12">Learn More About AR & Reading</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'How Augmented Reality Transforms Reading',
              category: 'AR & Education',
            },
            {
              title: 'Raising Multilingual Children: Best Strategies',
              category: 'Multilingual Learning',
            },
            {
              title: 'Why Interactive Stories Boost Engagement',
              category: 'Reading Science',
            },
          ].map((post) => (
            <Card key={post.title} className="p-8">
              <span className="text-sm font-bold text-blue-600 mb-2 block">
                {post.category}
              </span>

              <h3 className="text-lg mb-4">{post.title}</h3>

              <a
                href="/blog"
                className="no-underline text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read →
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary" href="/blog">
            Explore Full Blog
          </Button>
        </div>
      </section>
    </main>
  );
}