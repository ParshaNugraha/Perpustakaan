import React from "react";
import Booklist from "./Booklist";
import Peminjam from "./Peminjam";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class Crud extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bukus : [],
            nama : "",
            author : "",
            deskripsi : "",
            harga : "",
            id : "",
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

    if(this.state.id === ""){
        this.setState({
            bukus : [
                ...this.state.bukus,
            {
                id: this.state.bukus.length + 1,
                nama: this.state.nama,
                deskripsi: this.state.deskripsi,
                harga: this.state.harga,
                author : this.state.author,
            },
            ],
        });
    } else {
        const bukuYangdipilih = this.state.bukus
        .filter((buku) => buku.id !== this.state.id)
        .map((filterBuku) => {
            return filterBuku
        });

    
    this.setState({
        bukus : [
            ...bukuYangdipilih,
            {
                id: this.state.bukus.length+1,
                nama : this.state.nama,
                deskripsi : this.state.deskripsi,
                harga :this.state.harga,
                author : this.state.author,
            },
        ],
    });
}
    this.setState({
        id : "",
        nama :"",
        author : "",
        deskripsi : "",
        harga : "0", 
    })
}

editData = (id) => {
    const bukuYangdipilih = this.state.bukus
    .filter((buku) => buku.id === id)
    .map((filterBuku) => {
        return filterBuku;
    });

    this.setState({
        nama : bukuYangdipilih[0].nama,
        author : bukuYangdipilih[0].author,
        deskripsi : bukuYangdipilih[0].deskripsi,
        harga : bukuYangdipilih[0].harga,
        id : bukuYangdipilih[0].id,
    });
};

hapusData = (id) => {
    const bukuBaru = this.state.bukus
    .filter((buku) => buku.id !== id)
    .map((filterBuku) => {
        return filterBuku
    })
    this.setState({
        bukus : bukuBaru
    })
}
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/Buku" element={<Booklist {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>} />
            <Route path="/Peminjam" element={<Peminjam {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}
