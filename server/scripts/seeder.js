import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

// Load Mongoose Document Schemas
import Admin from '../models/Admin.js';
import Profile from '../models/Profile.js';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Experience from '../models/Experience.js';
import Education from '../models/Education.js';
import Certificate from '../models/Certificate.js';
import Blog from '../models/Blog.js';
import Contact from '../models/Contact.js';
import Setting from '../models/Setting.js';

// Load Global Configuration Parameters
dotenv.config();

/**
 * High-Entropy Mock Production Seeds Dataset Definitions
 */
const seedAdmin = async () => {
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash('adminSecurePass2026!', salt);

  return [
    {
      username: 'portfolio_admin_2026',
      email: process.env.ADMIN_EMAIL || 'admin@portfolio.dev',
      password: hashedPassword,
      role: 'admin',
      lastLogin: new Date()
    }
  ];
};

const seedProfile = [
  {
    fullName: 'Alex Mercer',
    title: 'Senior Full-Stack Systems Engineer & Cloud Architect',
    bio: 'Specializing in building resilient, high-throughput cloud architectures and type-safe modular backend framework ecosystems. 8+ years of production experience leading software lifecycle systems.',
    avatar: 'https://res.cloudinary.com/demo/image/upload/v1720216400/portfolio/profile/avatar-default.png',
    avatarPublicId: 'portfolio/profile/avatar-default',
    resumeUrl: 'https://res.cloudinary.com/demo/raw/upload/v1720216410/portfolio/resume/resume-sample.pdf',
    resumePublicId: 'portfolio/resume/resume-sample',
    socialLinks: {
      github: 'https://github.com/alexmercer',
      linkedin: 'https://linkedin.com/in/alexmercer',
      twitter: 'https://x.com/alexmercer'
    }
  }
];

const seedProjects = [
  {
    title: 'E-Commerce Microservices Orchestration Engine',
    description: 'High-throughput transactional distribution engine managing real-time ledger records across distributed brokers.',
    technologies: ['Node.js', 'TypeScript', 'Docker', 'RabbitMQ', 'MongoDB', 'Redis'],
    thumbnail: 'https://res.cloudinary.com/demo/image/upload/v1720216400/portfolio/projects/thumb-1.png',
    thumbnailPublicId: 'portfolio/projects/thumb-1',
    images: [],
    githubUrl: 'https://github.com/alexmercer/microservices-engine',
    liveUrl: 'https://demo.portfolio.dev/microservices',
    featured: true,
    sortOrder: 0
  },
  {
    title: 'Real-Time Telemetry Performance Analytics Dashboard',
    description: 'Analytical stream monitoring interface tracking resource load metrics with D3 visualization matrices.',
    technologies: ['React', 'Next.js', 'D3.js', 'TailwindCSS', 'Go', 'InfluxDB'],
    thumbnail: 'https://res.cloudinary.com/demo/image/upload/v1720216400/portfolio/projects/thumb-2.png',
    thumbnailPublicId: 'portfolio/projects/thumb-2',
    images: [],
    githubUrl: 'https://github.com/alexmercer/telemetry-dashboard',
    liveUrl: 'https://demo.portfolio.dev/telemetry',
    featured: false,
    sortOrder: 1
  }
];

const seedSkills = [
  { name: 'Node.js', category: 'backend', proficiency: 96, icon: 'fa-node-js' },
  { name: 'TypeScript', category: 'backend', proficiency: 94, icon: 'fa-code' },
  { name: 'React / Next.js', category: 'frontend', proficiency: 90, icon: 'fa-react' },
  { name: 'Docker / Containers', category: 'devops', proficiency: 88, icon: 'fa-docker' },
  { name: 'MongoDB Atlas', category: 'database', proficiency: 92, icon: 'fa-database' }
];

const seedExperiences = [
  {
    company: 'Stark Infrastructure Networks',
    position: 'Principal Software Systems Architect',
    location: 'Los Angeles, CA',
    startDate: new Date('2024-01-15'),
    isCurrent: true,
    description: [
      'Architected transactional message data stream pipelines processing over 50M records daily.',
      'Led an engineering cell migrating structural legacy platform monolith frameworks into clean, containerized microservices.'
    ],
    skillsUsed: ['Node.js', 'TypeScript', 'Docker', 'AWS', 'Kubernetes']
  },
  {
    company: 'Wayne Cyber Security Solutions',
    position: 'Senior Backend Engineer',
    location: 'Gotham City, NJ',
    startDate: new Date('2021-06-01'),
    endDate: new Date('2023-12-31'),
    isCurrent: false,
    description: [
      'Engineered multi-layered identity access authorization profiles restricting cross-origin routing vectors.',
      'Optimized query indexing structures scaling platform load metrics efficiency by 40%.'
    ],
    skillsUsed: ['Express', 'JavaScript', 'PostgreSQL', 'Redis', 'Linux']
  }
];

