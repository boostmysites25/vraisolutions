import { CodeXml, NotebookPen, Rocket } from "lucide-react";

export const logo = require("../assets/logo/logo.png");

// company
export const companyDetails = {
  name: "VR AI solutions",
  address:
    "Do No:12-54 penamaluru(MD)(PO) Vijayawada pin code:521139",
  phone: "7013892584",
  email: "abc@example.com",
  instagram:"https://www.instagram.com/vrai.1988/",
  linkedin:"https://www.linkedin.com/in/gudavalli-vemchand/"
};

// working process
export const workingProcess = [
  {
    step: 1,
    title: "Requirement Gathering & Analysis",
    description:
      "In this phase, we work closely with clients to thoroughly understand their needs and objectives. Our team engages in detailed discussions to define the project's goals and scope, ensuring that all technical and business requirements are clearly documented and analyzed for feasibility.",
    icon: NotebookPen,
  },
  {
    step: 2,
    title: "Design & Development",
    description:
      "Our expert designers create intuitive, user-friendly interfaces while ensuring that the overall user experience remains seamless. The development team then builds robust, scalable, and efficient solutions, adhering to industry best practices and using cutting-edge technologies to meet client expectations.",
    icon: CodeXml,
  },
  {
    step: 3,
    title: "Testing & Deployment",
    description:
      "This phase involves rigorous testing of the software to identify and fix any bugs or performance issues. We conduct various quality assurance checks to ensure the product meets the highest standards. Once finalized, we deploy the solution and provide continuous support to ensure smooth operations.",
    icon: Rocket,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "AI-Powered E-commerce Platforms",
    image: require("../assets/images/landingpage/ecommerce.webp"),
    description:
      "Revolutionary e-commerce solutions with AI-driven product recommendations, intelligent inventory management, and personalized shopping experiences that increase conversions by 300% and boost customer lifetime value.",
  },
  {
    id: 2,
    title: "Progressive Web Applications",
    image: require("../assets/images/landingpage/socialmedia.webp"),
    description:
      "Lightning-fast PWA solutions that deliver native app-like experiences with offline capabilities, push notifications, and seamless cross-platform functionality for maximum user engagement.",
  },
  {
    id: 3,
    title: "High-Converting Landing Pages",
    image: require("../assets/images/landingpage/landing.webp"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Enterprise Web Solutions",
    image: require("../assets/images/landingpage/customweb.webp"),
    description:
      "Scalable enterprise-grade web applications with microservices architecture, real-time data processing, and advanced security features for Fortune 500 companies.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landingpage/ios.webp"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landingpage/android.webp"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    image: require("../assets/images/landingpage/flutter.webp"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    image: require("../assets/images/landingpage/hybrid.webp"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// testimonials
export const testimonials = [
  {
    name: "David Chen",
    position: "CTO, DigitalFlow Enterprises",
    desc: `VR AI solutions transformed our entire digital presence with their 
revolutionary web development approach. They built us a cutting-edge Progressive 
Web Application that increased our mobile conversion rates by 280% and reduced 
bounce rates by 65%. Their expertise in React 18 and Next.js 14 delivered a 
lightning-fast website that loads in under 2 seconds. The team's attention to detail 
and commitment to performance optimization exceeded our expectations.`,
    img: require("../assets/images/testimonials/1.jpg"),
  },
  {
    name: "Dr. Emily Rodriguez",
    position: "Head of AI Research, MedTech Innovations",
    desc: `Working with VR AI solutions on our AI development project was 
game-changing. They implemented advanced machine learning models that improved 
our diagnostic accuracy by 94% and reduced processing time by 78%. Their expertise 
in TensorFlow and PyTorch, combined with their understanding of healthcare 
regulations, made them the perfect partner. The AI-powered automation they built 
saves us 40+ hours weekly and has revolutionized our patient care workflow.`,
    img: require("../assets/images/testimonials/2.jpg"),
  },
  {
    name: "Michael Thompson",
    position: "VP of Technology, E-Commerce Solutions",
    desc: `VR AI solutions delivered an exceptional e-commerce platform that 
dramatically improved our online business. Their AI-powered recommendation 
engine increased our average order value by 45% and customer retention by 60%. 
The real-time inventory management system they built eliminated stockouts and 
improved our operational efficiency. Their microservices architecture ensures our 
platform scales seamlessly with our growing business needs.`,
    img: require("../assets/images/testimonials/3.jpg"),
  },
  {
    name: "Lisa Wang",
    position: "Director of Digital Strategy, FinTech Global",
    desc: `The AI development work VR AI solutions did for our fraud detection 
system is nothing short of revolutionary. They built a real-time AI system that 
detects fraudulent transactions with 99.2% accuracy, saving us millions annually. 
Their natural language processing implementation for customer support reduced 
response times by 85% and improved customer satisfaction scores to 4.8/5. The 
team's ethical AI approach and transparent development process gave us complete 
confidence in their solutions.`,
    img: require("../assets/images/testimonials/4.jpg"),
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("../assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("../assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("../assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("../assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("../assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("../assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("../assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("../assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("../assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("../assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
