import { useState, useEffect } from 'react';
import Header from './components/Header';
import RingkasanInventaris from './components/RingkasanInventaris';
import FormTambahBarang from './components/FormTambahBarang';
import DaftarBarang from './components/DaftarBarang';
import './App.css';

export default function App() {
  const [listBarang, setListBarang] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi Fetch Data dari API
  const fetchInventaris = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/');
      if (!response.ok) {
        throw new Error('Gagal mengambil data dari server (HTTP Error)');
      }
      const data = await response.json();

      // Mapping data JSONPlaceholder ke entitas Barang
      const formattedData = data.map((item, index) => ({
        id: item.id,
        nama: `Barang Inventaris #${item.id}: ${item.title.substring(0, 20)}`,
        kategori: index % 2 === 0 ? 'Elektronik' : 'Perlengkapan Kantor',
        stok: (item.id * 5) + 2,
        lokasi: `Gudang ${String.fromCharCode(65 + (index % 3))}-0${item.id}`
      }));

      setListBarang(formattedData);
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan jaringan');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventaris();
  }, []);

  // Fungsi POST Data Baru ke Mock API
  const handleTambahBarang = async (barangBaru) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(barangBaru),
      });

      if (response.ok) {
        // Gabungkan data baru ke state lokal (UI)
        setListBarang((prevList) => [barangBaru, ...prevList]);
      }
    } catch (err) {
      alert('Gagal mengirim data ke server.');
    }
  };

  return (
    <div className="app-container">
      <Header />
      <RingkasanInventaris listBarang={listBarang} />
      <div className="main-content">
        <FormTambahBarang onTambahBarang={handleTambahBarang} />
        <DaftarBarang 
          listBarang={listBarang} 
          loading={loading} 
          error={error} 
          onRetry={fetchInventaris} 
        />
      </div>
    </div>
  );
}