const seedEducations = [
  {
    institution: 'Stanford University',
    degree: 'Master of Science',
    fieldOfStudy: 'Computer Science & Software Engineering',
    startDate: new Date('2019-09-01'),
    endDate: new Date('2021-05-22'),
    isCurrent: false,
    grade: '3.94 GPA',
    description: 'Deep analytical focus matching distributed network load topologies, concurrent computational scheduling, and cryptography layers.'
  }];

const seedCertificates = [
  {
    name: 'AWS Certified Solutions Architect – Professional',
    issuingOrganization: 'Amazon Web Services (AWS)',
    issueDate: new Date('2025-04-12'),
    expirationDate: new Date('2028-04-12'),
    credentialId: 'AWS-SAP-8942',
    credentialUrl: 'https://aws.amazon.com/verification',
    image: 'https://res.cloudinary.com/demo/image/upload/v1720216400/portfolio/certificates/aws-sap.png',
    imagePublicId: 'portfolio/certificates/aws-sap'
  }
];

const seedBlogs = [
  {
    title: 'Mastering Microservices: Decoupling Transactional Storage Pipelines',
    slug: 'mastering-microservices-decoupling-transactional-storage-pipelines',
    content: 'Building production-grade microservices networks implies breaking apart shared database dependencies. In this engineering blueprint analysis, we dive deep into Event Sourcing, Saga Choreography Orchestration, and tracking state mutations using high-velocity message queuing channels safely without losing atomicity across records...',
    excerpt: 'An explicit architectural deep dive detailing distributed transactions, saga designs, and structural stream processing engines.',
    tags: ['System Design', 'Microservices', 'Node.js'],
    status: 'published',
    coverImage: 'https://res.cloudinary.com/demo/image/upload/v1720216400/portfolio/blogs/microservices.png',
    coverImagePublicId: 'portfolio/blogs/microservices'
  }
];

const seedContacts = [
  {
    name: 'Bruce Wayne',
    email: 'bruce@wayneenterprise.com',
    subject: 'Enterprise Cloud System Modernization',
    message: 'Looking to re-architect our automated analytical tracking systems using type-safe distributed stream models. Let us coordinate a technical briefing call.',
    isRead: false
  }
];

const seedSettings = [
  {
    siteName: 'Alex Mercer | Enterprise Portfolio Engineering Framework',
    seo: {
      metaTitle: 'Alex Mercer - Principal Software Engineer & Architecture Showcase',
      metaDescription: 'Production computing catalog presenting specialized cloud framework development files, robust system performance matrices, and clean architectural designs.',
      keywords: ['Full-Stack Developer', 'Cloud Architect', 'Software Engineer', 'Systems Expert', 'Node.js Developer']
    },
    maintenanceMode: false,
    enableBlog: true,
    enableContactForm: true
  }
];

/**
 * Central Transaction Handling Hydration Pipeline Execution Routine
 */
const runHydrationPipeline = async () => {
  try {
    console.log('\x1b[33m%s\x1b[0m', 'Initializing secure Mongoose system context pipeline...');
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URI);
    console.log('\x1b[32m%s\x1b[0m', 'Database socket linked successfully. Dropping legacy operational collections...');

    // Drop tracking parameters to clear any overlapping document states safely
    await Admin.deleteMany({});
    await Profile.deleteMany({});
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Experience.deleteMany({});
    await Education.deleteMany({});
    await Certificate.deleteMany({});
    await Blog.deleteMany({});
    await Contact.deleteMany({});
    await Setting.deleteMany({});
    console.log('\x1b[31m%s\x1b[0m', 'Legacy collection data dropped. Starting data injection streams...');

    // Resolve structural administrative hashes
    const calculatedAdminData = await seedAdmin();

    // Batch execute insertion blocks asynchronously
    await Admin.insertMany(calculatedAdminData);
    await Profile.insertMany(seedProfile);
    await Project.insertMany(seedProjects);
    await Skill.insertMany(seedSkills);
    await Experience.insertMany(seedExperiences);
    await Education.insertMany(seedEducations);
    await Certificate.insertMany(seedCertificates);
    await Blog.insertMany(seedBlogs);
    await Contact.insertMany(seedContacts);
    await Setting.insertMany(seedSettings);

    console.log('\x1b[32m%s\x1b[0m', '====================================================');
    console.log('\x1b[32m%s\x1b[0m', ' DATABASE HYDRATION PIPELINE COMPLETED SUCCESSFULLY ');
    console.log('\x1b[32m%s\x1b[0m', ' All 10 application schema collections seeded clean ');
    console.log('\x1b[32m%s\x1b[0m', '====================================================');

    process.exit(0);
  } catch (pipelineError) {
    console.error('\x1b[41m%s\x1b[0m', 'FATAL CRITICAL ERROR INTERRUPTING DATA INJECTION ENGINE:', pipelineError);
    process.exit(1);
  }
};

// Fire Data Injections Execution Thread
runHydrationPipeline();