import * as React from 'react';
import '../../assets/styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Card, Button } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';
import NavComponent from '../Nav';

export default function Home() {
    return (
        <div className='bg-secondary bg-opacity-10'>
            <NavComponent />
            <div id='Home' className="p-5 mb-4 bg-light rounded-3 jumbotron">
            <div className="container py-5 text-center">
              <p className="fs-5 fst-italic mt-5">Full Stack Developer</p>
              <h1 className="display-4">Wibisana Putra Setyanegara</h1>
              <a href="https://www.linkedin.com/in/isanawib/">
              <button className="btn border border-dark btn-sm mt-5 shadow-sm text-white px-3 py-2">Contact Me</button>
              </a>
            </div>
          </div>
          <div>
            <div id='About' className="container text-center">
            <div className='card'>
            <h2 className='mt-2'>About me</h2>
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                
                <Image className="selfphoto" src="240.png" alt=""></Image>
                
                </div>
                <div className="col-md-6">
                <p className="lead">
                Halo, perkenalkan nama saya Wibisana, Saya adalah seorang Web Developer. saya mulai tertarik dengan dunia IT sejak kecil, saya memulai membuat sebuah Blog pada saat SMP dan kemudian tertarik tentang web development. saat ini saya sudah memiliki pengalaman pembuatan sistem berbasis website.
                </p>
                </div>
            </div>
            
            <div className="social-media">
              <a href="https://github.com/isanaID"><Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt=""></Image></a>
              <a href="https://www.linkedin.com/in/isanawib/"><Image src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" alt=""></Image></a>
          </div>
          </div>              
            <div className="container align-self-center mt-3">
                <h4 className="text-center">Github Activity</h4>
                <div className="contents">
                <GitHubCalendar username="isanaID" />
                </div>
            </div>
            <div id='Project' className="container align-self-center mt-3">
                <h4 className="text-center">Projects</h4>
                <div className="d-flex justify-content-evenly flex-wrap">
                <Card style={{ width: '22rem' }}>
                  <Card.Img variant="top" src="project1.png" />
                  <Card.Body>
                    <Card.Title>E-Commerce</Card.Title>
                    <Card.Text>
                    E-commerce ini dibuat untuk melakukan pembelian barang secara online, dalam kasus project ini, E-commerce ini menjual makanan dan minuman kepada user. User dapat mendaftar, masuk ke dalam akun, menambahkan alamat, memasukan barang kedalam keranjang, dan melihat invoice.
                    </Card.Text>
                    <Button href="https://github.com/isanaID/E-commerce" variant="primary">Github</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '22rem' }}>
                  <Card.Img variant="top" src="project2.png" />
                  <Card.Body>
                    <Card.Title>OH!Gadget (Sistem Rekomendasi Smartphone)</Card.Title>
                    <Card.Text>
                    OH!Gadget merupakan sebuah website untuk membantu user atau pengguna dalam mencari smartphone sesuai dengan kebutuhan sehari – hari menggunakan machine learning untuk mendapatkan rekomendasi smartphone.
                    </Card.Text>
                    <Button href="https://github.com/isanaID/ohgadgetid" variant="primary">Github</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '22rem' }}>
                  <Card.Img variant="top" src="project3.png" />
                  <Card.Body>
                    <Card.Title>Sistem Informasi Pergudangan.</Card.Title>
                    <Card.Text>
                    Sistem informasi pergudangan ini dibuat untuk menyimpan segala informasi yang ada digudang pada perusahaan. Aplikasi ini mempunyai banyak fitur seperti menyimpan informasi produk, kategori, konsumen, produk masuk, dan produk keluar yang berbasis pada CRUD.
                    </Card.Text>
                    <Button href="https://github.com/isanaID/Sistem-Informasi-Pergudangan" variant="primary">Github</Button>
                  </Card.Body>
                </Card>
                </div>
                <div className='align-self-center mt-5'>
                <Button href="https://github.com/isanaID/" variant="dark">Project Lainnya</Button>
                  </div>
            </div>
              <div id='Skill' className="container align-self-center mt-3">
              <h3 className="text-center">Skills</h3>
              <div className="d-flex justify-content-evenly flex-wrap">
                <ul className="flexul flex-item justify-start"> 
                  
                  <div className="contents-item">
                    <li>
                    <Image className="rounded" src="https://www.duniailkom.com/wp-content/uploads/2015/11/JavaScript-featured-duniailkom.png"></Image>
                    <p>Javascript</p>
                    </li>
                  </div>
                  <div className="contents-item">
                    <li>
                    <Image className="rounded" height="300" src="https://www.logolynx.com/images/logolynx/bb/bbdcfbb07f04e76ab33e94462b9a1122.png"></Image>
                    <p>MongoDB</p>
                    </li>
                  </div>
                  <div className="contents-item">
                    <li>
                    <Image className="rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"></Image>
                    <p>ReactJS</p>
                    </li>
                  </div>
                  <div className="contents-item">
                    <li>
                    <Image className="rounded" src="https://miro.medium.com/max/1400/0*udqKV8dsTEnBeKRm.png"></Image>
                    <p>NodeJS</p>
                    </li>
                  </div>
                  </ul>
                  </div>
                <div className="d-flex justify-content-evenly flex-wrap">
                <ul className="flexul flex-item justify-start"> 
                <div className="contents-item">
                    <li>
                    <Image className="rounded" height="300" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736401_1280.png"></Image>
                    <p>Express.js</p>
                    </li>
                  </div>
                <div className="contents-item">
                    <li>
                    <Image className="rounded" height="300" src="https://freeiconshop.com/wp-content/uploads/edd/html-flat.png"></Image>
                    <p>HTML & CSS</p>
                    </li>
                  </div>
                  <div className="contents-item">
                    <li>
                    <Image className="rounded" src="https://download.logo.wine/logo/PHP/PHP-Logo.wine.png"></Image>
                    <p>PHP</p>
                    </li>
                  </div>
                  <div className="contents-item">
                    <li>
                    <Image className="rounded" src="https://upload.wikimedia.org/wikipedia/id/a/a9/MySQL.png"></Image>
                    <p>MySQL</p>
                    </li>
                  </div>
                    
                    </ul>
                    </div>
                    <div className="d-flex justify-content-evenly flex-wrap">
                <ul className="flexul flex-item justify-start"> 
                    <div className="contents-item">
                      <li>
                      <Image className="rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/800px-Visual_Studio_Code_1.35_icon.svg.png"></Image>
                      <p>Visual Studio Code</p>
                      </li>
                    </div>
                    <div className="contents-item">
                      <li>
                      <Image className="rounded" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"></Image>
                      <p>Git</p>
                      </li>
                    </div>
                    <div className="contents-item">
                      <li>
                      <Image className="rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"></Image>
                      <p>Github</p>
                      </li>
                    </div>
                    </ul>
                  </div>
              </div>
              <div id='Contact' className='container text-center card'>
              <h2 className='mt-2'>Contact</h2>
              <h5>Email : <a href="mailto:eizisana@gmail.com">eizisana@gmail.com </a></h5>
              <h5>Phone : 0822-4685-9192</h5>
              <div className="social-media">
              <a href="https://github.com/isanaID"><Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt=""></Image></a>
              <a href="https://www.linkedin.com/in/isanawib/"><Image src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" alt=""></Image></a>
              </div>
              </div>
              <footer className="bg-dark">
              <p className='text-light'>© 2021 Wibisana Putra Setyanegara</p>
              </footer>
                
                </div>
              </div>
        </div>
    );
}