import { useState } from 'react';

export default function FormTambahBarang({ onTambahBarang }) {
  const [nama, setNama] = useState('');
  const [kategori, setKategori] = useState('Elektronik');
  const [stok, setStok] = useState('');
  const [lokasi, setLokasi] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama.trim() || !stok || !lokasi.trim()) return;

    const barangBaru = {
      id: Date.now(),
      nama,
      kategori,
      stok: Number(stok),
      lokasi,
    };

    onTambahBarang(barangBaru);
    setNama('');
    setStok('');
    setLokasi('');
    setKategori('Elektronik');
  };

  return (
    <form className="form-tambah" onSubmit={handleSubmit}>
      <h2>Tambah Barang Baru</h2>
      <div className="form-group">
        <label>Nama Barang:</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Contoh: Proyektor Epson EB-E500"
          required
        />
      </div>
      <div className="form-group">
        <label>Kategori:</label>
        <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
          <option value="Elektronik">Elektronik</option>
          <option value="Perlengkapan Kantor">Perlengkapan Kantor</option>
          <option value="Mebel / Furnitur">Mebel / Furnitur</option>
          <option value="Konsumsi">Konsumsi</option>
        </select>
      </div>
      <div className="form-group">
        <label>Stok (Unit):</label>
        <input
          type="number"
          value={stok}
          onChange={(e) => setStok(e.target.value)}
          placeholder="Contoh: 10"
          min="1"
          required
        />
      </div>
      <div className="form-group">
        <label>Lokasi Penyimpanan:</label>
        <input
          type="text"
          value={lokasi}
          onChange={(e) => setLokasi(e.target.value)}
          placeholder="Contoh: Rak A-02"
          required
        />
      </div>
      <button type="submit">Tambah Barang</button>
    </form>
  );
}