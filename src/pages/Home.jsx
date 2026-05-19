import { useState } from 'react';
import amazonWhiteIcon from '../assets/amazon-white-icon.webp';
import arbi1Book from '../assets/arbi1-book.jpg';
import arbi2Book from '../assets/arbi2-book.jpg';
import arbi1Icon from '../assets/arbi1-icon.png';
import arbi2Icon from '../assets/arbi2-icon.png';
import instruction3 from '../assets/instruction-3.webp';

export default function Home() {
  const [videoPage, setVideoPage] = useState(0);

  const videos = [
    { name: 'Sofia & her dragon 🐉', flag: '🇺🇸', color: '#1E90FF' },
    { name: 'Lucas primera vez 🤩', flag: '🇪🇸', color: '#32CD32' },
    { name: 'The Johnson family 📖', flag: '🇬🇧', color: '#FF8C00' },
    { name: 'Mia découvre ARBI ✨', flag: '🇫🇷', color: '#FFD700' },
    { name: 'Lena liest mit AR 🌟', flag: '🇩🇪', color: '#1E90FF' },
    { name: 'Familia Torres 💛', flag: '🇲🇽', color: '#32CD32' },
    { name: 'Emma first scan 😱', flag: '🇦🇺', color: '#FF8C00' },
    { name: 'Ahmed & Arbi 🦄', flag: '🇦🇪', color: '#FFD700' },
    { name: 'Les enfants adorent 💙', flag: '🇧🇪', color: '#1E90FF' },
    { name: 'Noah can\'t stop! 🔥', flag: '🇨🇦', color: '#32CD32' },
  ];
  const VIDEOS_PER_PAGE = 5;
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);

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
      name: 'A long way from home',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'Wow wow wow — transported into 3D Arbi land!',
      text: 'I love this book. Point the app camera at the pages and wow wow wow — you\'re transported into 3D Arbi land. The message about cooperation and teamwork is pure and not heavy-handed at all.',
    },
    {
      name: 'Deb',
      role: 'EdTech Consultant · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'Even almost-teenagers were amazed',
      text: 'I travel the world training teachers on AR and the ARBI books are incredible. I shared them with 6th and 7th graders and they were all amazed — even almost-teenagers. The AR grabbed their attention and the story values are exactly what our kids need.',
    },
    {
      name: 'Spencer in Seattle',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'A mind-blowing reinvention of the book',
      text: 'This is a mind-blowing reinvention of the book. When you look through the app, an incredible 3D world floats over every illustration. I showed it to a 10-year-old and a 35-year-old professor — both were blown away.',
    },
    {
      name: 'Sandy Sandmeyer',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'The most amazing book I\'ve ever seen',
      text: 'ARBI is the most amazing book I\'ve ever seen. Point your device at the illustrations and the pictures actually come alive! A great story of friendship, teamwork and acceptance.',
    },
    {
      name: 'My Two Cents',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'Takes reading to a WHOLE NEW LEVEL',
      text: 'I have never in my life seen anything this cool! The app takes reading to a WHOLE NEW LEVEL. Any child would enjoy the book as is, but adding the AR literally brings it to life right before your eyes.',
    },
    {
      name: 'Jocelyn',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'The characters literally come to life',
      text: 'I really enjoyed reading this story and watching the book come alive with my smartphone — the illustrations became 3D. Children of all ages will love this book about teamwork and never giving up.',
    },
    {
      name: 'Dr. Cary',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'Like pop-up 3D books, only BETTER!',
      text: 'My 5-year-old nephew loved this and would not put it down for hours. It\'s like pop-up 3D books only BETTER! He read it several more times — only stopping when the iPad battery ran out.',
    },
    {
      name: 'SueKich',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'Knights and dragons spring to life on screen',
      text: 'I was absolutely bowled over by this brilliant idea. Just pop the free app onto your phone, hold it above the illustrations, and knights, cats and fire-breathing dragons all spring to life on screen.',
    },
    {
      name: 'Matthew Scott Baker',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'A breakthrough in children\'s literature',
      text: 'ARBI is a breakthrough in children\'s literature. This augmented-reality storytelling will enthrall readers of all ages. I found no flaws in the programming nor in the story — I would love to see this used in classrooms.',
    },
    {
      name: 'Richard and Liz',
      role: 'Verified Purchase · United States',
      stars: 4,
      book: 'ARBI 1',
      title: 'TOTALLY COOL — the dragon flies off the page',
      text: 'Although you can read this book without the app, your kids will get WAY more fun seeing the pictures come to life! Point the camera 12-24 inches away — the dragon flies off the page. Yes, it is pretty amazing! TOTALLY COOL augmented reality book.',
    },
    {
      name: 'WDC',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'The Dragon flies around the sky — really cool',
      text: 'The illustrations are very colorful and well drawn. When you point the camera at the page the drawing comes to life in 3D — the Knight climbs a wall, the Dragon flies around the sky. I have no idea how this works, but it is really cool.',
    },
    {
      name: 'Night Owl Romance',
      role: 'Verified Purchase · United States',
      stars: 4,
      book: 'ARBI 1',
      title: 'Merges story with augmented reality beautifully',
      text: 'A very cool children\'s book that merges story with augmented reality. The 3D art brings the story to life. Available in a variety of languages — a huge plus. The technology in children\'s books is way awesome.',
    },
    {
      name: 'AmazonReviewMaster',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'My 4-year-old son couldn\'t get enough',
      text: 'I have a 4-year-old son and he loved this book! The animated 3D scenes are tracked to the book, so if you move the book the figures turn with it. My son couldn\'t get enough and was intrigued at how augmented reality worked.',
    },
    {
      name: 'Sara Spears',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'Like a digital pop-up book — I was blown away',
      text: 'This is the first time I ever saw an augmented reality book and I was blown away. The book itself is cute and colorful with a great message about forgiveness. I hovered my phone over the book and it came to life — like a digital pop-up book.',
    },
    {
      name: 'reg',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'Perfect for children learning to read',
      text: 'I have 8 grandchildren and I thought this would be great to share with them. The pictures are delightful. This will be an excellent transition from a traditional picture book to a chapter book — perfect for children learning to read.',
    },
    {
      name: 'Phyllis Staff',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'A story children everywhere need right now',
      text: 'Load the app, point the camera at a page, and watch the action begin. Not only do I love the AR, I love the story where fear and fighting is turned to cooperation and joy. It\'s a story children everywhere need now more than ever.',
    },
    {
      name: 'Roy',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'My son was blown away by the app',
      text: 'This book is written at a just-comfortable reading level for a 1st grader. My son loved the story before seeing the cool iPad app — and was blown away by the app. A wonderfully written and well illustrated story.',
    },
    {
      name: 'shuTTL3bus',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'Teamwork, redemption and incredible AR',
      text: 'Great little book on its own — first rate artwork and a well written story. The AR was a nice feature and my 7 and 6-year-old children were thrilled. The story teaches teamwork and redemption, which are admirable traits.',
    },
    {
      name: 'JNG',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 1',
      title: 'Absolutely the coolest book we\'ve read',
      text: 'Absolutely the coolest book I have read with the kids. I find myself reading it just to look at the 3D effects. My nieces and nephews aged 7 and 9 had a ball — even my toddler enjoyed it. We absolutely love it!',
    },
    {
      name: 'Pau B.',
      role: 'Verified Purchase · Spain',
      stars: 5,
      book: 'ARBI 1',
      title: 'Regalo perfecto para los peques',
      text: 'Un regalo perfecto para los peques. Historia con moraleja e ilustración AR muy cuidada. Una opción genial para que los niños lean, se diviertan y usen las nuevas tecnologías. ¡Habrá que hacerse con el capítulo 2!',
    },
    // ── ARBI 2 ──────────────────────────────────────────────────
    {
      name: 'A long way from home',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 2',
      title: 'If you don\'t know Arbi, you\'re missing out',
      text: 'I was a huge fan of the original Arbi book. The theme is similar but our heroes find a new predicament — the message of cooperation comes through loud and clear. And the AR now has SOUND on every page. So so so engaging that at times it competes with the story!',
    },
    {
      name: 'Richard and Liz',
      role: 'Verified Purchase · United States',
      stars: 4,
      book: 'ARBI 2',
      title: 'Aargh! There be pirates after the treasure!',
      text: 'Totally cool is way too tame a phrase for the Arbi books. The pages literally come alive — Drako flies, characters move and there is music in the background. Your kids will LOVE this book!',
    },
    {
      name: 'Deb',
      role: 'EdTech Consultant · United States',
      stars: 5,
      book: 'ARBI 2',
      title: 'Storyline as well written as the AR itself',
      text: 'The second book continues the story in a new adventure — pirates, a treasure chest, and the lesson that family and friendship are the best treasure of all. The AR pulled these students in and held their attention the entire time. Excellent gifts for kids of all ages!',
    },
    {
      name: 'Piaras',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 2',
      title: 'An amazing book that literally comes to life!',
      text: 'What sets this book apart is the augmented reality — it joins the physical and virtual world in a way I\'ve never seen before. Magnificent illustrations and incredible challenges. Not only did I find this amazing, but my grandchildren did too. My two grandchildren and I absolutely adored this book!',
    },
    {
      name: 'Spencer in Seattle',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 2',
      title: 'What happens when books bleed into video animation?',
      text: 'The first book is on the page, the other is a 3D animation that appears when you point the camera at the book — it really comes to life via the app. This book stands alone as a nice kids book: adventure, a treasure map, magical pirates and the return of the kind dragon. Really well made.',
    },
    {
      name: 'Jocelyn',
      role: 'Verified Purchase · United States',
      stars: 4,
      book: 'ARBI 2',
      title: 'Adorable and well-made — even better than the first',
      text: 'I loved the first book and when offered the second I was delighted! The author makes an amazing storyline that children can appreciate and that literally comes to life. I love how the meaning of the story, cute graphics and characters all come together. Recommended for everyone!',
    },
    {
      name: 'Amazon Customer',
      role: 'Verified Purchase · United States',
      stars: 5,
      book: 'ARBI 2',
      title: 'AWESOME — outstanding augmented reality book',
      text: 'ARBI and the Treasure Chest is the most amazing book I\'ve ever seen. By using augmented reality, your child\'s books literally come alive. Point your device at the images and MAGIC — the pictures come to life. Available in 9 languages. This IS the new way to read and engage with your child.',
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
          <div className="flex flex-col justify-center py- text-center md:text-left z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-3">
              Magic books with{' '}
              <span style={{ color: '#1E90FF' }}>Augmented</span>{' '}
              <span style={{ color: '#32CD32' }}>Reality</span>
            </h1>

            <p className="text-xl font-extrabold mb-4" style={{ color: '#FF8C00' }}>
              &#11088; Your books come to life!
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              Scan the pages with the free app to bring the characters to life in Augmented Reality. 
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#books" className="btn-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105" style={{ backgroundColor: '#1E90FF' }}>
                Buy it on Amazon
              </a>
              <a href="#how-it-works" className="btn-secondary bg-white text-gray-800 font-bold py-3 px-6 rounded-lg border border-gray-300 shadow-lg transition-transform transform hover:scale-105">
                How it works &#128242;
              </a>
            </div>
          </div>

        </div>

        {/* Right — Hero image */}
        <div className="absolute bottom-0 right-0 w-full md:w-[78%] h-full pointer-events-none">
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
          HOW IT WORKS
      ═══════════════════════════════════════════ */}
      <section id="how-it-works" style={{ backgroundColor: '#F7F6F2' }} className="py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full text-white mb-5"
              style={{ backgroundColor: '#32CD32' }}
            >
              ✨ How It Works
            </span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Magic in{' '}
              <span style={{ color: '#1E90FF' }}>3</span>{' '}simple steps
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto text-lg leading-relaxed">
              Scan any page. Watch the characters leap out.  It takes less than 2 minutes to get started.
            </p>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-12">

            {/* ── STEP 1 ── */}
            <div
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col group"
              style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(30,144,255,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)'; }}
            >
              {/* Card top stripe */}
              <div style={{ background: 'linear-gradient(135deg, #1E90FF 0%, #63b8ff 100%)', height: '5px' }} />

              <div className="p-7 flex flex-col flex-1">
                {/* Badge + title */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0"
                    style={{ backgroundColor: '#1E90FF', boxShadow: '0 4px 12px rgba(30,144,255,0.4)' }}
                  >1</span>
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-lg leading-tight">Get the book on Amazon</h3>
                    <p className="text-sm font-semibold" style={{ color: '#1E90FF' }}>Available in 8 languages 🌍</p>
                  </div>
                </div>

                {/* Visual: two books tilted */}
                <div
                  className="flex-1 flex items-center justify-center gap-4 py-6 mb-5"
                  style={{ minHeight: '200px' }}
                >
                  {/* Book 1 */}
                  <div style={{ transform: 'rotate(-6deg)', filter: 'drop-shadow(0 14px 24px rgba(30,144,255,0.28))' }}>
                    <img
                      src={arbi1Book}
                      alt="ARBI Book 1"
                      className="rounded-xl"
                      style={{ width: '115px', height: 'auto', display: 'block' }}
                    />
                  </div>
                  {/* Book 2 */}
                  <div style={{ transform: 'rotate(6deg)', filter: 'drop-shadow(0 14px 24px rgba(50,205,50,0.28))' }}>
                    <img
                      src={arbi2Book}
                      alt="ARBI Book 2"
                      className="rounded-xl"
                      style={{ width: '115px', height: 'auto', display: 'block' }}
                    />
                  </div>
                </div>

                {/* Amazon CTAs */}
                <div className="flex gap-2">
                  <a
                    href="https://amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-extrabold text-white text-sm transition-all"
                    style={{ backgroundColor: '#1E90FF', boxShadow: '0 4px 12px rgba(30,144,255,0.3)' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <img src={amazonWhiteIcon} alt="Amazon" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                    Get ARBI 1 
                  </a>
                  <a
                    href="https://amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-extrabold text-white text-sm transition-all"
                    style={{ backgroundColor: '#32CD32', boxShadow: '0 4px 12px rgba(50,205,50,0.3)' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <img src={amazonWhiteIcon} alt="Amazon" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                    Get ARBI 2
                  </a>
                </div>
              </div>
            </div>

            {/* ── STEP 2 ── */}
            <div
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col group"
              style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(50,205,50,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)'; }}
            >
              <div style={{ background: 'linear-gradient(135deg, #32CD32 0%, #7de87d 100%)', height: '5px' }} />

              <div className="p-7 flex flex-col flex-1">
                {/* Badge + title */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0"
                    style={{ backgroundColor: '#32CD32', boxShadow: '0 4px 12px rgba(50,205,50,0.4)' }}
                  >2</span>
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-lg leading-tight">Download the free app</h3>
                    <p className="text-sm font-semibold" style={{ color: '#32CD32' }}>App Store &amp; Google Play 📲</p>
                  </div>
                </div>

                {/* App rows */}
                <div className="flex flex-col gap-3 flex-1 justify-center">

                  {/* Row — ARBI 1 */}
                  <div
                    className="rounded-xl p-3 flex items-center justify-center gap-4"
                    style={{ background: 'linear-gradient(135deg, #EEF6FF 0%, #F0FFF0 100%)', border: '1px solid #e0eeff' }}
                  >
                    <img src={arbi1Book} alt="Book 1" className="rounded-lg flex-shrink-0" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><polyline points="9 18 15 12 9 6"/></svg>
                    <img src={arbi1Icon} alt="ARBI 1 App" className="rounded-lg flex-shrink-0" style={{ width: '44px', height: '44px', objectFit: 'cover', boxShadow: '0 4px 10px rgba(30,144,255,0.2)' }} />
                  </div>

                  {/* Row — ARBI 2 */}
                  <div
                    className="rounded-xl p-3 flex items-center justify-center gap-4"
                    style={{ background: 'linear-gradient(135deg, #F0FFF0 0%, #FFFBEA 100%)', border: '1px solid #d4f5d4' }}
                  >
                    <img src={arbi2Book} alt="Book 2" className="rounded-lg flex-shrink-0" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><polyline points="9 18 15 12 9 6"/></svg>
                    <img src={arbi2Icon} alt="ARBI 2 App" className="rounded-lg flex-shrink-0" style={{ width: '44px', height: '44px', objectFit: 'cover', boxShadow: '0 4px 10px rgba(50,205,50,0.2)' }} />
                  </div>

                  <p className="text-center text-xs text-gray-400 font-medium">Each book has its own dedicated app 📲</p>
                  <p className="text-center text-xs font-semibold text-gray-400">100% Free · No subscription</p>

                  {/* Store badges */}
                  <div className="flex gap-2">
                    <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-white font-bold text-xs transition-opacity hover:opacity-80"
                      style={{ backgroundColor: '#1E90FF' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                      App Store
                    </a>
                    <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-white font-bold text-xs transition-opacity hover:opacity-80"
                      style={{ backgroundColor: '#1E90FF' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
                      Google Play
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── STEP 3 ── */}
            <div
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col group"
              style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,140,0,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)'; }}
            >
              <div style={{ background: 'linear-gradient(135deg, #FF8C00 0%, #FFD166 100%)', height: '5px' }} />

              <div className="p-7 flex flex-col flex-1">
                {/* Badge + title */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0"
                    style={{ backgroundColor: '#FF8C00', boxShadow: '0 4px 12px rgba(255,140,0,0.4)' }}
                  >3</span>
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-lg leading-tight">Point to book illustrations</h3>
                    <p className="text-sm font-semibold" style={{ color: '#FF8C00' }}>And enjoy augmented reality 🌟</p>
                  </div>
                </div>

                {/* Visual: instruction image full bleed */}
                <div
                  className="flex-1 rounded-2xl overflow-hidden relative"
                  style={{ minHeight: '200px' }}
                >
                  <img
                    src={instruction3}
                    alt="Augmented reality experience"
                    className="w-full h-full object-cover object-top"
                    style={{ display: 'block', maxHeight: '260px' }}
                  />
                  {/* Bottom fade */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-20 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, transparent 100%)' }}
                  />
                  {/* Right fade */}
                  <div
                    className="absolute top-0 right-0 h-full w-16 pointer-events-none"
                    style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.9) 0%, transparent 100%)' }}
                  />
                  {/* Sparkles */}
                  <span style={{ position: 'absolute', top: '12px', right: '16px', fontSize: '18px', zIndex: 2, filter: 'drop-shadow(0 0 4px rgba(255,200,0,0.9))' }}>✨</span>
                  <span style={{ position: 'absolute', top: '18px', left: '14px', fontSize: '14px', zIndex: 2, filter: 'drop-shadow(0 0 4px rgba(255,200,0,0.9))' }}>⭐</span>
                  <span style={{ position: 'absolute', top: '42%', right: '10px', fontSize: '12px', zIndex: 2, filter: 'drop-shadow(0 0 4px rgba(255,200,0,0.9))' }}>✦</span>
                </div>
              </div>
            </div>

          </div>{/* /grid */}

          {/* Video demo */}
          <div className="mt-20 pt-20 border-t border-gray-200">
            <div className="text-center mb-10">
              <span
                className="inline-block text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full text-white mb-4"
                style={{ backgroundColor: '#1E90FF' }}
              >
                🎬 See it in action
              </span>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-2 mb-2">Watch the magic happen</h3>
              <p className="text-gray-500 max-w-2xl mx-auto">See exactly how children experience the Augmented Reality with their ARBI books</p>
            </div>
            
            {/* Video container */}
            <div className="max-w-3xl mx-auto">
              <div
                className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-black"
                style={{ aspectRatio: '16/9' }}
              >
                <video
                  controls
                  className="w-full h-full"
                  style={{ display: 'block', objectFit: 'contain' }}
                >
                  <source src="./videos/how-it-works.mp4" type="video/mp4" />
                  <p>Your browser does not support the video tag.</p>
                </video>
              </div>
            </div>
          </div>

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

        {/* Books — two horizontal rows, cover left + info right */}
        <div className="flex flex-col gap-8">

          {/* Book 1 */}
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col md:flex-row" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            {/* Cover + button */}
            <div className="flex-shrink-0 flex flex-col items-center justify-end gap-4 p-6 md:p-8" style={{ background: 'linear-gradient(160deg, #EEF6FF 0%, #dbeeff 100%)', minWidth: '200px' }}>
              <img
                src="/images/arbi-book1-cover.jpg"
                alt="ARBI and the Fire-Breathing Dragon"
                className="rounded-2xl"
                style={{ width: '150px', height: 'auto', display: 'block', boxShadow: '0 12px 28px rgba(30,144,255,0.25)', transform: 'rotate(-2deg)' }}
              />
              <a href="https://amazon.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-white font-extrabold rounded-xl shadow-md hover:opacity-90 transition-all text-xs whitespace-nowrap"
                style={{ backgroundColor: '#1E90FF' }}>
                <img src={amazonWhiteIcon} alt="Amazon" style={{ width: '13px', height: '13px', objectFit: 'contain' }} />
                Get Book 1 on Amazon
              </a>
            </div>
            {/* Info */}
            <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-3 self-start" style={{ backgroundColor: '#1E90FF' }}>Book 1</span>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2 leading-tight">ARBI and the Fire-Breathing Dragon</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                The brave knight Arbi is asked by his village to save them from a threatening fire-breathing dragon. Unable to do it alone, he enlists three friends: Smarlow the Tortoise, Agick the Cat and Smellit the Dog. Can these four companions use their individual abilities, work together and restore peace to the valley?
              </p>
              <div className="border-l-4 pl-4 mb-4 py-1" style={{ borderColor: '#1E90FF', backgroundColor: '#f0f7ff', borderRadius: '0 8px 8px 0' }}>
                <p className="text-xs font-extrabold uppercase tracking-wide mb-1" style={{ color: '#1E90FF' }}>Moral of the story</p>
                <p className="italic text-gray-600 text-sm leading-snug font-medium">"If you want to go fast, go alone. If you want to go far, go together."</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {values1.map((v) => (
                  <span key={v.title} className="flex items-center gap-1 text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-lg">
                    {v.icon} {v.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Book 2 */}
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col md:flex-row" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            {/* Cover + button */}
            <div className="flex-shrink-0 flex flex-col items-center justify-end gap-4 p-6 md:p-8" style={{ background: 'linear-gradient(160deg, #F0FFF0 0%, #d4f5d4 100%)', minWidth: '200px' }}>
              <img
                src="/images/arbi-book2-cover.jpg"
                alt="ARBI and the Treasure Chest"
                className="rounded-2xl"
                style={{ width: '150px', height: 'auto', display: 'block', boxShadow: '0 12px 28px rgba(50,205,50,0.25)', transform: 'rotate(2deg)' }}
              />
              <a href="https://amazon.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-white font-extrabold rounded-xl shadow-md hover:opacity-90 transition-all text-xs whitespace-nowrap"
                style={{ backgroundColor: '#32CD32' }}>
                <img src={amazonWhiteIcon} alt="Amazon" style={{ width: '13px', height: '13px', objectFit: 'contain' }} />
                Get Book 2 on Amazon
              </a>
            </div>
            {/* Info */}
            <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-3 self-start" style={{ backgroundColor: '#32CD32' }}>Book 2</span>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2 leading-tight">ARBI and the Treasure Chest</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Arbi and his friends discover an ancient map drawn by a famous pirate called Woodleg. Together with Smellit, Agick, Smarlow and Drako the Dragon, they embark on a quest to find the most valuable treasure in the world. Will they overcome fierce pirates and other obstacles in their path?
              </p>
              <div className="border-l-4 pl-4 mb-4 py-1" style={{ borderColor: '#32CD32', backgroundColor: '#f0fff4', borderRadius: '0 8px 8px 0' }}>
                <p className="text-xs font-extrabold uppercase tracking-wide mb-1" style={{ color: '#32CD32' }}>Moral of the story</p>
                <p className="italic text-gray-600 text-sm leading-snug font-medium">"The real treasure was never inside the chest."</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {values2.map((v) => (
                  <span key={v.title} className="flex items-center gap-1 text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-lg">
                    {v.icon} {v.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section id="reviews" style={{ backgroundColor: '#FAFAF5' }} className="py-20 overflow-hidden">

        {/* Header */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <span
              className="inline-block text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full text-white mb-4"
              style={{ backgroundColor: '#1E90FF' }}
            >
              ⭐ Reviews
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Families love ARBI</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-xl" style={{ color: '#FFD700' }}>★</span>
                ))}
              </div>
              <span className="font-extrabold text-gray-900">4.9</span>
              <span className="text-gray-400 text-sm">· +47 verified reviews on Amazon</span>
            </div>
          </div>
        </div>

        {/* Marquee carousel */}
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 60s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="relative mb-14">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10" style={{ background: 'linear-gradient(to right, #FAFAF5, transparent)' }} />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10" style={{ background: 'linear-gradient(to left, #FAFAF5, transparent)' }} />

          <div className="overflow-hidden -mt-10">
            <div className="marquee-track py-3">
              {[...testimonials, ...testimonials].map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col mx-3 flex-shrink-0"
                  style={{ width: '260px' }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <span key={i} className="text-sm" style={{ color: '#FFD700' }}>★</span>
                      ))}
                    </div>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: t.book === 'ARBI 2' ? '#32CD3220' : '#1E90FF20',
                        color: t.book === 'ARBI 2' ? '#32CD32' : '#1E90FF',
                      }}
                    >
                      {t.book}
                    </span>
                  </div>
                  {t.title && (
                    <p className="font-bold text-gray-800 text-xs mb-1 leading-snug">{t.title}</p>
                  )}
                  <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-3 italic">
                    "{t.text}"
                  </p>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="font-extrabold text-gray-900 text-xs">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video reviews */}
        <div className="max-w-6xl mx-auto px-6 -mt-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-gray-200" />
            <p className="text-sm font-extrabold text-gray-400 uppercase tracking-widest whitespace-nowrap">📹 Real customers. Real reactions.</p>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <p className="text-center text-xs text-gray-400 mb-8">Families filming their children's first ARBI experience</p>

          {/* Video carousel — true sliding strip */}
          <div className="relative">

            {/* Gradient masks — hint more content on each side */}
            {videoPage > 0 && (
              <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-20" style={{ background: 'linear-gradient(to right, #FAFAF5 20%, transparent)' }} />
            )}
            {videoPage < totalPages - 1 && (
              <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-20" style={{ background: 'linear-gradient(to left, #FAFAF5 20%, transparent)' }} />
            )}

            {/* Left arrow */}
            {videoPage > 0 && (
              <button
                onClick={() => setVideoPage(p => p - 1)}
                className="absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:shadow-xl transition-shadow"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E90FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
            )}

            {/* Right arrow */}
            {videoPage < totalPages - 1 && (
              <button
                onClick={() => setVideoPage(p => p + 1)}
                className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:shadow-xl transition-shadow"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E90FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            )}

            {/* Overflow window */}
            <div className="overflow-hidden">
              {/* Sliding strip — all pages side by side */}
              <div
                style={{
                  display: 'flex',
                  width: `${totalPages * 100}%`,
                  transform: `translateX(-${videoPage * (100 / totalPages)}%)`,
                  transition: 'transform 0.45s cubic-bezier(0.25, 0.8, 0.25, 1)',
                }}
              >
                {Array.from({ length: totalPages }).map((_, pageIdx) => (
                  <div key={pageIdx} style={{ width: `${100 / totalPages}%`, flexShrink: 0 }}>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                      {videos.slice(pageIdx * VIDEOS_PER_PAGE, (pageIdx + 1) * VIDEOS_PER_PAGE).map((v, i) => (
                        <div
                          key={pageIdx * VIDEOS_PER_PAGE + i}
                          className="relative rounded-2xl overflow-hidden cursor-pointer group bg-gray-100"
                          style={{ aspectRatio: '9/16' }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
                          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${v.color}22, ${v.color}55)` }} />
                          <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                              <div className="w-0 h-0 ml-0.5" style={{ borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid #1E90FF' }} />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 z-20 p-2">
                            <p className="text-white text-[10px] font-bold leading-tight">{v.flag} {v.name}</p>
                            <div className="flex gap-0.5 mt-1">
                              {Array.from({ length: 5 }).map((_, s) => (
                                <span key={s} className="text-[10px]" style={{ color: '#FFD700' }}>★</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {Array.from({ length: totalPages }).map((_, p) => (
              <button
                key={p}
                onClick={() => setVideoPage(p)}
                className="w-2 h-2 rounded-full transition-all"
                style={{ backgroundColor: p === videoPage ? '#1E90FF' : '#D1D5DB' }}
              />
            ))}
          </div>
          {/* <p className="text-center text-xs text-gray-400 mt-3">{videos.length} video reviews</p> */}
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
            <div key={b.title} className="rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-shadow bg-white flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: b.color + '20' }}
                >
                  {b.icon}
                </div>
                <h3 className="font-extrabold text-gray-900 text-base leading-tight">{b.title}</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LANGUAGES
      ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
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
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#cce7ff' }}>
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
              Get them on Amazon now
            </a>
            {/* <a
              href="/faq"
              className="inline-block px-8 py-4 font-extrabold rounded-xl border-2 border-white text-white hover:bg-blue-600 transition-all text-base"
            >
              Read the FAQ
            </a> */}
          </div>
        </div>
      </section>

    </main>
  );
}