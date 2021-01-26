import Container from "@material-ui/core/Container";
import Tabs from "../Components/Tabs";

export default function Index({ data }) {
  return (
    <Container maxWidth="lg">
      <Tabs data={data} />
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
