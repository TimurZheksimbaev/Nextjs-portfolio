"use client";
import '../styles/Hero.css'
import portfolioImage from "../assets/portfolioimage.jpeg"
import Image from "next/image"
import Link  from 'next/link';
import Portfolio from './portfolio/page';
import TechStack from './techstack/page';

export default function Home() {
  return (
    <div className='hero-and-projects'>
        <div className='hero-and-tech-stack'>
            <div className="portfolio-body">
                <header className="header-section">
                    <label className="name">Timur <span className="span">Zheksimbaev</span></label>
                    <ul className="menu">
                        <li><Link href="/">About me</Link></li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/certificates">Certificates</Link></li>
                        <li><Link href="/">Contacts</Link></li>
                        <li><Link href="/comic">Get Comic</Link></li>
                    </ul>
                </header>
            
                <main className="hero">
                    <div className="hero-content">
                        <h1>My name is Timur</h1>
                        <h2>I am a DevOps engineer</h2>
                        <p>Student at Innopolis University on Cybersecurity track. Currently have internship on DevOps engineering position. 
                            I am interested in Fullstack development, DevOps, Blockchain and System design. 
                            Checkout all of my projects on Github.
                        </p>
                    </div>
                    <div className="image-contacts">
                        <Image className='photo' src={portfolioImage} alt="My Photo" width={500} />
                        <section className="contacts">
                            <h3 className="contacts-text">Contact me</h3>
                            <div className="contact-item">
                                <a href="https://t.me/mastehorny1">
                                    <img width="20" src="https://static-00.iconduck.com/assets.00/telegram-icon-2048x2048-ns3mbgh4.png" /> 
                                </a>
                            </div>
                            
                            <div className="contact-item">
                                <a href="https://github.com/TimurZheksimbaev">
                                    <img width="20" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" /> 
                                </a>
                            </div>
                            
                            <div className="contact-item">
                                <a href="mailto:tmrzheksimbaev04@gmail.com">
                                    <img width="20" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" /> 
                                </a>
                            </div>
                        </section> 
                    </div>
                </main>
            </div>
            <TechStack />
        </div>
        <Portfolio />
    </div>
    
)
}
