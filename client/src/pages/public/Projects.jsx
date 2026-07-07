import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Skeleton } from '/src/components/common/Skeleton.jsx';

const Projects = ({ data, loading }) => {
  return (
    <section id="projects" style={{ padding: '6rem 4rem', backgroundColor: 'var(--bg-app)' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2.5rem', color: 'var(--text-main)' }}>
        Featured Engineering Systems
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {loading ? (
          [1, 2, 3].map((n) => (
            <div key={n} style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '12px', backgroundColor: 'var(--bg-surface)' }}>
              <Skeleton height="180px" />
              <Skeleton count={3} />
            </div>
          ))
        ) : data?.length === 0 ? (
          <p style={{ color: 'var(--text-muted)' }}>No live catalog records seeded.</p>
        ) : data?.map((project, idx) => (
          <motion.div
            key={project._id || idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: 'var(--bg-surface)', borderRadius: '12px',
              border: '1px solid var(--border-color)', overflow: 'hidden',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
            }}
          >
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontWeight: 600 }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.technologies?.map((tech) => (
                  <span key={tech} style={{ backgroundColor: 'var(--bg-app)', color: '#3b82f6', fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: '4px', fontWeight: 500 }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '1.25rem', backgroundColor: 'var(--bg-surface)' }}>
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}><FiGithub /> Repository</a>}
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: '#3b82f6', fontWeight: 500 }}><FiExternalLink /> Live Instance</a>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;