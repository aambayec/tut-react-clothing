import { createContext } from "jest-runtime";
import SHOP_DATA from "./shop.data";

const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;
