const { v4: uuidv4 } = require('uuid');

const products = [
  {
    id: uuidv4(),
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: uuidv4(),
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    id: uuidv4(),
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    id: uuidv4(),
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    id: uuidv4(),
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    id: uuidv4(),
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },

  {
    id: uuidv4(),
    name: 'SoundWave True Wireless Earbuds',
    image: '/images/soundwave.jpg',
    description:
      'Cutting-edge true wireless earbuds with advanced sound technology for a truly immersive audio experience. Stay connected with Bluetooth connectivity and enjoy crystal-clear calls with the built-in microphone.',
    brand: 'TechZone',
    category: 'Electronics',
    price: 79.99,
    countInStock: 15,
    rating: 4.3,
    numReviews: 8,
  },

  {
    id: uuidv4(),
    name: 'Beats Pro Wireless Over-Ear Headphones',
    image: '/images/beats-pro.jpg',
    description:
      'Experience professional-grade sound quality and unrivaled comfort with these wireless over-ear headphones. Designed for audio enthusiasts, they provide exceptional clarity and deep bass. Stay wire-free with Bluetooth technology.',
    brand: 'Beats by Dr. Dre',
    category: 'Electronics',
    price: 249.99,
    countInStock: 5,
    rating: 4.7,
    numReviews: 22,
  },

  {
    id: uuidv4(),
    name: 'SoundBlast Sport Bluetooth Earphones',
    image: '/images/soundblast-sport.jpg',
    description:
      'Designed for active individuals, these sport Bluetooth earphones offer a secure and comfortable fit. With high-quality sound and sweat resistance, they are perfect for workouts and outdoor activities.',
    brand: 'AudioFit',
    category: 'Electronics',
    price: 59.99,
    countInStock: 20,
    rating: 4.4,
    numReviews: 15,
  },

  {
    id: uuidv4(),
    name: 'EchoPods Voice-Controlled Wireless Earbuds',
    image: '/images/echopods.jpg',
    description:
      'These wireless earbuds feature built-in voice control powered by a virtual assistant. Enjoy hands-free operation and seamless connectivity with compatible devices. The sleek design and premium sound quality make them a must-have accessory.',
    brand: 'TechSmart',
    category: 'Electronics',
    price: 99.99,
    countInStock: 8,
    rating: 4.6,
    numReviews: 18,
  },

  {
    id: uuidv4(),
    name: 'SoloBeat On-Ear Bluetooth Headphones',
    image: '/images/solobeat.jpg',
    description:
      'Experience powerful sound and stylish design with these on-ear Bluetooth headphones. The cushioned ear cups provide comfort for extended listening sessions, while the built-in microphone allows for easy hands-free calling.',
    brand: 'SoundTech',
    category: 'Electronics',
    price: 129.99,
    countInStock: 12,
    rating: 4.2,
    numReviews: 10,
  },

  {
    id: uuidv4(),
    name: 'XtremeBass Wireless Neckband Earphones',
    image: '/images/xtremebass.jpg',
    description:
      'Enjoy deep bass and ultimate convenience with these wireless neckband earphones. The flexible and lightweight design ensures a comfortable fit, while the long-lasting battery keeps the music going for hours.',
    brand: 'XAudio',
    category: 'Electronics',
    price: 69.99,
    countInStock: 18,
    rating: 4.3,
    numReviews: 14,
  },

  {
    id: uuidv4(),
    name: 'SoundScape Premium Noise-Canceling Headphones',
    image: '/images/soundscape.jpg',
    description:
      'Immerse yourself in pure music bliss with these premium noise-canceling headphones. Featuring advanced active noise cancellation technology, they block out ambient sounds for a truly immersive audio experience.',
    brand: 'SonicTune',
    category: 'Electronics',
    price: 199.99,
    countInStock: 3,
    rating: 4.8,
    numReviews: 27,
  },

  {
    id: uuidv4(),
    name: 'MusicPulse Wireless Earbuds with Heart Rate Monitor',
    image: '/images/musicpulse.jpg',
    description:
      'Experience the perfect blend of music and fitness with these wireless earbuds equipped with a built-in heart rate monitor. Monitor your workout intensity while enjoying your favorite tunes.',
    brand: 'FitAudio',
    category: 'Electronics',
    price: 109.99,
    countInStock: 7,
    rating: 4.5,
    numReviews: 16,
  },

  {
    id: uuidv4(),
    name: 'UltraClear Gaming Headset with 7.1 Surround Sound',
    image: '/images/ultraclear.jpg',
    description:
      'Get an edge in gaming with this high-performance gaming headset. Experience immersive 7.1 surround sound and communicate clearly with the noise-canceling microphone. The comfortable design allows for long gaming sessions.',
    brand: 'GameZone',
    category: 'Electronics',
    price: 149.99,
    countInStock: 6,
    rating: 4.7,
    numReviews: 25,
  },

  {
    id: uuidv4(),
    name: 'BassPods True Wireless Earbuds',
    image: '/images/basspods.jpg',
    description:
      'Delve into the world of deep bass with these true wireless earbuds. The ergonomic design provides a secure fit, while the advanced audio technology delivers powerful bass and crystal-clear sound.',
    brand: 'BassMasters',
    category: 'Electronics',
    price: 79.99,
    countInStock: 10,
    rating: 4.4,
    numReviews: 13,
  },

  {
    id: uuidv4(),
    name: 'SoundSoul On-Ear Foldable Headphones',
    image: '/images/soundsoul.jpg',
    description:
      'These on-ear foldable headphones combine style, portability, and impressive sound quality. The foldable design makes them easy to carry, while the adjustable headband ensures a comfortable fit for all-day use.',
    brand: 'SoundTech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 14,
    rating: 4.1,
    numReviews: 9,
  },

  {
    id: uuidv4(),
    name: 'TrekSound Waterproof Bluetooth Speaker',
    image: '/images/treksound.jpg',
    description:
      'Take your music anywhere with this rugged and waterproof Bluetooth speaker',
    brand: 'OutdoorAudio',
    category: 'Electronics',
    price: 79.99,
    countInStock: 10,
    rating: 4.3,
    numReviews: 11,
  },

  {
    id: uuidv4(),
    name: 'Audiophile Studio Monitor Headphones',
    image: '/images/audiophile.jpg',
    description:
      'For the discerning audiophile, these studio monitor headphones provide unparalleled sound accuracy and clarity. Designed for professional audio production, they offer a flat frequency response and ergonomic comfort.',
    brand: 'AudioPro',
    category: 'Electronics',
    price: 249.99,
    countInStock: 5,
    rating: 4.9,
    numReviews: 30,
  },

  {
    id: uuidv4(),
    name: 'ActiveGear Bone Conduction Headphones',
    image: '/images/activegear.jpg',
    description:
      'Experience a new way of listening with these bone conduction headphones. They deliver sound through vibrations, leaving your ears open to the surrounding environment. Perfect for outdoor activities and sports.',
    brand: 'TechSense',
    category: 'Electronics',
    price: 89.99,
    countInStock: 8,
    rating: 4.5,
    numReviews: 17,
  },

  {
    id: uuidv4(),
    name: 'SoundSphere Wireless Multiroom Speaker System',
    image: '/images/soundsphere.jpg',
    description:
      'Create a seamless multiroom audio experience with this wireless speaker system. The SoundSphere speakers offer crisp and clear sound with the ability to connect and control multiple speakers throughout your home.',
    brand: 'SoundMasters',
    category: 'Electronics',
    price: 299.99,
    countInStock: 2,
    rating: 4.6,
    numReviews: 23,
  },

  {
    id: uuidv4(),
    name: 'HarmonyPods True Wireless Earbuds with Active Noise Cancellation',
    image: '/images/harmonypods.jpg',
    description:
      'Immerse yourself in your favorite music without distractions with these true wireless earbuds featuring active noise cancellation. The sleek design, long battery life, and exceptional sound quality make them perfect for daily use.',
    brand: 'HarmonyAudio',
    category: 'Electronics',
    price: 129.99,
    countInStock: 6,
    rating: 4.7,
    numReviews: 19,
  },

  {
    id: uuidv4(),
    name: 'RhythmBeats Wireless On-Ear Headphones',
    image: '/images/rhythmbeats.jpg',
    description:
      'Enjoy the perfect balance of style and sound with these wireless on-ear headphones. The adjustable headband and soft ear cushions provide a comfortable fit, while the powerful drivers deliver dynamic audio.',
    brand: 'AudioZone',
    category: 'Electronics',
    price: 99.99,
    countInStock: 9,
    rating: 4.4,
    numReviews: 15,
  },

  {
    id: uuidv4(),
    name: 'PlaySync Portable Bluetooth Speaker',
    image: '/images/playsync.jpg',
    description:
      'Take your music wherever you go with this portable Bluetooth speaker. With a compact design and impressive sound quality.',
    brand: 'PlayTune',
    category: 'Electronics',
    price: 39.99,
    countInStock: 15,
    rating: 4.2,
    numReviews: 11,
  },

  {
    id: uuidv4(),
    name: 'SoundGuard Wireless Gaming Headset',
    image: '/images/soundguard.jpg',
    description:
      'Step into the world of immersive gaming with this wireless gaming headset. Featuring 7.1 surround sound, a noise-canceling microphone, and customizable RGB lighting, it offers a competitive edge for gamers.',
    brand: 'GamerTech',
    category: 'Electronics',
    price: 119.99,
    countInStock: 4,
    rating: 4.6,
    numReviews: 20,
  },

  {
    id: uuidv4(),
    name: 'PodBeats Wireless Earbuds with Charging Case',
    image: '/images/podbeats.jpg',
    description:
      'Experience true wireless freedom with these sleek and compact earbuds. The included charging case ensures extended battery life, while the intuitive touch controls make it easy to manage your music and calls.',
    brand: 'TechBeats',
    category: 'Electronics',
    price: 79.99,
    countInStock: 10,
    rating: 4.3,
    numReviews: 14,
  },
];

module.exports = products;
