import './StatsCard.css';

function StatsCard({stats, statsTitle}) {
    return (
        <div className='stats-card'>
            <div className='stats-body'>
                {/* <img src={img} alt='' className='card-img'/> */}
                {/* <a href='www.google.com' className='card-title'>{title}</a>
                <p className='card-desc'>{description}</p> */}
                <div className='stats'>
                    <h3><span className='stats-num'>{stats}</span></h3>
                    <p className='stats-title'>{statsTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default StatsCard;