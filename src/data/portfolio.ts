import {
  Smartphone,
  Globe,
  Server,
  Layout,
  MessageSquare,
  Layers
} from "lucide-react";

export const services = [
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "High-performance cross-platform apps built with Flutter for iOS and Android.",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "saas",
    title: "SaaS Product Development",
    description: "End-to-end multi-tenant architectures designed for scalability and business growth.",
    icon: Layers,
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: "web",
    title: "Web Development",
    description: "Modern, responsive web applications using Next.js, React, and cutting-edge tech.",
    icon: Globe,
    color: "from-pink-500 to-rose-500"
  },
  {
    id: "ux",
    title: "UI/UX Design",
    description: "User-centric designs that prioritize usability and brand identity.",
    icon: Layout,
    color: "from-amber-500 to-orange-500"
  },
  {
    id: "backend",
    title: "Backend & API",
    description: "Secure, scalable backend systems and RESTful/GraphQL API development.",
    icon: Server,
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "realtime",
    title: "Real-Time Systems",
    description: "Implementation of chat, audio/video calling, and live data synchronization.",
    icon: MessageSquare,
    color: "from-indigo-500 to-blue-500"
  }
];

export const projects = [
  {
    id: "restaurant-saas",
    title: "Restaurant Management SaaS",
    category: "Featured SaaS Ecosystem",
    description: "A complete 3-app ecosystem for administrators, restaurant owners, and customers.",
    overview: "We built a scalable restaurant management platform designed to streamline operations from kitchen to customer. This ecosystem consists of three interconnected applications, handling real-time order processing, secure payments, and comprehensive admin analytics.",
    image: "/projects/restaurant-hero.jpg",
    images: ["/projects/restaurant-1.jpg", "/projects/restaurant-2.jpg", "/projects/restaurant-3.jpg"],
    videos: ["https://www.w3schools.com/html/mov_bbb.mp4"], // Example video
    githubUrl: "https://github.com/zeeshanakhtar012/restaurant-saas-demo",
    tags: ["Flutter", "Firebase", "Node.js", "SaaS"],
    keyFeatures: [
      "Real-time order synchronization across all apps.",
      "Multi-tenant SaaS architecture for different restaurant branches.",
      "Integrated secure payment gateways.",
      "Comprehensive admin dashboard for analytics and subscription management."
    ],
    stats: {
      problem: "Fragmented restaurant operations and poor customer ordering experience.",
      solution: "A unified cloud platform connecting admin control, kitchen management, and customer ordering.",
      results: "50% increase in operational efficiency for pilot restaurants."
    },
    apps: [
      { name: "Admin Panel", features: ["Subscription Management", "Analytics", "Multi-tenant Control"] },
      { name: "Owner App", features: ["Order Tracking", "Menu Management", "Sales Reports"] },
      { name: "Customer App", features: ["Real-time Tracking", "Easy Payments", "Digital Menu"] }
    ]
  },
  {
    id: "chat-video",
    title: "ConnectLive Chat",
    category: "Communication",
    description: "Real-time messaging with high-quality audio and video calling integration.",
    overview: "A seamless communication app built to provide low-latency voice and video calls globally. We utilized WebRTC and ZegoCloud for robust real-time communication, wrapped in a beautiful Flutter UI.",
    image: "/projects/chat-app.jpg",
    images: ["/projects/chat-1.jpg", "/projects/chat-2.jpg"],
    videos: [],
    githubUrl: "https://github.com/zeeshanakhtar012/connect-live",
    tags: ["Flutter", "Firebase", "ZegoCloud"],
    keyFeatures: [
      "End-to-end encrypted messaging.",
      "High-definition video and audio calls.",
      "Online presence and read receipts.",
      "Push notifications integration."
    ],
    stats: {
      problem: "High latency in existing communication tools.",
      solution: "Low-latency WebRTC implementation with real-time state management.",
      results: "Sub-200ms latency for global calls."
    }
  },
  {
    id: "driver-ai",
    title: "AI Drowsiness Detection",
    category: "Artificial Intelligence",
    description: "Computer vision system for monitoring driver alertness and safety.",
    overview: "An AI-powered computer vision project that monitors a driver's face in real-time to detect signs of drowsiness and distraction, triggering immediate alerts to prevent accidents.",
    image: "/projects/ai-drowsiness.jpg",
    images: ["/projects/ai-1.jpg", "/projects/ai-2.jpg"],
    videos: [],
    githubUrl: "https://github.com/zeeshanakhtar012/driver-drowsiness-ai",
    tags: ["Python", "OpenCV", "TensorFlow"],
    keyFeatures: [
      "Real-time Eye Aspect Ratio (EAR) calculation.",
      "Head pose estimation for distraction detection.",
      "High-performance inference on edge devices.",
      "Customizable alert thresholds."
    ],
    stats: {
      problem: "Rising road accidents due to driver fatigue.",
      solution: "Real-time eye-tracking and facial landmark detection with instant alerts.",
      results: "98% accuracy in detection across varied lighting."
    }
  },
  {
    id: "cargo-booking",
    title: "LogiShip Cargo",
    category: "Logistics",
    description: "End-to-end cargo booking and tracking system for international shipping.",
    overview: "A comprehensive logistics platform that digitizes the entire cargo shipping workflow, from booking to final delivery, complete with live tracking and automated waybill generation.",
    image: "/projects/cargo.jpg",
    images: ["/projects/cargo-1.jpg", "/projects/cargo-2.jpg"],
    videos: [],
    githubUrl: "https://github.com/zeeshanakhtar012/logiship",
    tags: ["React", "Go", "PostgreSQL"],
    keyFeatures: [
      "Automated dynamic pricing engine.",
      "Live GPS tracking integration.",
      "Digital document management and waybills.",
      "Role-based access control for staff and customers."
    ],
    stats: {
      problem: "Opaque shipping processes and manual paperwork.",
      solution: "Automated booking flow with digital waybills and live tracking.",
      results: "Reduced booking time by 70%."
    }
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO, FoodTech Solutions",
    feedback: "SoftMat Dev transformed our vision into reality. The restaurant SaaS platform they built for us is incredibly robust, fast, and user-friendly. Their attention to detail and scalability is unmatched.",
    avatar: "/avatars/avatar-1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, ConnectGlobal",
    feedback: "Working with this team was a game-changer. They delivered our real-time video calling app ahead of schedule, and the latency optimizations they implemented were exactly what we needed to secure our next funding round.",
    avatar: "/avatars/avatar-2.jpg"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Head of Product, AutoSafe",
    feedback: "The AI drowsiness detection system they developed was highly accurate and seamlessly integrated into our hardware. True professionals who understand both software engineering and complex AI systems.",
    avatar: "/avatars/avatar-3.jpg"
  }
];

export const stats = [
  { label: "Years of Experience", value: "5+" },
  { label: "Users Reached", value: "100k+" },
  { label: "Countries Served", value: "12+" },
  { label: "Projects Completed", value: "50+" }
];

export const technologies = [
  "Flutter", "Dart", "Next.js", "React", "Node.js", "Python", "Firebase", "PostgreSQL", "OpenCV", "AWS", "Google Cloud"
];

export const contactInfo = {
  email: "asad@nerixglobal.com",
  phone: "+923074839575",
  whatsapp: "https://www.facebook.com/nerixglobal",
  address: "123 Innovation Drive, Tech City, TC 90210",
  socials: {
    github: "https://github.com/zeeshanakhtar012",
    linkedin: "https://linkedin.com/company/softmatdev",
    twitter: "https://twitter.com/softmatdev"
  }
};
