import React from 'react';
import AdminLayout from '../layouts/AdminLayout'; // Sesuaikan path jika perlu

const AdminDashboard: React.FC = () => {
  return (
    <AdminLayout title="Dashboard">
      
      {/* 3 KARTU STATISTIK ATAS */}
      <div className="admin-grid-3">
        <div className="admin-stat-card">
          <div className="admin-stat-header">
            <span className="admin-stat-title">Total Mahasiswa</span>
            <span>👥</span>
          </div>
          <div className="admin-stat-value">1,240</div>
          <div className="admin-stat-desc">+12% dari bulan lalu</div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-header">
            <span className="admin-stat-title">Total Toko Aktif</span>
            <span>🏪</span>
          </div>
          <div className="admin-stat-value">45</div>
          <div className="admin-stat-desc">+3 toko baru</div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-header">
            <span className="admin-stat-title">Estimasi Transaksi</span>
            <span>📈</span>
          </div>
          <div className="admin-stat-value">Rp 12.500.000</div>
          <div className="admin-stat-desc">+8.5% dari bulan lalu</div>
        </div>
      </div>

      {/* BAGIAN BAWAH: TABEL & LIST */}
      <div className="admin-grid-2-custom">
        
        {/* KOLOM KIRI (LEBAR) - TABEL VERIFIKASI */}
        <div className="admin-card">
          <h3 className="admin-card-title">Toko Menunggu Verifikasi</h3>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Nama Toko</th>
                <th>Pemilik</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>24 Mei 2026</td>
                <td>Ayam Geprek Kampus</td>
                <td>Budi Santoso</td>
                <td><button className="btn-review-outline">Review</button></td>
              </tr>
              <tr>
                <td>23 Mei 2026</td>
                <td>Kopi Senja Mahasiswa</td>
                <td>Siti Rahma</td>
                <td><button className="btn-review-outline">Review</button></td>
              </tr>
              <tr>
                <td>22 Mei 2026</td>
                <td>Warteg Barokah</td>
                <td>Pak Yanto</td>
                <td><button className="btn-review-outline">Review</button></td>
              </tr>
            </tbody>
          </table>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <span style={{ color: '#FF9746', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>Lihat Semua Pengajuan</span>
          </div>
        </div>

        {/* KOLOM KANAN (SEMPIT) - TOP TOKO */}
        <div className="admin-card">
          <h3 className="admin-card-title">Top 5 Toko Terlaris</h3>
          <div className="top-store-list">
            
            <div className="top-store-item">
              <div className="top-store-left">
                <div className="ts-icon">👨‍🍳</div>
                <div className="ts-info">
                  <h4>Nasi Goreng Gila</h4>
                  <p>Penjualan Terbaik #1</p>
                </div>
              </div>
              <div className="ts-sales">Rp 3.200.000</div>
            </div>

            <div className="top-store-item">
              <div className="top-store-left">
                <div className="ts-icon">🍗</div>
                <div className="ts-info">
                  <h4>Ayam Geprek Bensu</h4>
                  <p>Penjualan Terbaik #2</p>
                </div>
              </div>
              <div className="ts-sales">Rp 2.850.000</div>
            </div>

            <div className="top-store-item">
              <div className="top-store-left">
                <div className="ts-icon">☕</div>
                <div className="ts-info">
                  <h4>Es Teh Poci Kantin</h4>
                  <p>Penjualan Terbaik #3</p>
                </div>
              </div>
              <div className="ts-sales">Rp 1.900.000</div>
            </div>

          </div>
        </div>

      </div>

    </AdminLayout>
  );
};

export default AdminDashboard;