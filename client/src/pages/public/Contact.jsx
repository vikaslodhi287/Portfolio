import  { useState } from 'react';
import { sendContactMessage } from '/src/services/api/contact.api.js';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleDispatch = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', msg: '' });

    try {
      await sendContactMessage(form);
      setStatus({ type: 'success', msg: 'Transmission completed successfully. Message logged.' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', msg: err?.message || 'Failed to execute outbound form dispatch.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '6rem 4rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', textAlign: 'center' }}>
        Get In Touch
      </h2>
      <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
        Open an asynchronous connection window to coordinate project actions.
      </p>

      <form onSubmit={handleDispatch} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <input type="text" placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={{ padding: '0.85rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)' }} />
        <input type="email" placeholder="Your Email Address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={{ padding: '0.85rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)' }} />
        <input type="text" placeholder="Inquiry Subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} style={{ padding: '0.85rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)' }} />
        <textarea rows="5" placeholder="Detail message specs..." required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ padding: '0.85rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)', resize: 'vertical' }} />
        
        {status.msg && <div style={{ padding: '0.85rem', borderRadius: '6px', backgroundColor: status.type === 'success' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', color: status.type === 'success' ? '#10b981' : '#ef4444', fontSize: '0.9rem', fontWeight: 500 }}>{status.msg}</div>}
        
        <button type="submit" disabled={submitting} style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '1rem', borderRadius: '6px', fontWeight: 600 }}>
          {submitting ? 'Transmitting Data...' : 'Dispatch Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;