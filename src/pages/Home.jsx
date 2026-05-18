export default function Home() {
  const steps = [
    {
      n: '1',
      color: '#1E90FF',
      icon: '🛒',
      title: 'Buy the book',
      desc: 'Order ARBI 1 or ARBI 2 on Amazon and receive it at home.',
    },
    {
      n: '2',
      color: '#32CD32',
      icon: '📲',
      title: 'Download the free app',
      desc: 'Search for "ARBI Wonder Book" on the App Store or Google Play and install it for free.',
    },
    {
      n: '3',
      color: '#FFD700',
      icon: '📖',
      title: 'Open the book',
      desc: 'Open the app, point your camera at any page of the book.',
    },
    {
      n: '4',
      color: '#FF8C00',
      icon: '✨',
      title: 'Watch the magic',
      desc: '3D characters leap off the page! Interact, play and live the adventure.',
    },
  ];

  const values1 = [
    { icon: '🤝', title: 'Teamwork', desc: 'Arbi and friends can only defeat the dragon by working together.' },
    { icon: '💬', title: 'Communication', desc: 'Talking openly and listening is key to solving any problem.' },
    { icon: '🫂', title: 'Cooperation', desc: 'Every character brings a unique skill. Together, unstoppable.' },
    { icon: '💛', title: 'Forgiveness', desc: 'Choosing forgiveness is the bravest thing you can do.' },
  ];

  const values2 = [
    { icon: '👨‍👩‍👧', title: 'Family First', desc: 'No gold compares to coming home to the people who love you.' },
    { icon: '🫶', title: 'True Friendship', desc: 'Real friends are the greatest treasure anyone can find.' },
    { icon: '❤️', title: 'Love & Gratitude', desc: 'Appreciate the people around you every single day.' },
    { icon: '✨', title: 'What Really Matters', desc: 'Memories, laughter and love last forever.' },
  ];

  const benefits = [
    { color: '#1E90FF', icon: '📖', title: 'Boosts Reading Engagement', desc: 'Kids stay focused longer and ask to read again and again.' },
    { color: '#32CD32', icon: '🧠', title: 'Strengthens Comprehension', desc: '3D scenes dramatically improve story understanding and memory.' },
    { color: '#FFD700', icon: '🎮', title: 'Learning Through Play', desc: 'AR mini-games reinforce the values of each story in a fun way.' },
    { color: '#FF8C00', icon: '🌟', title: 'Sparks Creativity', desc: 'Children become active participants, not just passive readers.' },
    { color: '#1E90FF', icon: '💪', title: 'Emotional Intelligence', desc: 'Kids explore empathy, teamwork and resilience safely.' },
    { color: '#32CD32', icon: '👨‍👩‍👧', title: 'Family Bonding', desc: 'Shared AR moments make reading a family ritual.' },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Mom of 2',
      stars: 5,
      text: 'My daughter asked to read every single night after we got ARBI. The AR characters are absolutely magical — she was speechless the first time they jumped off the page!',
    },
    {
      name: 'Carlos R.',
      role: 'Dad & teacher',
      stars: 5,
      text: 'As a teacher I was skeptical, but ARBI genuinely improves reading engagement. My students who struggle with reading are now the most excited ones in class.',
    },
    {
      name: 'Emma L.',
      role: 'Mom of 3',
      stars: 5,
      text: 'We got both books and the kids fight over who gets to scan the pages first. Best purchase of the year. The values in the stories are exactly what I want my children to learn.',
    },
  ];

  const languages = [
    '🇬🇧 English', '🇪🇸 Spanish', '🇫🇷 French',
    '🇩🇪 German', '🇮🇹 Italian', '🏴 Basque',
    '🏴 Catalan', '🇸🇪 Swedish',
  ];

  return (
    <main style={{ backgroundColor: '#FFFFFF' }}>

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 items-center" style={{ minHeight: 'calc(100vh - 80px)', maxHeight: '800px' }}>

          {/* Left copy */}
          <div className="flex flex-col justify-center py-6 text-center md:text-left z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-3">
              Magic books with{' '}
              <span style={{ color: '#1E90FF' }}>Augmented</span>{' '}
              <span style={{ color: '#32CD32' }}>Reality</span>
            </h1>

            <p className="text-xl font-extrabold mb-4" style={{ color: '#FFD700' }}>
              &#11088; Your books come to life!
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              Scan the pages with the free app and watch the characters leap into your world in augmented reality. Available on Amazon.
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#books" className="btn-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105" style={{ backgroundColor: '#1E90FF' }}>
                Buy on Amazon
              </a>
              <a href="#how-it-works" className="btn-secondary bg-white text-gray-800 font-bold py-3 px-6 rounded-lg border border-gray-300 shadow-lg transition-transform transform hover:scale-105">
                Download the app &#128242;
              </a>
            </div>
          </div>

        </div>

        {/* Right — Hero image */}
        <div className="absolute bottom-0 right-0 w-full md:w-[62%] h-full pointer-events-none">
          <img
            src="/images/hero-visual.png"
            alt="ARBI augmented reality experience"
            className="absolute bottom-0 left-0 w-full h-auto object-cover"
            style={{
              maskImage: 'linear-gradient(to top, transparent 3%, black 22%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 3%, black 22%)',
            }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW IT WORKS — movido aquí, después del hero
      ═══════════════════════════════════════════ */}
      <section id="how-it-works" style={{ backgroundColor: '#FAFAF5' }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full text-white mb-4"
              style={{ backgroundColor: '#32CD32' }}
            >
              📱 How It Works
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
              Magic in 4 simple steps
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              No special glasses. No complicated setup. Just a book, a free app, and the wonder on your child's face.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {steps.map((s) => (
              <div
                key={s.n}
                className="bg-white rounded-2xl p-6 shadow-sm text-center border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-white font-extrabold text-lg"
                  style={{ backgroundColor: s.color }}
                >
                  {s.n}
                </div>
                <div className="text-2xl mb-2">{s.icon}</div>
                <h3 className="font-extrabold text-gray-900 mb-2 text-base">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          {/* Video */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-900 flex items-center justify-center" style={{ aspectRatio: '16/9' }}>
            {/*
              TODO: Replace with your demo video.
              Option A — local: <video src="/videos/arbi-demo.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
              Option B — YouTube: <iframe src="https://www.youtube.com/embed/YOUR_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_ID" allow="autoplay; fullscreen" allowFullScreen className="w-full h-full border-0" />
            */}
            <div className="text-center text-white px-8 py-16">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl" style={{ backgroundColor: '#1E90FF' }}>▶</div>
              <p className="text-2xl font-extrabold mb-2">Watch ARBI Come to Life</p>
              <p className="text-gray-400 text-sm max-w-md mx-auto">Replace this with your demo video</p>
            </div>
          </div>
          <div className="mt-10 text-center flex flex-wrap gap-4 justify-center">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-extrabold rounded-xl shadow-md hover:opacity-90 transition-all"
              style={{ backgroundColor: '#1E90FF' }}>🍎 Download on App Store</a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-extrabold rounded-xl shadow-md hover:opacity-90 transition-all"
              style={{ backgroundColor: '#32CD32' }}>🟢 Get it on Google Play</a>
          </div>
          <p className="text-center text-sm text-gray-400 mt-3 font-semibold">100% Free — No subscription, no hidden costs</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOOKS
      ═══════════════════════════════════════════ */}
      <section id="books" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full text-white mb-4"
            style={{ backgroundColor: '#FF8C00' }}
          >
            📖 The Books
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
            Two adventures. A lifetime of values.
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Each ARBI story entertains children while planting seeds of important life values —
            powered by AR that makes every page unforgettable.
          </p>
        </div>

        {/* Books en dos columnas en la misma fila */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Book 1 */}
          <div className="flex flex-col">
            <div className="rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-6" style={{ aspectRatio: '1/1' }}>
              <img src="/images/arbi-book1-cover.jpg" alt="ARBI and the Fire-Breathing Dragon" className="w-full h-full object-cover" />
            </div>
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-3 self-start" style={{ backgroundColor: '#1E90FF' }}>Book 1</span>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight">ARBI and the Fire-Breathing Dragon</h3>
            <blockquote className="border-l-4 pl-4 my-4 italic text-gray-500 text-sm" style={{ borderColor: '#1E90FF' }}>
              "If you want to go fast, go alone.<br />If you want to go far, go together."
            </blockquote>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              When a fire-breathing dragon threatens Arbiland, Arbi and his friends must set aside
              their differences and combine their strengths. The real battle is learning to trust,
              communicate, and forgive.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {values1.map((v) => (
                <div key={v.title} className="flex gap-2 items-start">
                  <span className="text-lg mt-0.5">{v.icon}</span>
                  <div>
                    <p className="font-extrabold text-xs text-gray-800">{v.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://amazon.com" target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-white font-extrabold rounded-xl shadow-md hover:opacity-90 transition-all self-start mt-auto"
              style={{ backgroundColor: '#1E90FF' }}>Get Book 1 on Amazon</a>
          </div>

          {/* Book 2 */}
          <div className="flex flex-col">
            <div className="rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-6" style={{ aspectRatio: '1/1' }}>
              <img src="/images/arbi-book2-cover.jpg" alt="ARBI and the Treasure Chest" className="w-full h-full object-cover" />
            </div>
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-3 self-start" style={{ backgroundColor: '#32CD32' }}>Book 2</span>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight">ARBI and the Treasure Chest</h3>
            <blockquote className="border-l-4 pl-4 my-4 italic text-gray-500 text-sm" style={{ borderColor: '#32CD32' }}>
              "The real treasure was never inside the chest."
            </blockquote>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              Arbi sets off to find the legendary Treasure Chest, convinced gold will make everything
              perfect. But what he finds surprises everyone. A heartwarming story about family,
              friendship and love.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {values2.map((v) => (
                <div key={v.title} className="flex gap-2 items-start">
                  <span className="text-lg mt-0.5">{v.icon}</span>
                  <div>
                    <p className="font-extrabold text-xs text-gray-800">{v.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://amazon.com" target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-white font-extrabold rounded-xl shadow-md hover:opacity-90 transition-all self-start mt-auto"
              style={{ backgroundColor: '#32CD32' }}>Get Book 2 on Amazon</a>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          AR BENEFITS
      ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full text-white mb-4"
            style={{ backgroundColor: '#FF8C00' }}
          >
            🔬 Why AR + Books?
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
            The science of reading,<br />supercharged by technology
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Augmented Reality is not just a gimmick — it is a powerful learning tool that transforms
            how children engage with stories, values and ideas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow bg-white">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: b.color + '20' }}
              >
                {b.icon}
              </div>
              <h3 className="font-extrabold text-gray-900 mb-2 text-base">{b.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#FAFAF5' }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full text-white mb-4"
              style={{ backgroundColor: '#1E90FF' }}
            >
              ⭐ Reviews
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Families love ARBI</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Real families, real reactions. See what happens when children open an ARBI book for the first time.
            </p>
          </div>

          {/* Written testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} style={{ color: '#FFD700' }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 italic">
                  "{t.text}"
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-extrabold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video reviews placeholder */}
          <div className="text-center mb-8">
            <p className="text-sm font-extrabold text-gray-500 uppercase tracking-wide">Video reviews from Amazon customers</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl bg-white flex flex-col items-center justify-center border-2 border-dashed border-gray-200 p-10 hover:border-gray-300 transition-colors"
                style={{ aspectRatio: '16/9' }}
              >
                <div className="text-4xl mb-2">🎬</div>
                <p className="text-sm font-extrabold text-gray-500">Video review {i}</p>
                <p className="text-xs text-gray-400 text-center mt-1">Paste your Amazon review video here</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LANGUAGES
      ═══════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">One story. Eight languages.</h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          ARBI books are available in 8 languages — perfect for multilingual families and bilingual classrooms.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {languages.map((lang) => (
            <span
              key={lang}
              className="px-5 py-2.5 rounded-xl font-bold text-sm bg-white border-2 text-gray-700 shadow-sm"
              style={{ borderColor: '#1E90FF' }}
            >
              {lang}
            </span>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#1E90FF' }} className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to start the adventure?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: '#cce7ff' }}>
            Give your child a story they will never forget — with values that will stay with
            them forever. Available now on Amazon. App is 100% free.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white font-extrabold rounded-xl hover:shadow-xl transition-all text-base"
              style={{ color: '#1E90FF' }}
            >
              Buy on Amazon 🛒
            </a>
            <a
              href="/faq"
              className="inline-block px-8 py-4 font-extrabold rounded-xl border-2 border-white text-white hover:bg-blue-600 transition-all text-base"
            >
              Read the FAQ
            </a>
          </div>
          <p className="text-sm mt-6" style={{ color: '#99d3ff' }}>
            📱 Free app on App Store &amp; Google Play
          </p>
        </div>
      </section>

    </main>
  );
}