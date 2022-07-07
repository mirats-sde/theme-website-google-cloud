// import {Link} from 'react-router-dom';
// import Dropdown from '../Dropdown/Dropdown';
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useState } from "react";
import { ClickAwayListener } from "@mui/material"
// import logo from "../../assets/logo.png"
// import "./Header.css";
import "./Header.css"
import WhyMirats from "../why-mirats-dropdown/WhyMirats";
import SolutionsDropDown from "../sidebar-drop-down/SidebarDropDown"
import PricingDropDown from "../pricing-drop-down/PricingDropDown"


function Header() {
    const [openWhyMirats, setOpenWhyMirats] = useState(null)
	const [openSolutions, setOpenSolutions] = useState(null)
	const [openProducts, setOpenProducts] = useState(null)
	const [openPricing, setOpenPricing] = useState(null)
	const [dropdownFor, setDropdownFor] = useState()

	var whyMiratsPopperId = openWhyMirats ? "why-mirats-popper" : undefined
	var solutionPopperId = openSolutions ? "solutions-popper" : undefined
	var productsPopperId = openProducts ? "solutions-popper" : undefined
	var pricingPopperId = openPricing ? "pricing-popper" : undefined

        // hamburger menu
        const [hamburgerOpen, setHamburgerOpen] = useState(false);
        const togglehamburger = () => {
            setHamburgerOpen(!hamburgerOpen)
            if(hamburgerOpen){
            document.querySelector("nav").style.display = "none"
            document.querySelector(".hamburger").style.display = "none"
            }
            else {
            document.querySelector("nav").style.display = "block"
            document.querySelector(".hamburger").style.display = "block"
            }
        }

        const [hamburgerClose, setHamburgerClose] = useState(false);
        const toggleClose = () => {
            setHamburgerClose(!hamburgerOpen)
            if(hamburgerClose ) {
                document.querySelector("nav").style.display = "block"
                document.querySelector(".hamburger").style.display = "block"
            }
            else {
                document.querySelector("nav").style.display = ""
                document.querySelector(".hamburger").style.display = "none";
            }
        }

        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        }

    return <header className="navbar">

        <div className="hamburger-open" onClick={togglehamburger}>
            <i class="fas fa-bars"></i>
        </div>

        {/* hamburger menu */}
        <div className="hamburger">
            <div className="hamburger-menu">
                <i class="far fa-times-circle" onClick={toggleClose}></i>
                <h2 className="hamburger-title">Mirats Insights</h2>
            </div>
        </div>

        <h2 className="logo">Mirats Insights</h2>
        {/* <img src="../../assets/logo.png" alt="" className="logo" /> */}
        <nav>
            <ul className='nav-items'>
                <li className="nav-dropdown">
                <ClickAwayListener onClickAway={() => setOpenWhyMirats(null)}>
					<div>
						<p
							aria-describedby={whyMiratsPopperId}
							onClick={e =>
								setOpenWhyMirats(
									openWhyMirats ? null : e.currentTarget
								)
							}
						>
							Why Mirats
						</p>
						<WhyMirats
							id={whyMiratsPopperId}
							open={openWhyMirats}
							anchorEl={openWhyMirats}
							setOpenWhyMirats={setOpenWhyMirats}
						/>
					</div>
				</ClickAwayListener>
                    <i class="fas fa-chevron-down"></i>
                </li>

                <li className="nav-dropdown">
                <ClickAwayListener onClickAway={() => setOpenSolutions(null)}>
                <div>
                    <p
                        aria-describedby={solutionPopperId}
                        onClick={e => {
                            setDropdownFor(true)
                            setOpenSolutions(
                                openSolutions ? null : e.currentTarget
                            )
                        }}
                    >
                        Solutions
                    </p>
                    <SolutionsDropDown
                        id={solutionPopperId}
                        open={openSolutions}
                        anchorEl={openSolutions}
                        dropdownFor={dropdownFor}
                        setOpenSolutions={setOpenSolutions}
                    />
                </div>
            </ClickAwayListener>
                    <i class="fas fa-chevron-down"></i>
                </li>
                <li className="nav-dropdown">
                <ClickAwayListener onClickAway={() => setOpenProducts(null)}>
					<div>
						<p
							aria-describedby={productsPopperId}
							onClick={e => {
								setDropdownFor(false)
								setOpenProducts(
									openProducts ? null : e.currentTarget
								)
							}}
						>
							Products
						</p>
						<SolutionsDropDown
							id={productsPopperId}
							open={openProducts}
							anchorEl={openProducts}
							dropdownFor={dropdownFor}
							setOpenProducts={setOpenProducts}
						/>
					</div>
				</ClickAwayListener>   
                    <i class="fas fa-chevron-down"></i>
                </li>

                <li className="nav-dropdown">
                <ClickAwayListener onClickAway={() => setOpenPricing(null)}>
					<div>
						<p
							aria-describedby={pricingPopperId}
							onClick={e => {
								setOpenPricing(
									openPricing ? null : e.currentTarget
								)
							}}
						>
							Pricing
						</p>
						<PricingDropDown
							id={pricingPopperId}
							open={openPricing}
							anchorEl={openPricing}
							setOpenPricing={setOpenPricing}
						/>
					</div>
				</ClickAwayListener>
                    
                    <i class="fas fa-chevron-down"></i>
                </li>

                <li className="nav-dropdown">
                    Getting Started
                    <i class="fas fa-chevron-down"></i>
                </li>
            </ul>
        </nav>
        <div className="search">
        <i class="fas fa-search"></i>
        </div>

        {/* docs support */}
        <div className='docs-support'>
            <ul>
                <li><a href='www.google.com'>Docs</a></li>
                <li><a href='www.google.com'>Support</a></li>
            </ul>
        </div>

        <div className='nav-btns'>
            <div className='language'> 
            <button 
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>English <i class="fas fa-sort-down"></i></button>
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

            <div className='console'>
            <button><a href="www.google.com">Console</a></button>
            </div>
        </div>      
    </header>
}

export default Header;