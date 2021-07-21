import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

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
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
          // **sample code with render**
          // render={(props) => (
          //   <CollectionOverviewWithSpinner
          //     isLoading={isCollectionFetching}
          //     {...props}
          //   />
          // )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
