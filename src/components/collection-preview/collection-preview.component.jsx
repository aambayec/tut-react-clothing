import "./collection-preview.style.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div>
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...othreItemProps }) => (
            <CollectionItem key={id} {...othreItemProps}>
              {othreItemProps.name}
            </CollectionItem>
          ))}
      </div>
    </div>
  </div>
);

export default CollectionPreview;
