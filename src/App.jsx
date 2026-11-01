import { useState } from 'react';
import Header from './components/Header';
import RingkasanInventaris from './components/RingkasanInventaris';
import FormTambahBarang from './components/FormTambahBarang';
import DaftarBarang from './components/DaftarBarang';
import './App.css';

export default function App() {
  // State array data inventaris dengan sampel data awal yang realistis
  const [listBarang, setListBarang] = useState([
    { id: 1, nama: 'Laptop Lenovo ThinkPad X1', kategori: 'Elektronik', stok: 12, lokasi: 'Gudang Utama - Rak A1' },
    { id: 2, nama: 'Kursi Kerja Ergonomis', kategori: 'Mebel / Furnitur', stok: 8, lokasi: 'Ruang Rapat 2' },
    { id: 3, nama: 'Kertas HVS A4 80gr', kategori: 'Perlengkapan Kantor', stok: 50, lokasi: 'Gudang B - Lemari 3' }
  ]);

  const handleTambahBarang = (barangBaru) => {
    setListBarang((prevList) => [barangBaru, ...prevList]);
  };

  return (
    <div className="app-container">
      <Header />
      <RingkasanInventaris listBarang={listBarang} />
      <div className="main-content">
        <FormTambahBarang onTambahBarang={handleTambahBarang} />
        <DaftarBarang listBarang={listBarang} />
      </div>
    </div>
  );
}