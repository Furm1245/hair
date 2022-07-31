import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="mainC">
            <div>
                <h3>Links</h3>
                <Link to="/contact"><h5>Contact Us</h5></Link>
                <Link to="/terms-of-service">  <h5>Terms Of Service</h5></Link>
            </div>

            <div>
                <h3>Merch News</h3>
                <div>
                    <input placeholder='Email Address'></input>
                    <button>Subscribe</button>
                </div>
            </div>
            <div>
                <h6>© Copyright 2022,<br></br>Coming Soon</h6>
            </div>

        </footer>
    )
}

export default Footer