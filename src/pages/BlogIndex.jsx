import Card from '../components/Card';
import Button from '../components/Button';

export default function BlogIndex() {
  const categories = [
    'AR & Education',
    'Reading Engagement',
    'Multilingual Learning',
    'Learning Science',
    'Gift Ideas',
    'Technology & Parenting',
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'How Augmented Reality Books Transform Early Literacy',
      excerpt: 'Discover why AR-enhanced reading is changing how children engage with stories and learn to love reading.',
      category: 'AR & Education',
      readTime: '5 min',
      date: '2026-04-23',
    },
    {
      id: 2,
      title: 'Raising Multilingual Children: Best Resources and Strategies',
      excerpt: 'A practical guide to supporting your children in learning multiple languages naturally and with confidence.',
      category: 'Multilingual Learning',
      readTime: '7 min',
      date: '2026-04-22',
    },
    {
      id: 3,
      title: 'Why Kids Lose Interest in Reading (And How AR Changes That)',
      excerpt: 'Explore the psychology of reading engagement and why interactive stories keep children reading longer.',
      category: 'Reading Engagement',
      readTime: '6 min',
      date: '2026-04-21',
    },
    {
      id: 4,
      title: 'Understanding Early Childhood Cognitive Development',
      excerpt: 'What happens in a child\'s brain during reading, and how interactive books support learning.',
      category: 'Learning Science',
      readTime: '8 min',
      date: '2026-04-20',
    },
    {
      id: 5,
      title: 'Perfect Educational Gifts for Children',
      excerpt: 'Thoughtful gift ideas for readers of all ages, including why AR books are perfect for curious minds.',
      category: 'Gift Ideas',
      readTime: '5 min',
      date: '2026-04-19',
    },
    {
      id: 6,
      title: 'Screen Time Done Right: Educational Technology for Families',
      excerpt: 'How to balance technology and reading, and why AR books are different from passive screen time.',
      category: 'Technology & Parenting',
      readTime: '6 min',
      date: '2026-04-18',
    },
  ];

  return (
    <main className="bg-white">
      <section className="container-section text-center pt-32">
        <h1 className="mb-6">Arbi Blog</h1>
        <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
          Insights on augmented reality, reading engagement, language learning, and modern parenting.
        </p>
      </section>

      <section className="container-section">
        <div className="mb-12">
          <h2 className="mb-6">Categories</h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">
              All Posts
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 font-semibold"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="p-8 flex flex-col">
              <span className="text-sm font-bold text-blue-600 mb-3 block">
                {post.category}
              </span>
              <h3 className="mb-4 flex-grow">{post.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>{post.readTime} read</span>
                <span>{post.date}</span>
              </div>
              <a href={`/blog/${post.id}`} className="no-underline text-blue-600 hover:text-blue-800 font-semibold">
                Read Article →
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">Want new articles delivered?</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
