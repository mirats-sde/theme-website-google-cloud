import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useState } from "react";
import './Footer.css';

function Footer() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    }

    return(
        <div>
             {/* nav links */}
        <section className="nav-links">
            <ul className="why-google">
                <h3>Why Google</h3>
                <li><a href="www.google.com">Choosing Google Cloud</a></li>
                <li><a href="www.google.com">Choosing Google Cloud</a></li>
                <li><a href="www.google.com">Choosing Google Cloud</a></li>
                <li><a href="www.google.com">Choosing Google Cloud</a></li>
                <li><a href="www.google.com">Choosing Google Cloud</a></li>
            </ul>

            <ul className="Products and pricing">
                <h3>Products and pricing</h3>
                <li><a href="www.google.com">Google Cloud Pricing</a></li>
                <li><a href="www.google.com">Google Cloud Pricing</a></li>
                <li><a href="www.google.com">Google Cloud Pricing</a></li>
                <li><a href="www.google.com">Google Cloud Pricing</a></li>
            </ul>

            <ul className="solutions">
                <h3>Solutions</h3>
                <li><a href="www.google.com">Databases</a></li>
                <li><a href="www.google.com">Databases</a></li>
                <li><a href="www.google.com">Databases</a></li>
                <li><a href="www.google.com">Databases</a></li>
                <li><a href="www.google.com">Databases</a></li>
                <li><a href="www.google.com">Databases</a></li>
            </ul>

            <ul className="resources">
                <h3>Resources</h3>
                <li><a href="www.google.com">Databases</a></li>
                <li><a href="www.google.com">Databases</a></li>
                <li><a href="www.google.com">Databases</a></li>
                <li><a href="www.google.com">Databases</a></li>
                <li><a href="www.google.com">Databases</a></li>
                <li><a href="www.google.com">Databases</a></li>
            </ul>

            <ul className="engage">
                <h3>Engage</h3>
                <li><a href="www.google.com">Databases</a></li>
                <li><a href="www.google.com">Databases</a></li>
                <li><a href="www.google.com">Databases</a></li>
                <li><a href="www.google.com">Databases</a></li>
                <li><a href="www.google.com">Databases</a></li>
                <li><a href="www.google.com">Databases</a></li>
            </ul>
        </section>

        {/* footer */}
        <footer>
            <ul className="footer-links">
                <li>About Google </li> 
                <span className="seperate">|</span>
                <li>Privacy</li>
                <span className="seperate">|</span>
                <li>Site terms</li>
                <span className="seperate">|</span>
                <li>Google Cloud</li>
            </ul>

            <div className="newsletter">
                <span>Sign up for the Google Cloud newsletter</span>
                <div className="newsletter-btn">
                    <button className="subscribe">Subscribe</button>
                </div>

                <div className="footer-language">
                    <button id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>English <i class="fas fa-sort-down"></i>
                    </button>
                </div>

        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            >
            <MenuItem onClick={handleClose}>Chinese</MenuItem>
            <MenuItem onClick={handleClose}>Japanese</MenuItem>
            <MenuItem onClick={handleClose}>Korean</MenuItem>
            <MenuItem onClick={handleClose}>German</MenuItem>
        </Menu>

            </div>    
        </footer>
        </div>
    )
}

export default Footer;