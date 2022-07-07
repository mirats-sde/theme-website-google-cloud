import "./SidebarDropDown.css"
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai"
import { MdOutlineScience } from "react-icons/md"
import { Link } from "react-router-dom"
import { Popper } from "@mui/material"
import { GrLinkNext } from "react-icons/gr"
import { SiCoronaengine } from "react-icons/si"
import { BsFillCloudUploadFill } from "react-icons/bs"
import { useEffect, useState } from "react"

const solutions = [
	{
		logo: <AiOutlineShoppingCart />,
		title: "Retail",
		desc: "Analytics and collaboration tools for the retail value chain.",
	},
	{
		logo: <MdOutlineScience />,
		title: "Healthcare and life science",
		desc: "Health-specific solutions to enhance the patient experience.",
	},
	{
		logo: <AiOutlineShoppingCart />,
		title: "Retail",
		desc: "Analytics and collaboration tools for the retail value chain.",
	},
	{
		logo: <MdOutlineScience />,
		title: "Healthcare and life science",
		desc: "Health-specific solutions to enhance the patient experience.",
	},
	{
		logo: <AiOutlineShoppingCart />,
		title: "Retail",
		desc: "Analytics and collaboration tools for the retail value chain.",
	},
	{
		logo: <MdOutlineScience />,
		title: "Healthcare and life science",
		desc: "Health-specific solutions to enhance the patient experience.",
	},
	{
		logo: <AiOutlineShoppingCart />,
		title: "Retail",
		desc: "Analytics and collaboration tools for the retail value chain.",
	},
	{
		logo: <MdOutlineScience />,
		title: "Healthcare and life science",
		desc: "Health-specific solutions to enhance the patient experience.",
	},
]

const solutionsSidebar = [
	"Industry Solutions",
	"Application Modernization",
	"Artificial Intelligence",
	"Buisiness Application Platform",
	"Datebase",
]

const products = [
	{
		logo: <SiCoronaengine />,
		title: "Compute Engine",
		desc: "Virtual machines running in Google’s data center.",
	},
	{
		logo: <BsFillCloudUploadFill />,
		title: "Cloud Storage",
		desc: "Object storage that’s secure, durable, and scalable.",
	},
	{
		logo: <SiCoronaengine />,
		title: "Compute Engine",
		desc: "Virtual machines running in Google’s data center.",
	},
	{
		logo: <BsFillCloudUploadFill />,
		title: "Cloud Storage",
		desc: "Object storage that’s secure, durable, and scalable.",
	},
	{
		logo: <SiCoronaengine />,
		title: "Compute Engine",
		desc: "Virtual machines running in Google’s data center.",
	},
	{
		logo: <BsFillCloudUploadFill />,
		title: "Cloud Storage",
		desc: "Object storage that’s secure, durable, and scalable.",
	},
	{
		logo: <SiCoronaengine />,
		title: "Compute Engine",
		desc: "Virtual machines running in Google’s data center.",
	},
	{
		logo: <BsFillCloudUploadFill />,
		title: "Cloud Storage",
		desc: "Object storage that’s secure, durable, and scalable.",
	},
	{
		logo: <SiCoronaengine />,
		title: "Compute Engine",
		desc: "Virtual machines running in Google’s data center.",
	},
]

const productsSidebar = [
	"Featured Products",
	"AI and machine learning",
	"API Management",
	"Compute",
	"Containers",
	"Data Analytics",
]

const SidebarDropDown = ({
	id,
	open,
	anchorEl,
	dropdownFor,
	setOpenSolutions,
	setOpenProducts,
}) => {
	return (
		<>
			<Popper id={id} open={open} anchorEl={anchorEl}>
				<div className='sidebar_dropdown'>
					<i
						className='close_dropdown'
						onClick={() => {
							dropdownFor
								? setOpenSolutions(null)
								: setOpenProducts(null)
						}}
					>
						<AiOutlineClose />
					</i>
					<div className='sidebar'>
						{dropdownFor
							? solutionsSidebar.map((option, index) => {
									console.log(option)
									return <p key={index}>{option}</p>
							  })
							: productsSidebar.map((option, index) => {
									return <p key={index}>{option}</p>
							  })}
					</div>
					<div className='main_portion'>
						{dropdownFor ? (
							<>
								<p className='title'>
									Industry Solutions &nbsp; <GrLinkNext />
								</p>
								<p className='desc'>
									Reduce cost, increase operational agility,
									and capture new market opportunities.
								</p>
							</>
						) : (
							<p
								className='title'
								style={{ marginBottom: "2.5rem" }}
							>
								Featured Products
							</p>
						)}

						{dropdownFor ? (
							<div className='solutions'>
								{solutions.map((solution, index) => {
									return (
										<LinkWithLogo
											logo={solution.logo}
											title={solution.title}
											desc={solution.desc}
											key={index}
										/>
									)
								})}
							</div>
						) : (
							<div className='products'>
								{products.map((solution, index) => {
									return (
										<LinkWithLogo
											logo={solution.logo}
											title={solution.title}
											desc={solution.desc}
											key={index}
										/>
									)
								})}
							</div>
						)}
					</div>
				</div>
			</Popper>
		</>
	)
}

const LinkWithLogo = ({ logo, title, desc }) => {
	return (
		<div className='nav_link_with_logo'>
			{logo ? <i>{logo}</i> : null}
			<Link className='link' to='#'>
				<span>{title}</span>
				<span>{desc}</span>
			</Link>
		</div>
	)
}

export default SidebarDropDown
