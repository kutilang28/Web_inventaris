import KartuBarang from './KartuBarang';

export default function DaftarBarang({ listBarang }) {
  // Conditional Rendering jika list kosong
  if (listBarang.length === 0) {
    return <p className="pesan-kosong">Belum ada data barang.</p>;
  }

  return (
    <div className="daftar-barang">
      {listBarang.map((barang) => (
        <KartuBarang key={barang.id} barang={barang} />
      ))}
    </div>
  );
}