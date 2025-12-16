// utils/projectData.js

export const projectsData = [
  {
    id: 1,
    title: 'Anghami Clone – Music Streaming Backend (NestJS)',
    description: `Designed scalable back-end that handles user authentication, playlists, search, and streaming.
Integrated Google OAuth login, Redis caching, and media storage with Cloudinary.
Tech Stack: NestJS, TypeORM, PostgreSQL, Redis, Cloudinary, JWT, OAuth2.`,
    imageUrl: '/projects/image.png',
    liveUrl: 'https://github.com/alin00r/Anghami-Clone-API',
    repoUrl: 'https://github.com/alin00r/Anghami-Clone-API',
    tech: ['NodeJs', 'NestJS', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'E-commerce API',
    description: `Created a secure backend for an e-commerce app with role-based authentication using JWT andbcrypt.
Implemented full CRUD operations for users, products, carts, and orders.
Used Postman to test and document APIs; followed MVC architecture and security best practices`,
    imageUrl: '/projects/ecommerce.png',
    liveUrl:
      'https://github.com/alin00r/Node.js-Full-E-Commerce-RESTFul-Api-with-Payment',
    repoUrl:
      'https://github.com/alin00r/Node.js-Full-E-Commerce-RESTFul-Api-with-Payment',
    tech: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'bcrypt',
      'dotenv',
      'Postman',
    ],
  },

  {
    id: 3,
    title: 'Threads Clone – Social Media Backend',
    description: `Built a Threads-style social backend supporting real-time messaging, threaded posts, and user
follow systems.
Implemented token-based authentication with JWT and media uploads with Cloudinary.
Designed scalable models with Mongoose and integrated Socket.IO for real-time notifications.`,
    imageUrl: '/projects/threads.jpg',
    liveUrl: 'https://github.com/alin00r/Threads-Clone-Backend-NodeJs',
    repoUrl: 'https://github.com/alin00r/Threads-Clone-Backend-NodeJs',
    tech: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Cloudinary',
      'Mongoose',
      'Socket.IO',
    ],
  },
  {
    id: 4,
    title: 'Roomify Chat Application',
    description: `Supported 100+ concurrent users with instant messaging, media sharing, and location features.
Implemented profanity filter and optimized socket events for low-latency communication.
Implemented instant messaging, photo sharing, and real-time location sharing to enhance user
interaction.
Designed an intuitive interface with a built-in profanity filter to ensure a positive and respectful
user experience.`,
    imageUrl: '/projects/chat.png',
    liveUrl: 'https://roomify-chat.onrender.com/',
    repoUrl: 'https://github.com/alin00r/Roomify',
    tech: [
      'Node.js',
      'Express.js',
      'Socket.IO',
      'HTML',
      'CSS',
      'hbs',
      'Bad-words',
    ],
    isComingSoon: false,
  },
  {
    id: 5,
    title: 'Distributed Microservices NestJS Job Engine 2025',
    description:
      'production-ready distributed job engine on NestJS microservices (Nx monorepo) using gRPC, Apache Pulsar, GraphQL, JWT-secured services, and PostgreSQL (Prisma + Drizzle), fully containerized with Docker and Kubernetes',
    imageUrl: '/projects/job.jpeg',
    liveUrl: '#',
    repoUrl: '',
    tech: ['React', 'Vite'],
    isComingSoon: true,
  },
  {
    id: 5,
    title: 'E-shop Website',
    description:
      'Beautiful responsive ecommerce (fornt-end-master) website built with (html & css & js), it has multiple sections such as a home, featured products, new arrivals, and much more. Fully responsive and mobile first.',
    imageUrl: '/projects/e-shop.png',
    liveUrl: 'https://alinour.me/',
    repoUrl: 'https://github.com/alin00r/E-Shop-Website',
    tech: ['HTML', 'CSS', 'JavaScript'],
    isComingSoon: false,
  },
];
