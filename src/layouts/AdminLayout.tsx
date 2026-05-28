import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Admin.css';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

// === KOMPONEN INTERNAL: POP-UP NAVIGASI MOBILE ===
const AdminNavPopUp: React.FC<{ onClose: () => void; navigate: (path: string) => void; isActive: (path: string) => boolean }> = ({ onClose, navigate, isActive }) => {
  const handleItemClick = (path: string) => {
    navigate(path);
    onClose(); // Tutup pop-up setelah item diklik
  };

  return (
    <div className="admin-nav-overlay open" onClick={onClose}>
      <div className="admin-nav-content" onClick={(e) => e.stopPropagation()}>
        {/* Tombol Tutup (X) */}
        <button className="admin-nav-close" onClick={onClose}>✕</button>
        
        <div className="admin-nav-popup-logo">BEM SSMI Admin</div>
        
        <nav className="admin-nav-popup-list">
          <div className={`admin-nav-popup-item ${isActive('/admin/dashboard') ? 'active' : ''}`} onClick={() => handleItemClick('/admin/dashboard')}>
            <span>🏠</span> Dashboard
          </div>
          <div className={`admin-nav-popup-item ${isActive('/admin/verifikasi') ? 'active' : ''}`} onClick={() => handleItemClick('/admin/verifikasi')}>
            <span>🏪</span> Verifikasi Toko
          </div>
          <div className={`admin-nav-popup-item ${isActive('/admin/pengguna') ? 'active' : ''}`} onClick={() => handleItemClick('/admin/pengguna')}>
            <span>👥</span> Manajemen Pengguna
          </div>
          <div className={`admin-nav-popup-item ${isActive('/admin/log') ? 'active' : ''}`} onClick={() => handleItemClick('/admin/log')}>
            <span>📋</span> Log Aktivitas
          </div>
          
          <div className="admin-nav-popup-separator"></div>
          
          <div className="admin-nav-popup-item">
            <span>⚙️</span> Pengaturan
          </div>
          <div className="admin-nav-popup-item logout" onClick={() => handleItemClick('/login')}>
            <span>🚪</span> Logout
          </div>
        </nav>
      </div>
    </div>
  );
};


// === KOMPONEN UTAMA: ADMIN LAYOUT ===
const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // Mengontrol Pop-up
  const navigate = useNavigate();
  const location = useLocation();

  // Fungsi cek menu aktif
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="admin-container">
      
      {/* POP-UP NAVIGASI MOBILE (Hanya dirender jika state terbuka) */}
      {isMobileNavOpen && (
        <AdminNavPopUp 
          onClose={() => setIsMobileNavOpen(false)} 
          navigate={navigate} 
          isActive={isActive} 
        />
      )}

      {/* SIDEBAR DESKTOP-ONLY (Warna Navy) */}
      <aside className="admin-sidebar">
        <div className="admin-logo">BEM SSMI Admin</div>
        
        <nav className="admin-nav">
          <div className={`admin-nav-item ${isActive('/admin/dashboard') ? 'active' : ''}`} onClick={() => navigate('/admin/dashboard')}>
             <span>🏠</span> Dashboard
          </div>
          <div className={`admin-nav-item ${isActive('/admin/verifikasi') ? 'active' : ''}`} onClick={() => navigate('/admin/verifikasi')}>
             <span>🏪</span> Verifikasi Toko
          </div>
          <div className={`admin-nav-item ${isActive('/admin/pengguna') ? 'active' : ''}`} onClick={() => navigate('/admin/pengguna')}>
             <span>👥</span> Manajemen Pengguna
          </div>
          <div className={`admin-nav-item ${isActive('/admin/log') ? 'active' : ''}`} onClick={() => navigate('/admin/log')}>
             <span>📋</span> Log Aktivitas
          </div>
        </nav>

        <div className="admin-nav-bottom">
          <div className="admin-nav-item">
            <span>⚙️</span> Pengaturan
          </div>
          <div className="admin-nav-item logout" onClick={() => navigate('/login')}>
            <span>🚪</span> Logout
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="admin-main">
        <header className="admin-topbar">
          {/* Tombol Hamburger di mobile memicu POP-UP */}
          <button className="admin-hamburger" onClick={() => setIsMobileNavOpen(true)}>☰</button>
          <h2>{title}</h2>
        </header>
        
        <div className="admin-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;