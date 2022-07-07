import { Link } from "react-router-dom"
import "./WhyMiratsComponent.css"

const WhyMiratsComponent = ({ data }) => {
	// console.log(data)
	return (
		<div className='why_mirats_component'>
			<div className='head'>
				<p className='title'>{data[0].title}</p>
				<p className='desc'>{data[0].desc}</p>
				{/* <button className='btn'>Contact us</button> */}
				<button className="btn">{data[0].btn}</button>
			</div>
			<div className='main'>
				{data[1].mainData.map((d, index) => {
					if (index % 2 === 0) {
						return (
							<section className='section'>
								<div className='title_desc'>
									<p>{d.title}</p>
									<p className="mainData_desc">{d.desc}</p>
									<Link to="#" className="learn_more_btn">{d.link}</Link>
									{/* <Link to='#' className='learn_more_btn'>
										Learn More
									</Link> */}
								</div>

								<div className='media'>
									<img
										src={d.media}
										alt=''
										width={450}
										height={260}
									/>
								</div>
							</section>
						)
					} else {
						return (
							<section className='section'>
								<div className='media'>
									<img
										src={d.media}
										alt=''
										width={450}
										height={260}
									/>
								</div>
								<div className='title_desc'>
									<p>{d.title}</p>
									<p className="mainData_desc">{d.desc}</p>
									<Link to="#" className="learn_more_btn">{d.link}</Link>
									{/* <Link to='#' className='learn_more_btn'>
										Learn More
									</Link> */}
								</div>
							</section>
						)
					}
				})}
			</div>
		</div>
	)
}

export default WhyMiratsComponent
