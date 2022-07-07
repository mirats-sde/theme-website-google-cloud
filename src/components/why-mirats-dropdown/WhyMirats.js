import { Button, Popper } from "@mui/material"
import { AiOutlineClose } from "react-icons/ai"
import LinkWithoutLogo from "../link-without-logo/LinkWithoutLogo"
import "./WhyMirats.css"

const keyBenefits = [
	{
		title: "Overview",
		desc: "Top reasons businesses choose us.",
	},
	{
		title: "Data Cloud",
		desc: "Unify data across your organization",
	},
	{
		title: "Multi Cloud",
		desc: "Run Your apps wherever you need them",
	},
	{
		title: "Multi Cloud",
		desc: "Run Your apps wherever you need them",
	},
	{
		title: "Multi Cloud",
		desc: "Run Your apps wherever you need them",
	},
	{
		title: "Multi Cloud",
		desc: "Run Your apps wherever you need them",
	},
	{
		title: "Multi Cloud",
		desc: "Run Your apps wherever you need them",
	},
	{
		title: "Multi Cloud",
		desc: "Run Your apps wherever you need them",
	},
]

const resources = [
	{
		title: "Events",
		desc: "Browse upcoming Google Cloud events.",
	},
	{
		title: "Blog",
		desc: "Read our latest product news and stories.",
	},
	{
		title: "Customer Stories",
		desc: "Explore case studies and videos.",
	},
	{
		title: "Analyst reports",
		desc: "Read what industry analysts say about us.",
	},
]

const WhyMirats = ({ id, open, anchorEl, setOpenWhyMirats }) => {
	return (
		<>
			<Popper id={id} open={open} anchorEl={anchorEl}>
				<div className='why_mirats_links_dropdown'>
					<i
						className='close_dropdown'
						onClick={() => setOpenWhyMirats(null)}
					>
						<AiOutlineClose />
					</i>
					<div className='left'>
						<p className='title'>
							Discover why leading buisiness choose mirats
							insights
						</p>
						<p className='desc'>
							Whether your business is early in its journey or
							well on its way to digital transformation, Google
							Cloud can help you solve your toughest challenges.
						</p>
						<Button variant='text' color='error'>
							Learn More
						</Button>
					</div>
					<div className='middle'>
						<p className='title'>Key benefits</p>
						<div className='key_benefits'>
							{keyBenefits.map((benefit, index) => {
								return (
									<LinkWithoutLogo
										title={benefit.title}
										desc={benefit.desc}
									/>
								)
							})}
						</div>
					</div>
					<div className='right'>
						<p className='title'>Resource</p>
						<div className='resources'>
							{resources.map((resource, index) => {
								return (
									<LinkWithoutLogo
										title={resource.title}
										desc={resource.desc}
										key={index}
									/>
								)
							})}
						</div>
					</div>
				</div>
			</Popper>
		</>
	)
}

export default WhyMirats
