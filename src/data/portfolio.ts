import { 
  Smartphone, 
  Globe, 
  Server, 
  Layout, 
  MessageSquare, 
  Zap, 
  Activity, 
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
    image: "/projects/restaurant-hero.jpg",
    tags: ["Flutter", "Firebase", "Node.js", "SaaS"],
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
    image: "/projects/chat-app.jpg",
    tags: ["Flutter", "Firebase", "ZegoCloud"],
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
    image: "/projects/ai-drowsiness.jpg",
    tags: ["Python", "OpenCV", "TensorFlow"],
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
    image: "/projects/cargo.jpg",
    tags: ["React", "Go", "PostgreSQL"],
    stats: {
      problem: "Opaque shipping processes and manual paperwork.",
      solution: "Automated booking flow with digital waybills and live tracking.",
      results: "Reduced booking time by 70%."
    }
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
