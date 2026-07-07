import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = ({ data, loading }) => {
  if (loading) {
    return (
      <div style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', padding: '0 10%' }}>
        <div style={{ width: '100%', maxWidth: '650px' }}>
          <div style={{ width: '140px', height: '20px', backgroundColor: 'var(--border-color)', borderRadius: '4px', animation: 'pulse-glow 1.5s infinite' }} />
          <div style={{ width: '90%', height: '60px', backgroundColor: 'var(--border-color)', borderRadius: '8px', margin: '1.5rem 0', animation: 'pulse-glow 1.5s infinite' }} />
          <div style={{ width: '70%', height: '35px', backgroundColor: 'var(--border-color)', borderRadius: '6px', marginBottom: '2rem', animation: 'pulse-glow 1.5s infinite' }} />
        </div>
      </div>
    );
  }

  return (
    <section id="hero" style={{ 
      minHeight: '92vh', 
      display: 'flex', 
      alignItems: 'center', 
      padding: '0 10%',
      position: 'relative'
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '800px' }}
      >
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          backgroundColor: 'rgba(59, 130, 246, 0.08)', 
          color: '#3b82f6', 
          padding: '0.5rem 1.2rem', 
          borderRadius: '50px',
          fontSize: '0.85rem', 
          fontWeight: 600, 
          letterSpacing: '0.5px', 
          textTransform: 'uppercase',
          marginBottom: '1.75rem',
          border: '1px solid rgba(59, 130, 246, 0.15)'
        }}>
          <span style={{ width: '6px', height: '6px', backgroundColor: '#3b82f6', borderRadius: '50%', display: 'inline-block' }}></span>
          {data?.statusLabel || 'Available For Architecture Threading'}
        </div>

        <h1 style={{ 
          fontSize: '4.5rem', 
          fontWeight: 800, 
          margin: '0 0 1rem 0', 
          color: 'var(--text-main)', 
          lineHeight: 1.05,
          letterSpacing: '-1.5px'
        }}>
          Hi, I am <span style={{ 
            background: 'linear-gradient(to right, #3b82f6, #60a5fa)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>{data?.fullName || 'Professional Engineer'}</span>
        </h1>

        <h2 style={{ 
          fontSize: '2.25rem', 
          fontWeight: 600, 
          color: 'var(--text-main)', 
          opacity: 0.85,
          marginBottom: '1.5rem',
          letterSpacing: '-0.5px'
        }}>
          {data?.title || 'Full Stack Enterprise Engineer'}
        </h2>

        <p style={{ 
          maxWidth: '650px', 
          color: 'var(--text-muted)', 
          lineHeight: 1.7, 
          marginBottom: '3rem', 
          fontSize: '1.15rem',
          fontWeight: 400
        }}>
          {data?.bio || 'Building reactive presentation clients and scalable transactional storage systems.'}
        </p>

        <a href="#contact" className="premium-btn">
          Initialize Connection <FiArrowRight style={{ fontSize: '1.1rem' }} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;