import { default as CollectionsOverview } from "../../components/collections-overview/collections-overview.container";

const NotFoundPage = () => {
  return (
    <div>
      <h2>We seem to have lost this page but we don’t want to lose you.</h2>
      <CollectionsOverview />
    </div>
  );
};

export default NotFoundPage;
