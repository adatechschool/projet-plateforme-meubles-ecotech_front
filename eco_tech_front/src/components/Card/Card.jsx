import { FaShoppingCart, FaRegBookmark, FaFireAlt } from 'react-icons/fa';
import './Card.css';

export function Products(props) {
    return (
        <div className='productList'>
            <div key={props.id} className='productCard'>
                <img src={props.img} alt="product-img" className='productImage'></img>

                <FaShoppingCart className={"productCard__cart"}/>
                <FaRegBookmark className={"productCard__wishlist"}/>
                <FaFireAlt className={"productCard__fastSelling"}/>

                <div className='productCard__content'>
                    <h3 className='productName'>{props.title}</h3>
                    <p className='productInfo'>{props.description}</p>
                    <div className='displayStack__1'>
                        <div className='productPrice'>{props.price}€</div>
                    </div>
                </div>
            </div>
        </div>
    )
}