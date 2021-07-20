import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { collectionId },
    },
  }
) => ({
  collection: selectCollection(collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
