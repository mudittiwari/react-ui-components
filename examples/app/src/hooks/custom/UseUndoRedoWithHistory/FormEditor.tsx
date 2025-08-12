import React, { useEffect } from 'react';
import { UseUndoRedoWithHistory } from './UseUndoRedoWithHistory';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  about: string;
  subscribe: boolean;
}

export function FormEditor() {
  const {
    state: formData,
    set: setFormData,
    undo,
    redo,
    clear,
    canUndo,
    canRedo,
  } = UseUndoRedoWithHistory<FormData>({
    initialPresent: {
      name: '',
      email: '',
      phone: '',
      address: '',
      country: '',
      about: '',
      subscribe: false,
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, type, value } = e.target;
    let newValue: string | boolean = value;
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
      newValue = e.target.checked;
    }
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // Keyboard shortcuts for undo/redo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isUndo = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && !e.shiftKey;
      const isRedo =
        (e.ctrlKey || e.metaKey) &&
        (e.key.toLowerCase() === 'y' || (e.key.toLowerCase() === 'z' && e.shiftKey));

      if (isUndo) {
        e.preventDefault();
        if (canUndo) undo();
      } else if (isRedo) {
        e.preventDefault();
        if (canRedo) redo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, canUndo, canRedo]);

  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: 24, fontSize: '1.8rem', fontWeight: 700 }}>
        📝 Form Editor with Undo/Redo
      </h2>

      <form
        style={{
          background: 'white',
          padding: '28px 32px',
          borderRadius: 16,
          boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
          border: '1px solid #e2e8f0',
          transition: 'box-shadow 0.3s ease',
          maxWidth: 700, // increased width
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
        }}
      >
        <label style={labelStyle}>
          Name
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={inputStyle} placeholder="John Doe" />
        </label>

        <label style={labelStyle}>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={inputStyle} placeholder="john@example.com" />
        </label>

        <label style={labelStyle}>
          Phone
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} style={inputStyle} placeholder="+1 123 456 7890" />
        </label>

        <label style={labelStyle}>
          Country
          <select name="country" value={formData.country} onChange={handleInputChange} style={{ ...inputStyle, height: 42 }}>
            <option value="">Select Country</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="in">India</option>
            <option value="au">Australia</option>
          </select>
        </label>

        <label style={{ ...labelStyle, gridColumn: 'span 2' }}>
          Address
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} style={inputStyle} placeholder="123 Main St, City" />
        </label>

        <label style={{ ...labelStyle, gridColumn: 'span 2' }}>
          About Me
          <textarea name="about" value={formData.about} onChange={handleInputChange} style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }} placeholder="Tell us something about yourself..." />
        </label>

        <label style={{ ...labelStyle, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleInputChange} style={{ accentColor: '#1976d2', width: 18, height: 18, cursor: 'pointer' }} />
          Subscribe to newsletter
        </label>
      </form>

      {/* Action Buttons */}
      <div style={{ marginTop: 28, display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
        <ActionButton onClick={undo} disabled={!canUndo} text="Undo (Ctrl+Z)" color="#e67e22" />
        <ActionButton onClick={redo} disabled={!canRedo} text="Redo (Ctrl+Y)" color="#27ae60" />
        <ActionButton
          onClick={clear}
          disabled={!formData.name && !formData.email && !formData.phone && !formData.address && !formData.country && !formData.about && !formData.subscribe}
          text="Clear"
          color="#c0392b"
        />
      </div>
    </div>
  );
}

/** Premium Stylish Button */
const ActionButton = ({ onClick, disabled, text, color }: { onClick: () => void; disabled: boolean; text: string; color: string }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      backgroundColor: disabled ? '#bdc3c7' : color,
      color: 'white',
      border: 'none',
      padding: '10px 18px',
      borderRadius: 8,
      fontWeight: 600,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontSize: 15,
      minWidth: 110,
      userSelect: 'none',
      transition: 'all 0.3s ease',
      boxShadow: disabled ? 'none' : `0 5px 15px ${color}40`,
    }}
  >
    {text}
  </button>
);

const labelStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  fontWeight: 500,
  fontSize: 15,
  color: '#34495e',
};

const inputStyle: React.CSSProperties = {
  marginTop: 6,
  padding: '10px 12px',
  fontSize: 15,
  borderRadius: 6,
  border: '1.5px solid #d0d7de',
  width: '100%',
  boxSizing: 'border-box',
  outlineColor: '#1976d2',
  transition: 'all 0.25s ease',
};
