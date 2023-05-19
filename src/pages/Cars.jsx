import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Cars() {
    const [posts, setPosts] = useState([])
    const [query, setQuery] = useState([])
    const [type, setType] = useState([])
    const API = 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json'
    
    // console.log(query);

    useEffect(() => {
        fectData()
    }, [])

    const fectData = async () => {
        const response = await axios.get(API)
        const data = await response.data
        setPosts(data)
    }

    return <>
        <Container className="mt-3">
          {/* HOME PAGE */}
        <section id="home">
          <Row>
            <Col md="6" className="sewa mt-5 text-start">
              <p>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
              <p className="binar-car" style={{ marginBottom: '10rem' }}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br/> terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br/> untuk sewa mobil selama 24 jam.</p>
            </Col>
            <Col md="6" style={{ marginTop: '7.3rem' }}>
              <img className="home-car" src="/assets/images/Mercedes Car EQC 300kW Edition - 900x598 1.png" alt="Gambar" />
              <div className="bg"></div>
            </Col>
          </Row>
        </section>

        {/* FILTER */}
        <form id="filter-form">
        <div className="card shadow-sm w-80 filter">
            <div className="card-body">
                <Row>
                    <Col md='3' className="text-start">
                    <Form.Label htmlFor="driver">Tipe Driver</Form.Label>
                        <Form.Select className="driver form-select fs-6 mt-3" id="available" aria-label="Default select example" name="available" onChange={ (e) => setType(e.target.value) }>
                            <option value="">-- Pilih Tipe Driver --</option>
                            <option value="true">Dengan Sopir</option>
                            <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                        </Form.Select>
                    </Col>
                    <Col md='3' className="text-start">
                        <Form.Label htmlFor="tanggal" className="mb-3 d-block">Tanggal</Form.Label>
                        <Form.Control type="date" className="form-control" name="date" id="date" />
                    </Col>
                    <Col md='3' className="text-start">
                    <Form.Label htmlFor="waktu" className="mb-3 d-block">Waktu Jemput/Ambil</Form.Label>
                    <Form.Select className="form-select" name="time" id="time">
                        <option value="">Pilih Waktu</option>
                        <option value="">08.00 <span className="ms-5">WIB</span></option>
                        <option value="">09.00 <span className="ms-5">WIB</span></option>
                        <option value="">10.00 <span className="ms-5">WIB</span></option>
                        <option value="">11.00 <span className="ms-5">WIB</span></option>
                        <option value="">12.00 <span className="ms-5">WIB</span></option>
                    </Form.Select>
                    </Col>
                    <Col md='3' className="text-start">
                        <Form.Label htmlFor="penumpang" className="mb-3 d-block">Jumlah Penumpang (optional)</Form.Label>
                        <div className="icon-form d-flex">
                            <Form.Control type="number" placeholder="Jumlah penumpang" onChange={ (e) => setQuery(e.target.value) } />
                            <i className='bi bi-people-fill fs-5 ms-2'></i>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        </form>
        <div className="bg-cars"></div>
        <br />
        <Row className="row-cars">
          {posts.filter((item) => String(item.available) === type && item.capacity >= query).map((post, index) => (
            <Col md='4' style={{ zIndex: '1' }} className="col-cars mb-3" key={post.id}>
              <div className="card" style={{ marginLeft: '2rem', marginRight: '2rem' }}>
                <div className="card-body">
                  <img src = {`/assets/${post.image}`} alt="Gambar" width={'300px'} height={'200px'} />
                  <h5 className="card-title" >{post.type}</h5>
                  <p className="card-text">Capacity: {post.capacity}</p>
                  <a href="#" className="btn btn-primary">Learn more</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>



          {/* FOOTER */}
          <footer className="cars">
            <Row>
              <Col md='3' style={{ marginTop: '20rem' }} className="text-start ms-5">
                <ul>
                  <li className="list-item mb-3">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                  <li className="list-item mb-3">binarcarrental@gmail.com</li>
                  <li className="list-item">081-233-334-808</li>
                </ul>
              </Col>
              <Col md='3' style={{ marginTop: '20rem' }} className="text-start">
                <ul>
                  <li className="list-item">
                    <a href="#best-car-rental" className="nav-link text-dark">Our services</a>
                  </li>
                  <li className="list-item">
                    <a href="#why-us" className="nav-link text-dark">Why Us</a>
                  </li>
                  <li className="list-item">
                    <a href="#testimonial" className="nav-link text-dark">Testimonial</a>
                  </li>
                  <li className="list-item">
                    <a href="#faq" className="nav-link text-dark">FAQ</a>
                  </li>
                </ul>
              </Col>
              <Col md='3' style={{ marginTop: '20rem' }} className="text-start">
                <ul>
                  <li className="list-iem mb-3" >Connect with us</li>
                  <li className="list-item"><img src="/assets/images/list item.png" style={{ width: '12em' }} alt="gambar" /></li>
                </ul>
              </Col>
              <Col md='2' style={{ marginTop: '20rem' }} className="text-start">
                <ul>
                  <li className="list-group mb-3">Copyright Binar 2022</li>
                  <li className="list-group mb-3 footer-brand"></li>
                </ul>
              </Col>
            </Row>
          </footer>
        </Container>
    </>
}

export default Cars