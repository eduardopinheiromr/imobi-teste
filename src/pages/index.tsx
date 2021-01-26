import Container from "@material-ui/core/Container";
import Tabs from "../Components/Tabs";
import { Provider } from "react-redux";
import store from "../../store";

export default function Index({ data }) {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <Tabs data={data} />
      </Container>
    </Provider>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://imobi-teste.vercel.app/api/get-all");
  const data = await response.json();

  return {
    props: { data },
  };
}
