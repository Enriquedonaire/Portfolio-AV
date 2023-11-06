// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./component/LandingPage";
// import VideoPlayer from "./component/VideoPlayer";
// import Contact from "./component/Contact";
// import Footer from "./component/Footer";
// import "./App.css"

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/video" element={<VideoPlayer />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faVimeoV, faLinkedinIn, faBehance, faPinterest } from '@fortawesome/free-brands-svg-icons';

import './assets/sass/style.scss';


function App() {
    return (
        <div>
            <header className="container-fluid">
                <div class="row alt-header">
                    <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div class="alt-img">
                            <img src="./img/logo.svg" width="36%" height="19%" alt="logo" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div class="nav-links">
                            <ul>
                                <li><a href="/">/ Work </a></li>
                                <li><a href="about.html">/ About</a></li>
                                <li><a href="contact.html">/ Contact</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </header>

            <section className="slider container-fluid">
                <div class="row all ">
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/1.jpg" width="100%" height="100%" alt='img' />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/11.png" width="100%" height="100%" alt='img' />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/8.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/88.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/9.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/99.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/10.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/1010.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/2.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/22.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/3.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/33.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/4.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/44.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/5.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/55.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/6.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/66.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/12.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/1212.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/13.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/1313.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/14.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/1414.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/15.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/1515.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/16.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <img src="./img/1616.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/17.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/1717.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/18.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/1818.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/19.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/1919.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/20.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/2020.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/21.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/2121.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/22.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/2222.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/23.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/2323.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/24.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/2424.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/25.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/2525.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/26.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/2626.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/27.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/2727.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/28.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/2828.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/29.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/2929.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/30.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <img src="./img/3030.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/31.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/3232.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                        <div class="item">
                            <div class="line-top"></div>
                            <img src="./img/32.jpg" width="100%" height="100%" alt="img" />
                            <div class="item-alt">
                                <div class="line-top"></div>
                                <img src="./img/3232.png" width="100%" height="100%" alt="img" />
                            </div>
                        </div>
                    </div>



                </div>
            </section>

            <section className="icons container-fluid">
                <div className="icon">
                <a className="i" href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a className="i" href="/"><FontAwesomeIcon icon={faVimeoV} /></a>
                    <a className="i" href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a className="i" href="/"><FontAwesomeIcon icon={faBehance} /></a>
                    <a className="i" href="/"><FontAwesomeIcon icon={faPinterest} /></a>
                </div>
            </section>

            <footer className="container-fluid">
                <p>Copyright © 2023 Enrique Donaire. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default App;





