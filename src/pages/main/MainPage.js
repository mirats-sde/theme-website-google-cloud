import Header from "../../components/header/Header";
// import SubHeader from "../../components/SubHeader";
import SubHeader from "../../components/header/SubHeader";
import './mainPage.css';
import Card from "../../components/Cards/Cards";
import StatsCard from "../../components/StatsCard/StatsCard";
import CustomerCard from "../../components/CustomerCard/CustomerCard";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Footer from "../../components/Footer/Footer";

const data = [         
    {
        img:"https://www.gstatic.com/bricks/image/4836174ae9f0e2b9f4013f4efe6239d0757e32b91e4df935f7aa711918d324bd.svg",
        title: "Infrastructure modernization",
        desc:"Modernize your cloud infrastructure and run critical workloads like VMware, SAP, Oracle, and Windows natively on Google Cloud."
    },
    {
        img:"https://www.gstatic.com/bricks/image/e53c9a2aaaaef8f49dc9745efc9794a3e057fd75121af3d30deedb91489f9827.svg",
        title: "Databases",
        desc:"Modernize your cloud infrastructure and run critical workloads like VMware, SAP, Oracle, and Windows natively on Google Cloud."
    },
    {
        img:"https://www.gstatic.com/bricks/image/4836174ae9f0e2b9f4013f4efe6239d0757e32b91e4df935f7aa711918d324bd.svg",
        title: "Infrastructure modernization",
        desc:"Modernize your cloud infrastructure and run critical workloads like VMware, SAP, Oracle, and Windows natively on Google Cloud."
    },
    {
        img:"https://www.gstatic.com/bricks/image/4836174ae9f0e2b9f4013f4efe6239d0757e32b91e4df935f7aa711918d324bd.svg",
        title: "Infrastructure modernization",
        desc:"Modernize your cloud infrastructure and run critical workloads like VMware, SAP, Oracle, and Windows natively on Google Cloud."
    },
    {
        img:"https://www.gstatic.com/bricks/image/4836174ae9f0e2b9f4013f4efe6239d0757e32b91e4df935f7aa711918d324bd.svg",
        title: "Infrastructure modernization",
        desc:"Modernize your cloud infrastructure and run critical workloads like VMware, SAP, Oracle, and Windows natively on Google Cloud."
    },
    {
        img:"https://www.gstatic.com/bricks/image/4836174ae9f0e2b9f4013f4efe6239d0757e32b91e4df935f7aa711918d324bd.svg",
        title: "Infrastructure modernization",
        desc:"Modernize your cloud infrastructure and run critical workloads like VMware, SAP, Oracle, and Windows natively on Google Cloud."
    }
]

// statistics card
    const statsData = [
        {
            stats: '8/ top 10',
            statsTitle: 'Telecommunications companies'
        },

        {
            stats: '7/ top 10',
            statsTitle: 'Telecommunications companies'
        },

        {
            stats: '6/ top 10',
            statsTitle: 'Telecommunications companies'
        },

        {
            stats: '5/ top 10',
            statsTitle: 'Telecommunications companies'
        },

        {
            stats: '8/ top 10',
            statsTitle: 'Telecommunications companies'
        },

        {
            stats: '9/ top 10',
            statsTitle: 'Telecommunications companies'
        },
        {
            stats: '9/ top 10',
            statsTitle: 'Telecommunications companies'
        },
        {
            stats: '9/ top 10',
            statsTitle: 'Telecommunications companies'
        },
]

// carousel
let items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        // img: 'https://picsum.photos/100/100'
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    },
    {
        name: "Random Name #3",
        description: "Google Cloud!"
    },
    {
        name: "Random Name #4",
        description: "Hello World!"
    },
]

