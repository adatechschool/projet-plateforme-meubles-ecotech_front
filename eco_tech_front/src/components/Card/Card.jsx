import { FaShoppingCart, FaRegBookmark, FaFireAlt } from 'react-icons/fa';
import './Card.css';

// export const Test = async () => {
//     const res = await fetch('http://localhost:3000');
//     console.log(res);
// }

export function Products(props) {
    return (
        <div className='productList'>
            <div key={props.id} className='productCard'>
                <img src={props.image} alt="product-img" className='productImage'></img>

                <FaShoppingCart className={"productCard__cart"}/>
                <FaRegBookmark className={"productCard__wishlist"}/>
                <FaFireAlt className={"productCard__fastSelling"}/>

                <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                    <p className='productInfo'>{props.info}</p>
                    <div className='displayStack__1'>
                        <div className='productPrice'>{props.price}€</div>
                    </div>
                </div>
            </div>
        </div>
    )
}