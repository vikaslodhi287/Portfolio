import { useEffect, useState } from 'react';
import { getPublicProfile } from '/src/services/api/profile.api.js';
import { getAllProjects } from '/src/services/api/project.api.js';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';

// Premium real data to show if the backend collections are currently empty
const fallbackPremiumProfile = {
  fullName: "Vikas Lodhi",
  title: "Full Stack Engineer & Systems Architect",
  bio: "Specializing in building high-performance web architectures, interactive user interfaces, and scalable enterprise server environments using Node.js, React, and cloud systems."
};

const fallbackPremiumProjects = [
  {
    _id: "demo-1",
    title: "Enterprise Cloud ERP Platform",
    description: "A secure, distributed dashboard infrastructure designed to manage global corporate transactions, asset pipelines, and telemetry logging models in real-time.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    _id: "demo-2",
    title: "AI-Powered Predictive Engine",
    description: "Built microservices that analyze real-time database transactions to forecast system loads, automate infrastructure provisioning, and optimize memory allocations.",
    technologies: ["Python", "Express.js", "Docker", "Redis", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

const Home = () => {
  const [payloads, setPayloads] = useState({ profile: null, projects: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const streamApplicationData = async () => {
      try {
        const [profileRes, projectsRes] = await Promise.all([
          getPublicProfile().catch(() => null), // Graceful fallback if backend server is offline
          getAllProjects().catch(() => null)
        ]);
        
        // Connect to live data if it exists, otherwise hydre with premium fallback data
        setPayloads({
          profile: profileRes?.data || fallbackPremiumProfile,
          projects: (projectsRes?.data && projectsRes.data.length > 0) ? projectsRes.data : fallbackPremiumProjects
        });
      } catch (err) {
        console.error('REST API connection error:', err);
        setPayloads({ profile: fallbackPremiumProfile, projects: fallbackPremiumProjects });
      } finally {
        setLoading(false);
      }
    };

    streamApplicationData();
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--bg-app)' }}>
      <Hero data={payloads.profile} loading={loading} />
      <Projects data={payloads.projects} loading={loading} />
      <Contact />
    </div>
  );
};

export default Home;