// customer cards
const customerCard = [
    {
        customerImg: "https://lh3.googleusercontent.com/tHZ1Ws8TngqOzsxkqwDwBH5qDDMthGGKrMjUGf_w70vWmgwgnK18hTnYeRwUgx6pqKGv1Z9ujD9xGg=e14-rj-sc0xffffff-h45-w110",
    },
    {
        customerImg: 'https://lh3.googleusercontent.com/tHZ1Ws8TngqOzsxkqwDwBH5qDDMthGGKrMjUGf_w70vWmgwgnK18hTnYeRwUgx6pqKGv1Z9ujD9xGg=e14-rj-sc0xffffff-h45-w110',
    },
    {
        customerImg: "https://lh3.googleusercontent.com/tHZ1Ws8TngqOzsxkqwDwBH5qDDMthGGKrMjUGf_w70vWmgwgnK18hTnYeRwUgx6pqKGv1Z9ujD9xGg=e14-rj-sc0xffffff-h45-w110",
    },
    {
        customerImg: "https://lh3.googleusercontent.com/tHZ1Ws8TngqOzsxkqwDwBH5qDDMthGGKrMjUGf_w70vWmgwgnK18hTnYeRwUgx6pqKGv1Z9ujD9xGg=e14-rj-sc0xffffff-h45-w110",
    },
    {
        customerImg: "https://lh3.googleusercontent.com/tHZ1Ws8TngqOzsxkqwDwBH5qDDMthGGKrMjUGf_w70vWmgwgnK18hTnYeRwUgx6pqKGv1Z9ujD9xGg=e14-rj-sc0xffffff-h45-w110",
    },
    {
        customerImg: "https://lh3.googleusercontent.com/tHZ1Ws8TngqOzsxkqwDwBH5qDDMthGGKrMjUGf_w70vWmgwgnK18hTnYeRwUgx6pqKGv1Z9ujD9xGg=e14-rj-sc0xffffff-h45-w110",
    },
    {
        customerImg: "https://lh3.googleusercontent.com/tHZ1Ws8TngqOzsxkqwDwBH5qDDMthGGKrMjUGf_w70vWmgwgnK18hTnYeRwUgx6pqKGv1Z9ujD9xGg=e14-rj-sc0xffffff-h45-w110",
    },
]

