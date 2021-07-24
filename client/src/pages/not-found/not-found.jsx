import { default as CollectionsOverview } from "../../components/collections-overview/collections-overview.container";

const NotFoundPage = () => {
  return (
    <div>
      <h2>
        We can't seem to find the link that you are looking for. You are
        redirected to our shop page.
      </h2>
      <CollectionsOverview />
    </div>
  );
};

export default NotFoundPage;
