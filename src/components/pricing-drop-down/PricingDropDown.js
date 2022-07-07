import { Button, Popper } from "@mui/material"
import LinkWithoutLogo from "../link-without-logo/LinkWithoutLogo"
import { AiOutlineClose } from "react-icons/ai"
import "./PricingDropDown.css"
import { useEffect, useState } from "react"

const pricing = [
	{
		title: "Pricing overview",
		desc: "Pay only for what you use with no lock-in.",
	},
	{
		title: "Price list",
		desc: "Get pricing details for individual products.",
	},
	{
		title: "Pricing calculator",
		desc: "Calculate your cloud saving",
	},
	{
		title: "Pricing overview",
		desc: "Pay only for what you use with no lock-in",
	},
]

const PricingDropDown = ({ id, open, anchorEl, setOpenPricing }) => {
	return (
		<>
			<Popper id={id} open={open} anchorEl={anchorEl}>
				<div className='pricing_dropdown'>
					<i
						className='close_dropdown'
						onClick={() => setOpenPricing(null)}
					>
						<AiOutlineClose />
					</i>
					<div className='left'>
						<p className='title'>
							Save money with our transperent approach to pricing
						</p>
						<p className='desc'>
							Google Cloud's pay-as-you-go pricing offers
							automatic savings based on monthly usage and
							discounted rates for prepaid resources. Contact us
							today to get a quote.
						</p>
						<Button variant='text' color='error'>
							Request a quote
						</Button>
					</div>
					<div className='middle'>
						<p className='title'>google cloud</p>
						<div className='pricings'>
							{pricing.map((pricing, index) => {
								return (
									<LinkWithoutLogo
										title={pricing.title}
										desc={pricing.desc}
									/>
								)
							})}
						</div>
					</div>
					<div className='right'></div>
				</div>
			</Popper>
		</>
	)
}

export default PricingDropDown
