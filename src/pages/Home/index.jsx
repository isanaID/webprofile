import * as React from 'react';
import '../../assets/styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';
import NavComponent from '../Nav';

export default function Home() {
    return (
        <div className='bg-secondary bg-opacity-10'>
            <NavComponent />
            <div className="p-5 mb-4 bg-light rounded-3 jumbotron">
            <div className="container py-5 text-center">
              <p className="fs-5 fst-italic mt-5">Full Stack Developer</p>
              <h1 className="display-4">Wibisana Putra Setyanegara</h1>
              <form href="#contact">
              <button className="btn border border-dark btn-sm mt-5 shadow-sm text-white px-3 py-2">Contact Me</button>
              </form>
            </div>
          </div>
          <div>
            <div className="container text-center">
            <div className='card'>
            <h2>About me</h2>
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
          <div className="container align-self-center">
              <h4 className="text-center">Github Activity</h4>
              <div className="contents">
              <GitHubCalendar username="isanaID" />
            </div>
              </div>
              <div className="container align-self-center">
              <h3 className="text-center">Skills</h3>
              <div className="contents">
                <ul className="flexul flex-item justify-start"> 
                  <div className="contents-item">
                    <li>
                    <Image className="rounded" height="300" src="https://freeiconshop.com/wp-content/uploads/edd/html-flat.png"></Image>
                    <p>HTML & CSS</p>
                    </li>
                  </div>
                  <div className="contents-item">
                    <li>
                    <Image className="rounded" src="https://static.cdn-cdpl.com/source/b9a5514dc9fc5b70ff85311558a3cd27/PHP.png"></Image>
                    <p>PHP</p>
                    </li>
                  </div>
                  <div className="contents-item">
                    <li>
                    <Image className="rounded" src="https://www.duniailkom.com/wp-content/uploads/2015/11/JavaScript-featured-duniailkom.png"></Image>
                    <p>Javascript</p>
                    </li>
                  </div>
                  <div className="contents-item">
                    <li>
                    <Image className="rounded" src="https://icon-library.com/images/java-icon-png/java-icon-png-2.jpg"></Image>
                    <p>Java</p>
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
                    <div className="contents-item">
                      <li>
                      <Image className="rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/800px-Visual_Studio_Code_1.35_icon.svg.png"></Image>
                      <p>Visual Studio Code</p>
                      </li>
                    </div>
                    </ul>
                  </div>
              </div>
                <div id="contact" className="container align-self-center mt-5">
                <h3 className="fs-bold fs-2 text-center mb-3">Contact Me</h3>
                <div className="mx-auto formcontact">
                <form action="#" method="post">
                    <input className="form-control" type="text" name="name" placeholder="Name"></input>
                    <input className="form-control" type="text" name="email" placeholder="Email"></input>
                    <input className="form-control" type="text" name="subject" placeholder="Subject"></input>
                    <textarea rows="3" className="form-control" name="message" placeholder="Message"></textarea>
                    <button className="btn btn-warning border border-dark btn-sm mt-5 shadow-sm text-white px-3 py-2" type="submit" name="submit">Send</button>
                </form>
                </div>
                </div>
                </div>
              </div>
        </div>
    );
}