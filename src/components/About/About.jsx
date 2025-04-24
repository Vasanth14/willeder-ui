import React from 'react'
import './About.scss'

const About = () => {
    return (
        <section className='landingAbout'>
            <div className='abtsub'>
                <h4>Lorem</h4>
                <p>subtitle</p>
            </div>
            <div className='stackimages'>
                <div>
                    <div>
                        <img src="assets/images/slide1.png" alt="aboutimg" />
                    </div>
                    <div className='stackimgcont'>
                        <div>
                            <p>01</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="assets/images/slide2.png" alt="aboutimg" />
                    </div>
                    <div className='stackimgcont'>
                        <div>
                            <p>02</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="assets/images/slide3.png" alt="aboutimg" />
                    </div>
                    <div className='stackimgcont'>
                        <div>
                            <p>03</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='abtdiv'>
                <div className='aboutsec'>
                    <div>
                        <img src="assets/images/abtimg.png" alt="abtimg" className='abtimg' />
                    </div>
                    <div>
                        <div className='abtflex'>
                            <div className='abtcont'>
                                <div className='abtconth4div'>
                                    <h4>Lorem, ipsum.</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div>
                                <a href=""><p>Lorem, ipsum <span><img src="assets/images/arrow.svg" alt="arrow" className='arrowimg'/></span></p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About