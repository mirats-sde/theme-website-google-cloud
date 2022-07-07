import './Cards.css';

function Card({img,title,description}) {
    return (
        <div className='card'>
            <div className='card-body'>
                <img src={img} alt='' className='card-img'/>
                <a href='www.google.com' className='card-title'>{title}</a>
                <p className='card-desc'>{description}</p>
            </div>
        </div>
    )
}

export default Card;