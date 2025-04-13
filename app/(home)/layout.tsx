import PageLayout from "../../components/PageLayout";

export default function DefaultLayout({ children }) {
  return (
    <PageLayout title="The New York Times Best Seller Explorer">
      {children}
    </PageLayout>
  );
}
