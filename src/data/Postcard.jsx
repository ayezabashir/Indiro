
import blogImg1 from '../../public/images/WordPress-Picture.jpg';
import blogImg2 from '../../public/images/yoga-practice.jpg';
import blogImg3 from '../../public/images/macos.jpg';
import blogImg4 from '../../public/images/react-js.jpeg';
const posts = [
  {
    id: 1,
    image: blogImg1,
    date: "Dec. 5, 2022",
    author: "W3@MANAGER",
    authorImage: "https://secure.gravatar.com/avatar/64d1421034c44140a320571286c757c9?s=150&d=mm&r=g",
    category: "BACKEND",
    views: "2,540",
    title: "React.js Lifecycle — Initialization, Mounting, Updating",
    description: "Ideally, the lifecycle of React.js is split into four core stages: Initialization, Mounting, Updating, and Unmounting.",
    content: "<p>React components have a lifecycle which you can monitor and manipulate during its three main phases. <strong>Mounting</strong>, <strong>Updating</strong>, and <strong>Unmounting</strong> are the pillars of how data flows in a modern UI.</p> </br> <p>React components have a lifecycle which you can monitor and manipulate during its three main phases. <strong>Mounting</strong>, <strong>Updating</strong>, and <strong>Unmounting</strong> are the pillars.</p> <br /> <p>React components have a lifecycle which you can monitor and manipulate during its three main phases. <strong>Mounting</strong>,  a modern UI.</p>",
    tags: ["#react", "#js", "#frontend"],
    commentCount: 12
  },
  {
    id: 2,
    image: blogImg2,
    date: "Nov. 20, 2022",
    author: "JOHN DOE",
    authorImage: "https://secure.gravatar.com/avatar/fb4e1421034c44140a320571286c757c9?s=150&d=mm&r=g",
    category: "DEVELOPMENT",
    views: "1,820",
    title: "Understanding Tailwind CSS v4 New Features",
    description: "Explore the latest updates in Tailwind CSS v4, including the new CSS-first configuration and improved performance.",
    content: "<p>Tailwind CSS v4 is a multi-engine monster. It introduces a new high-performance engine that is up to 10x faster than the previous versions.</p>",
    tags: ["#tailwind", "#css", "#v4"],
    commentCount: 5
  },
  {
    id: 3,
    image: blogImg3,
    date: "Oct. 15, 2022",
    author: "ADMIN",
    authorImage: "https://secure.gravatar.com/avatar/ad12421034c44140a320571286c757c9?s=150&d=mm&r=g",
    category: "ANIMATION",
    views: "950",
    title: "Mastering Framer Motion for React Animations",
    description: "Learn how to create fluid, production-ready animations in React using the Framer Motion library.",
    content: "<p>Framer Motion makes complex animations simple. Using the <code>layout</code> prop, you can animate changes in your layout automatically.</p>",
    tags: ["#framer", "#motion", "#animations"],
    commentCount: 0
  },
  {
    id: 4,
    image: blogImg4,
    date: "Sept. 10, 2022",
    author: "SARA KHAN",
    authorImage: "https://secure.gravatar.com/avatar/sa89421034c44140a320571286c757c9?s=150&d=mm&r=g",
    category: "DESIGN",
    views: "3,110",
    title: "Responsive Web Design in 2026: Best Practices",
    description: "Keep your websites looking great on all devices with these modern responsive design techniques and tools.",
    content: "<p>The future of responsive design lies in container queries. Stop focusing only on the viewport and start focusing on the component's space.</p>",
    tags: ["#responsive", "#ux", "#2026"],
    commentCount: 24
  },
  {
    id: 5,
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/blog/blog-grid/pic5.jpg",
    date: "Aug. 05, 2022",
    author: "W3@MANAGER",
    authorImage: "https://secure.gravatar.com/avatar/64d1421034c44140a320571286c757c9?s=150&d=mm&r=g",
    category: "ENTERPRISE",
    views: "4,200",
    title: "Building Scalable Industrial Web Applications",
    description: "A deep dive into the architecture required for high-performance industrial and agency-level websites.",
    content: "<p>Scalability is not just about code; it's about infrastructure. Learn how to leverage Edge Functions for global performance.</p>",
    tags: ["#mern", "#scalable", "#industrial"],
    commentCount: 8
  },
  {
    id: 6,
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/blog/blog-grid/pic6.jpg",
    date: "July 12, 2022",
    author: "DEVS",
    authorImage: "https://secure.gravatar.com/avatar/de77421034c44140a320571286c757c9?s=150&d=mm&r=g",
    category: "TYPOGRAPHY",
    views: "1,150",
    title: "Why Oswald is the King of Industrial Fonts",
    description: "Typography plays a huge role in branding. Discover why Oswald is the go-to choice for bold, industrial themes.",
    content: "<p>Oswald is a reworking of the classic style historically represented by the 'Alternate Gothic' sans serif typefaces.</p>",
    tags: ["#fonts", "#oswald", "#branding"],
    commentCount: 2
  },
  {
    id: 7,
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/blog/blog-grid/pic1.jpg",
    date: "June 30, 2022",
    author: "ADMIN",
    authorImage: "https://secure.gravatar.com/avatar/ad12421034c44140a320571286c757c9?s=150&d=mm&r=g",
    category: "NODEJS",
    views: "5,600",
    title: "Node.js Performance Optimization Tips",
    description: "Make your backend lightning fast by implementing these industry-standard caching and clustering techniques.",
    content: "<p>Avoid blocking the event loop. Use worker threads for CPU-intensive tasks to keep your Node server responsive.</p>",
    tags: ["#nodejs", "#backend", "#optimization"],
    commentCount: 15
  },
  {
    id: 8,
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/blog/blog-grid/pic2.jpg",
    date: "May 15, 2022",
    author: "JOHN DOE",
    authorImage: "https://secure.gravatar.com/avatar/fb4e1421034c44140a320571286c757c9?s=150&d=mm&r=g",
    category: "GIT",
    views: "2,300",
    title: "Advanced Git Workflows for Large Teams",
    description: "Learn how to manage complex merge conflicts and keep your main branch clean using rebasing strategies.",
    content: "<p>Rebasing is the process of moving or combining a sequence of commits to a new base commit. It makes history cleaner.</p>",
    tags: ["#git", "#devops", "#workflow"],
    commentCount: 4
  },
  {
    id: 9,
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/blog/blog-grid/pic3.jpg",
    date: "April 10, 2022",
    author: "W3@MANAGER",
    authorImage: "https://secure.gravatar.com/avatar/64d1421034c44140a320571286c757c9?s=150&d=mm&r=g",
    category: "AI",
    views: "8,900",
    title: "The Future of AI in Web Development",
    description: "How generative AI is changing the way developers write code and design user interfaces in 2026.",
    content: "<p>AI is not replacing developers; it's giving them superpowers. From Copilot to automated UI generation, the landscape is shifting.</p>",
    tags: ["#ai", "#future", "#webdev"],
    commentCount: 45
  },
  {
    id: 10,
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/blog/blog-grid/pic4.jpg",
    date: "March 22, 2022",
    author: "SARA KHAN",
    authorImage: "https://secure.gravatar.com/avatar/sa89421034c44140a320571286c757c9?s=150&d=mm&r=g",
    category: "API",
    views: "3,450",
    title: "GraphQL vs REST: Which one to choose?",
    description: "A detailed comparison of query languages to help you decide the best API architecture for your next project.",
    content: "<p>While REST is simple, GraphQL offers precision. Stop over-fetching data and get exactly what your UI needs.</p>",
    tags: ["#graphql", "#rest", "#api"],
    commentCount: 11
  },
  {
    id: 11,
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/blog/blog-grid/pic5.jpg",
    date: "Feb. 05, 2022",
    author: "DEVS",
    authorImage: "https://secure.gravatar.com/avatar/de77421034c44140a320571286c757c9?s=150&d=mm&r=g",
    category: "SECURITY",
    views: "2,100",
    title: "Cybersecurity Essentials for Frontend Devs",
    description: "Protect your users from XSS and CSRF attacks by following these simple security headers and coding practices.",
    content: "<p>Always sanitize user input. Security starts at the form level before it even reaches your database.</p>",
    tags: ["#security", "#cyber", "#frontend"],
    commentCount: 6
  },
  {
    id: 12,
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/blog/blog-grid/pic6.jpg",
    date: "Jan. 18, 2022",
    author: "ADMIN",
    authorImage: "https://secure.gravatar.com/avatar/ad12421034c44140a320571286c757c9?s=150&d=mm&r=g",
    category: "TYPESCRIPT",
    views: "4,500",
    title: "Mastering TypeScript Generics",
    description: "Take your type-safety to the next level by learning how to write reusable and flexible generic components.",
    content: "<p>Generics allow you to create components that work over a variety of types rather than a single one.</p>",
    tags: ["#typescript", "#coding", "#clean-code"],
    commentCount: 19
  },
  {
    id: 13,
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/blog/blog-grid/pic1.jpg",
    date: "Jan. 02, 2022",
    author: "W3@MANAGER",
    authorImage: "https://secure.gravatar.com/avatar/64d1421034c44140a320571286c757c9?s=150&d=mm&r=g",
    category: "DEVOPS",
    views: "2,900",
    title: "Deployment Strategies with Docker",
    description: "Containerize your applications and deploy them seamlessly across any cloud provider with zero downtime.",
    content: "<p>Docker ensures that your app runs the same way in production as it does on your local machine.</p>",
    tags: ["#docker", "#devops", "#containers"],
    commentCount: 3
  },
  {
    id: 14,
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/blog/blog-grid/pic2.jpg",
    date: "Dec. 20, 2021",
    author: "JOHN DOE",
    authorImage: "https://secure.gravatar.com/avatar/fb4e1421034c44140a320571286c757c9?s=150&d=mm&r=g",
    category: "REALTIME",
    views: "3,700",
    title: "Building Real-time Apps with Socket.io",
    description: "Learn how to build a chat application or real-time dashboard using WebSockets and React.",
    content: "<p>WebSockets provide a persistent connection between a client and server that both parties can use to start sending data at any time.</p>",
    tags: ["#sockets", "#realtime", "#react"],
    commentCount: 14
  },
  {
    id: 15,
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/blog/blog-grid/pic3.jpg",
    date: "Nov. 12, 2021",
    author: "SARA KHAN",
    authorImage: "https://secure.gravatar.com/avatar/sa89421034c44140a320571286c757c9?s=150&d=mm&r=g",
    category: "SEO",
    views: "5,200",
    title: "SEO Strategies for Single Page Applications",
    description: "Ensure your React apps are discoverable by search engines using Server Side Rendering and Meta tags.",
    content: "<p>Using Next.js for SSR is the gold standard for React SEO. It allows crawlers to see your content immediately.</p>",
    tags: ["#seo", "#react", "#nextjs"],
    commentCount: 22
  }
];

export default posts;

  export const sidebarPosts = [
  {
    image: "", // Khali rakhne se "No preview available" dikhayega
    date: "Feb. 17, 2026",
    title: "test"
  },
  {
    image: "",
    date: "Oct. 23, 2025",
    title: "feqfefeff"
  },
  {
    image: "",
    date: "Oct. 16, 2025",
    title: "Title of the post"
  }
];