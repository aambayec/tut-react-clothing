import { useContext } from "react";

import CollectionsContext from "../../contexts/collections/collections.context";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap).map(
    (key) => collectionsMap[key]
  );

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview
          key={id}
          {...otherCollectionProps}
        ></CollectionPreview>
      ))}
    </div>
  );
};

export default CollectionsOverview;
