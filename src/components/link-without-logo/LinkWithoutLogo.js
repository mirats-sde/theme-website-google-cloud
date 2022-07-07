import { Link } from "react-router-dom"
import "./LinkWithoutLogo.css"
const LinkWithoutLogo = ({ title, desc }) => {
	return (
		<div className='nav_link_without_logo'>
			<Link className='link' to='#'>
				<span>{title}</span>
				<span>{desc}</span>
			</Link>
		</div>
	)
}

export default LinkWithoutLogo;
