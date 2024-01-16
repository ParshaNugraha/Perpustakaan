import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Tabelpinjam from "./Tabelpinjam";

const peminjam = ({namapeminjam, namabuku, tanggalkeluar, tanggalmasuk, handleChange, handleSubmit, id}) => {
  return (
    <div className="mt-5">
        <Row>
            <Col>
            <Tabelpinjam/>
            </Col>
        </Row>
      <Row>
        <Col>
          <h4>{id ? "Edit Data" : "Tambah Data" }</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="namapeminjam">
              <Form.Label>Nama Peminjam</Form.Label>
              <Form.Control type="text" name="namapeminjam" value={namapeminjam} onChange={(event) => handleChange(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="namabuku">
                <Form.Label>Nama Buku</Form.Label>
                <Form.Control type="text" name="namabuku" value={namabuku} onChange={(event) => handleChange(event)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="tanggalkeluar">
              <Form.Label>Tanggal Keluar</Form.Label>
              <Form.Control type="date" name="tanggalkeluar" value={tanggalkeluar} onChange={(event) => handleChange(event)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="tanggalmasuk">
              <Form.Label>Tanggal Masuk</Form.Label>
              <Form.Control type="date" name="tanggalmasuk" value={tanggalmasuk} onChange={(event) => handleChange(event)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default peminjam;
