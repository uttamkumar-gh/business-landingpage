import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import linkedinIcon from '../../assets/icons/linkedin-icon.svg'
import instagramIcon from '../../assets/icons/instagram-icon.svg'
import facebookIcon from '../../assets/icons/facebook-icon.svg'
import twitterIcon from '../../assets/icons/twitter-icon.svg'
import reactIcon from '../../assets/icons/react-icon.svg'
import wordpressIcon from '../../assets/icons/wordpress-icon.svg'
import wixIcon from '../../assets/icons/wix-icon.svg'
import Button from '../Button/Button'

function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer-about-social-links">
                <div className="ft-logo-name">
                    <Link to='/'>Business</Link>
                </div>
                <div className="ft-about-text">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at</p>
                </div>
                <div className="ft-social-links">
                    <Link to='/' className='linkedin'>
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </Link>
                    <Link to='/' className='instagram'>
                        <img src={instagramIcon} alt="Instagram" />
                    </Link>
                    <Link to='/' className='facebook'>
                        <img src={facebookIcon} alt="Facebook" />
                    </Link>
                    <Link to='/' className='twitter'>
                        <img src={twitterIcon} alt="Twitter" />
                    </Link>
                </div>
            </div>
            <div className="footer-services">
                <div className="ft-heading">
                    <h4>Services</h4>
                    <div className="ft-line"></div>
                </div>
                <div className="ft-services-list">
                    <Link to='/'>Web Design/Development</Link>
                    <Link to='/'>App Development</Link>
                    <Link to='/'>UI/UX Design</Link>
                    <Link to='/'>HubSpot Integration</Link>
                    <Link to='/'>Email Marketing</Link>
                    <Link to='/'>Website Migration</Link>
                </div>
            </div>
            <div className="footer-career">
                <div className="ft-heading">
                    <h4>Career</h4>
                    <div className="ft-line"></div>
                </div>
                <div className="ft-career-list">
                    <div className="ft-career-icon">
                        <img src={reactIcon} alt="React" />
                    </div>
                    <div className="ft-career-name-exp">
                        <Link to='/'>ReactJs Dev.</Link>
                        <span>1-5 Years of Exp.</span>
                    </div>
                </div>
                <div className="ft-career-list">
                    <div className="ft-career-icon">
                        <img src={wordpressIcon} alt="WordPress" />
                    </div>
                    <div className="ft-career-name-exp">
                        <Link to='/'>Wordpress Dev.</Link>
                        <span>1-5 Years of Exp.</span>
                    </div>
                </div>
                <div className="ft-career-list">
                    <div className="ft-career-icon">
                        <img src={wixIcon} alt="Wix" />
                    </div>
                    <div className="ft-career-name-exp">
                        <Link to='/'>Wix Dev.</Link>
                        <span>1-5 Years of Exp.</span>
                    </div>
                </div>
            </div>
            <div className="footer-subscribe">
                <div className="ft-heading">
                    <h4>Subscribe Us</h4>
                    <div className="ft-line"></div>
                </div>
                <div className="ft-subscribe-text">
                    <p>It is a long established fact that a reader will be distracted by the readable </p>
                </div>
                <div className="ft-subscribe-form">
                    <form>
                        <input type="email" name="email" placeholder='Email' />
                        <Button>Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
