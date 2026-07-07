import  { useContext } from 'react';
import { ThemeContext } from '/src/context/ThemeContext.jsx';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const targets = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Certificates', 'Contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', height: '80px',
      backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '0 10%', zIndex: 1000, backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)'
    }}>
      <a href="#" style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
        PORTFOLIO<span style={{ color: '#3b82f6' }}>.</span>
      </a>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
          {targets.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="nav-item">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={toggleTheme} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '40px', height: '40px', borderRadius: '50%', 
          border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-app)',
          color: 'var(--text-main)', fontSize: '1.1rem', transition: 'all 0.2s'
        }}>
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;