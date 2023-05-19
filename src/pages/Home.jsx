import { Card, Container, Row, Col, Button, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'
import React from "react";

function Home() {
    return <>
        <Container className="mt-3">
          {/* HOME PAGE */}
        <section id="home">
          <Row>
            <Col md="6" className="sewa mt-5 text-start">
              <p>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
              <p className="binar-car">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br/> terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br/> untuk sewa mobil selama 24 jam.</p>
              <Nav.Link as={Link} to='/cars' className='text-light fw-bold btn btn-success w-50'>Mulai sewa mobil</Nav.Link>
            </Col>
            <Col md="6 mt-5">
              <img className="home-car" src="/assets/images/Mercedes Car EQC 300kW Edition - 900x598 1.png" alt="Gambar" />
              <div className="bg"></div>
            </Col>
          </Row>
        </section>

            {/* OUR SERVICE */}
          <section id="our-service">  
            <Row>
              <Col md='6' className="binar-img">
                <img src="/assets/images/Group 54.png" alt="Gambar" className="mt-5" />
              </Col>    
              <Col md='6' className="our-service-content mt-5">
                <div className="binar-sewa-mobil text-start">
                  <h2 className="ms-4">Best Car Rental for any kind of trip in <br/>(Lokasimu)!</h2>
                  <p className="ms-4 sewa-mobil">
                            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah <br/> dibandingkan
                            yang
                            lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk <br/> perjalanan wisata, bisnis,
                            wedding, meeting, dll.
                        </p>
                <ul>
                  <li className="list-item mb-3">
                    <img src="/assets/images/Group 53.png" alt="Gambar" className="me-3" /> Sewa Mobil Dengan Supir di Bali 12 Jam
                  </li>
                  <li className="list-item mb-3">
                    <img src="/assets/images/Group 53.png" alt="Gambar" className="me-3" /> Mobil Lepas Kunci di Bali 24 Jam
                  </li>
                  <li className="list-item mb-3">
                    <img src="/assets/images/Group 53.png" alt="Gambar" className="me-3" /> Mobil Jangka Panjang Bulanan
                  </li>
                  <li className="list-item mb-3">
                    <img src="/assets/images/Group 53.png" alt="Gambar" className="me-3" /> Gratis Antar - Jemput Mobil di Bandara
                  </li>
                  <li className="list-item mb-3">
                    <img src="/assets/images/Group 53.png" alt="Gambar" className="me-3" /> Layanan Airport Transfer / Drop In Out
                  </li>
                </ul>
                </div>
              </Col>    
            </Row>
          </section>

          <section id="why-us">
            <h2 className="whyus text-start ms-5">Why Us?</h2>
            <p className="whyus mb-5 text-start ms-5">Mengapa harus pilih Binar Car Rental?</p>
            <Row>
            <Col md='2' className="ms-5" style={{ margin: '0 5rem' }}>
              <Card className="rounded shadow-sm" style={{ width: '16.5rem' }}>
                <img src="/assets/images/icon_complete.png" width='32px' className="ms-3" alt="Gambar" />
                <Card.Body>
                  <Card.Title className="fw-bold mb-4 text-start"><h5>Mobil Lengkap</h5></Card.Title>
                  <Card.Text className="text-start" style={{ fontSize: '12px' }}>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md='2'>
              <Card className="rounded shadow-sm" style={{ width: '16.5rem' }}>
                <img src="/assets/images/icon_price.png" width='32px' className="ms-3" alt="Gambar" />
                <Card.Body>
                  <Card.Title className="fw-bold mb-4 text-start"><h5>Harga Murah</h5></Card.Title>
                  <Card.Text className="text-start" style={{ fontSize: '12px' }}>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md='2' style={{ margin: '0 5rem' }}>
              <Card className="rounded shadow-sm" style={{ width: '16.5rem' }}>
                <img src="/assets/images/icon_24hrs.png" width='32px' className="ms-3" alt="Gambar" />
                <Card.Body>
                  <Card.Title className="fw-bold mb-4 text-start"><h5>Layanan 24 Jam</h5></Card.Title>
                  <Card.Text className="text-start" style={{ fontSize: '12px' }}>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md='2' className="">
              <Card className="rounded shadow-sm" style={{ width: '16.5rem' }}>
                <img src="/assets/images/icon_professional.png" width='32px' className="ms-3" alt="Gambar" />
                <Card.Body>
                  <Card.Title className="fw-bold mb-4 text-start"><h5>Mobil Lengkap</h5></Card.Title>
                  <Card.Text className="text-start" style={{ fontSize: '12px' }}>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            </Row>
          </section>

          {/* TESTIMONIAL */}
          <section id="testimonial">
            <h2 className="fw-bold">Testimonial</h2>
            <p className="mb-5 review">Berbagai review positif dari para pelanggan kami</p>
           
          </section>

          {/* BANNER SEWA MOBIL */}
          <section id="sewa-mobil">
            <div className="banner">
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h1 className="text-light">Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <Row>
                      <Col>
                        <Card.Text className="mt-3 text-light card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                      </Col>
                    </Row>
                    <a href="/cars" className="btn btn-success mt-5 fw-bold">Mulai Sewa Mobil</a>
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </section>

          {/* FREQUENTLY ASKED */}
          <section id="faq">
            <div className="asked">
            <Row>
              <Col md='5' className="asked-coloumn-1 mt-5 text-start ms-5">
                <h3>Frequently Asked Question</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Col>
              <Col md='6' className="mt-5 asked-coloumn-2"> 
              <div className="accordion accordion-flush border rounded mt-3" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam, voluptatum eos voluptatibus exercitationem obcaecati quibusdam ad quia! Commodi numquam porro, aliquid id quibusdam a fugit maiores voluptas laudantium asperiores.</div>
                  </div>
                </div>
              </div>

              <div className="accordion accordion-flush border rounded mt-3" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam, voluptatum eos voluptatibus exercitationem obcaecati quibusdam ad quia! Commodi numquam porro, aliquid id quibusdam a fugit maiores voluptas laudantium asperiores.</div>
                  </div>
                </div>
              </div>

              <div className="accordion accordion-flush border rounded mt-3" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam, voluptatum eos voluptatibus exercitationem obcaecati quibusdam ad quia! Commodi numquam porro, aliquid id quibusdam a fugit maiores voluptas laudantium asperiores.</div>
                  </div>
                </div>
              </div>

              <div className="accordion accordion-flush border rounded mt-3" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Apakah Ada biaya antar-jemput?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam, voluptatum eos voluptatibus exercitationem obcaecati quibusdam ad quia! Commodi numquam porro, aliquid id quibusdam a fugit maiores voluptas laudantium asperiores.</div>
                  </div>
                </div>
              </div>

              <div className="accordion accordion-flush border rounded mt-3" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Bagaimana jika terjadi kecelakaan?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam, voluptatum eos voluptatibus exercitationem obcaecati quibusdam ad quia! Commodi numquam porro, aliquid id quibusdam a fugit maiores voluptas laudantium asperiores.</div>
                  </div>
                </div>
              </div>
              </Col>
            </Row>
            </div>
          </section>

          {/* FOOTER */}
          <footer id="home">
            <Row>
              <Col md='3' className="text-start ms-5">
                <ul>
                  <li className="list-item mb-3">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                  <li className="list-item mb-3">binarcarrental@gmail.com</li>
                  <li className="list-item">081-233-334-808</li>
                </ul>
              </Col>
              <Col md='3' className="text-start">
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
              <Col md='3' className="text-start">
                <ul>
                  <li className="list-iem mb-3" >Connect with us</li>
                  <li className="list-item"><img src="/assets/images/list item.png" style={{ width: '12em' }} alt="gambar" /></li>
                </ul>
              </Col>
              <Col md='2' className="text-start">
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

export default Home