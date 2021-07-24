import Spinner from "../spinner/spinner.component";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) =>
    isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;

export default WithSpinner;
