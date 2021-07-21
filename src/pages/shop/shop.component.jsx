import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // ************ OBSERVABLE VERSION ******************
  // unsubscribeFromSnapShot = null;

  // componentDidMount() {

  // sample way for fetch
  // fetch(
  //   "https://firestore.googleapis.com/v1/projects/tut-react-clothing/databases/(default)/documents/collections"
  // )
  //   .then((response) => response.json())
  //   .then((collections) => console.log(collections));

  //   const collectionRef = firestore.collection("collections");
  //   const { updateCollections } = this.props;

  //   this.unsubscribeFromSnapShot = collectionRef.onSnapshot(
  //     async (snapshot) => {
  //       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //       updateCollections(collectionsMap);
  //       this.setState({ loading: false });
  //     }
  //   );
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromSnapShot();
  // }
  // ************ END OBSERVABLE VERSION ***************

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
