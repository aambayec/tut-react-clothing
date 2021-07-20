import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollectionss = createSelector(
  [selectShop],
  (shop) => shop.collections
);
