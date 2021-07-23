import { useContext } from "react";
import { CartContext } from "../../providers/cart/cart.provider";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
