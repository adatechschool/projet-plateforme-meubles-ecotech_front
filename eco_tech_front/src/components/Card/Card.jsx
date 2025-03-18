import { FaShoppingCart, FaRegBookmark, FaFireAlt } from "react-icons/fa";
import "./Card.css";
import { Link } from "react-router-dom";

export function Products({product}) {
  return (
    <div className="productList">
      <Link to={`/product/${product.id}`}>
        <div key={product.id} className="productCard">
          <img
            src={product.img}
            alt="product-img"
            className="productImage"
          ></img>

          <FaShoppingCart className={"productCard__cart"} />
          <FaRegBookmark className={"productCard__wishlist"} />
          <FaFireAlt className={"productCard__fastSelling"} />

          <div className="productCard__content">
            <h3 className="productName">{product.title}</h3>
            <p className="productInfo">{product.description}</p>
            <div className="displayStack__1">
              <div className="productPrice">{product.price}€</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
