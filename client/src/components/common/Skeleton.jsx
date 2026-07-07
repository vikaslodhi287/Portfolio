
export const Skeleton = ({ variant = 'text', width = '100%', height = '20px', count = 1 }) => {
  const elements = Array.from({ length: count });

  const style = {
    width,
    height,
    backgroundColor: 'var(--border-color)',
    borderRadius: variant === 'circle' ? '50%' : '6px',
    margin: '0.5rem 0',
    animation: 'pulse-glow 1.5s infinite ease-in-out',
    opacity: 0.6
  };

  return (
    <>
      <style>{`
        @keyframes pulse-glow {
          0% { opacity: 0.6; }
          50% { opacity: 0.3; }
          100% { opacity: 0.6; }
        }
      `}</style>
      {elements.map((_, idx) => (
        <div key={idx} style={style} />
      ))}
    </>
  );
};