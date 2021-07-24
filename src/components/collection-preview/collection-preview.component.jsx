import "./collection-preview.styles.scss";
import { default as CollectionItem } from "../collection-item/collection-item.container";

const CollectionPreview = ({ title, items }) => (
  <div>
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  </div>
);

export default CollectionPreview;
