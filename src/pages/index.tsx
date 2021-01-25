import Container from "@material-ui/core/Container";
import Tabs from "../Components/Tabs";
import Divisory from "../Components/Divisory";
import TabsContent from "../Components/TabsContent";

export default function Index({ data }) {
  return (
    <Container maxWidth="lg">
      <Tabs data={data} />
      <Divisory />
      <TabsContent data={data} />
    </Container>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/get-all");
  const data = await response.json();
  return {
    props: { data },
  };
}
