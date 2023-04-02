import { useState } from 'react';

export default function Test() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarOpen = () => {
    setIsOpen(true);
  };

  const handleSidebarClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('sidebar-overlay')) {
      handleSidebarClose();
    }
  };

  return (
    <>
      <button onClick={handleSidebarOpen}>Open Sidebar</button>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <button onClick={handleSidebarClose}>Close Sidebar</button>
          {/* Add content here */}
        </div>
      </div>
    </>
  );
}