function Item(props) {
    return(
        <Paper className="carousel-wrapper">
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img alt="">{props.item.img}</img>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

// main page
function MainPage() {
    return <div className="container">
        <Header/>
        <SubHeader/>

        <div className="main-content">

        <main className="showcase">
            <div className="showcase-text">
                <h1 className="title">Accelerate your transformation with Google Cloud</h1>
                <p className="showcase-para">
                Build apps faster, make smarter business decisions, and connect people anywhere.
                </p>

                <button className="showcase-btn">Get Started For Free</button>
            </div>

            <div className="carousel">
                <Carousel>
                    {
                        items.map((item,i) => {
                            return <Item key={i} item={item}/>
                        })
                    }
                </Carousel>
            </div>

        </main>

        <section className="showcase-info">
            <div className="info">
                <span>Develop new apps and experiences faster</span>
                <p>Avoid vendor lock-in and speed up development with Google Cloud’s commitment to open source, multicloud, and hybrid cloud.</p>
            </div>

            <div className="info">
                <span>Develop new apps and experiences faster</span>
                <p>Avoid vendor lock-in and speed up development with Google Cloud’s commitment to open source, multicloud, and hybrid cloud.</p>
            </div>

            <div className="info">
                <span>Develop new apps and experiences faster</span>
                <p>Avoid vendor lock-in and speed up development with Google Cloud’s commitment to open source, multicloud, and hybrid cloud.</p>
            </div>

            <div className="info">
                <span>Develop new apps and experiences faster</span>
                <p>Avoid vendor lock-in and speed up development with Google Cloud's commitment to open source, multicloud, and hybrid cloud.</p>
            </div>
        </section>

        {/* statistics */}
        <div className="statistics">
            <h1>Leading companies trust Google Cloud</h1>
            <section className="stats-wrapper">
                {
                    statsData.map(s => (
                        <StatsCard stats={s.stats} statsTitle={s.statsTitle}/>
                    ))
                }
            </section>
            
            <div className="stats-btn">
                    <button>See industry solutions</button>
            </div>
        </div>


        {/* customer cards */}
        <section className="customer-stories">
                <div className="customer-wrapper">
                    {
                        customerCard.map(c =>{
                            return (
                            <CustomerCard customerImg={c.customerImg}/>)
                        })
                    }
                </div>

                <div className="customer-btn">
                    <button>See customer stories</button>
                </div>
        </section>

        {/* map with info card */}
        <div className="map">
        <h1 className="map-title">200+ countries & territories, 88 zones, and counting</h1>
        <section className="map-statistics">  
            <div className="map-key">
            <div className="map-card">
                <div className="card-container">
                <h2>29</h2>
                <h5>regions</h5>
                </div>
                <div className="card-container">
                <h2>29</h2>
                <h5>zones</h5>
                </div>
                <div className="card-container">
                <h2>29</h2>
                <h5>network edge locations</h5>
                </div>
                <div className="card-container">
                {/* <span className="available-countries">Available in</span> */}
                <h2>29 +</h2>
                <h5>countries & territories</h5>
                </div>
                {/* <p className="learn-more"><a href="www.google.com">Learn about our infrastructure</a></p> */}
            </div>
            <div className="key-container">
                <h3>KEY</h3>
                    <ul className="key">
                        <li>
                            <span className="icon current-network"></span>
                            <span>Current Network</span>
                        </li>
                        <li>
                            <span className="icon submarine"></span>
                            <span>Submarine Cable investments</span>
                        </li>
                        <li>
                        <span className="circle region"></span>
                            <span>Current region with 3 zones</span>
                        </li>
                        <li>
                        <span className="circle region"></span>
                            <span>Current region with 3 zones</span>
                        </li>
                        {/* <li>
                        <span className="circle region"></span>
                            <span>Current region with 3 zones</span>
                        </li> */}
                    </ul>
            </div>
            </div>

            <div className="map-info">
                <div className="map-img">
                    <img src="https://media.istockphoto.com/vectors/world-map-vector-id1220187238?k=20&m=1220187238&s=612x612&w=0&h=9Ew8z1UmJJoeuivDl7qKgPzw8NrMd7os4SmsA5YQm34=" alt=""></img>
                </div>
                <div className="map-available">
                    <span>COMING SOON! Google Cloud will continue expanding into the following regions: Doha (Qatar), Paris (France), Milan (Italy), Madrid (Spain), Turin (Italy), Columbus (US), and Berlin (Germany).</span>
                </div>
            </div>
        </section>
        </div>

        {/* services offered cards */}

        <div className="cards">    
        <h1>Solve your toughest business challenges here</h1>     
        <section className="card-wrapper">
           {
               data.map(d => (
                    <Card img={d.img} title={d.title} description={d.desc}/> 
               ))
           }   
        </section>
        </div> 

        {/* google cloud banner */}
        <div className="banner-links">
        <section className="cloud-banner">
            <h1>Take the next step</h1>
            <div className="project">
                <p>Start your next project, explore interactive tutorials, and manage your account.</p>
                <button className="project-btn">
                    Try Google Cloud free
                </button>
            </div>
            <div className="contact-sales">
                <p>Tell us what you're solving for. A Google expert will help you find the best solution.</p>
                <button className="contact-btn">
                    Contact Sales
                </button>
            </div>
        </section>

           {/* reports, news, resources */}
        <section className="reports">
                <ul className="analyst-report">
                    <h3>Analyst reports</h3>
                    <li><a href="www.google.com">GKE scores 92/100 in Gartner's Public Cloud Kubernetes Services Solution Scorecard</a></li>
                    <li><a href="www.google.com">Google Cloud is named a Leader in The Forrester Wave™: Streaming Analytics, Q2 2021</a></li>
                    <li><a href="www.google.com">The Forrester Wave™: Unstructured Data Security Platforms, Q2 2021 report</a></li>
                </ul>

                <ul className="news">
                    <h3>Latest News</h3>
                    <li><a href="www.google.com">What's new with Google Cloud</a></li>
                    <li><a href="www.google.com">How Google Cloud is enabling vaccine equity</a></li>
                    <li><a href="www.google.com">How Google Cloud is enabling vaccine equity</a></li>
                    <li><a href="www.google.com">See more blog posts</a></li>
                </ul>

                <ul className="resources">
                    <h3>Resources</h3>
                    <li><a href="www.google.com">Training</a></li>
                    <li><a href="www.google.com">Certification</a></li>
                    <li><a href="www.google.com">Partner directory</a></li>
                    <li><a href="www.google.com">Developer community</a></li>
                </ul>
        </section>
        </div>

        {/* Footer */}
        <Footer/>
    </div>
    </div>
}
export default MainPage;