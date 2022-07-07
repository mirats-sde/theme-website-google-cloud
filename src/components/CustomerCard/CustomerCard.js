import './CustomerCard.css';

function CustomerCard({customerImg}) {
    return <div className='customer-cards'>
        <div className='customer-body'>
        <img src={customerImg} alt='' className='customer-img'/>
        </div>
    </div>
}
export default CustomerCard;

// function Card({img,title,description}) {
//     return (
//         <div className='card'>
//             <div className='card-body'>
//                 <img src={img} alt='' className='card-img'/>
//                 <a href='www.google.com' className='card-title'>{title}</a>
//                 <p className='card-desc'>{description}</p>
//             </div>
//         </div>
//     )
// }


