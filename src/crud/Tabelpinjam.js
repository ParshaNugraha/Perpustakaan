import Table from 'react-bootstrap/Table';
import React from 'react';

const Tabelpinjam = ({bukus, editData, hapusData}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Peminjam</th>
          <th>Nama Buku</th>
          <th>Tanggal Keluar</th>
          <th>Tanggal Masuk</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {((buku,index) => {
            return(
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{buku.nama}</td>
                <td>{buku.author}</td>
                <td>{buku.deskripsi}</td>
                <td>{buku.harga}</td>
                <td>
                  <button className='btn btn-warning' onClick={() => editData(buku.id) }>Edit</button>
                  <button className='btn btn-danger' onClick={() => hapusData(buku.id) }>Hapus</button>
                </td>
            </tr>
            );
        })}
      </tbody>
    </Table>
  );
}

export default Tabelpinjam;