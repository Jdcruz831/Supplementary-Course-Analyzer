import "./App.css";
import { ThemeProvider } from "@emotion/react";
import Layout from "./components/layout";
import RouteProvider from "./utils/routes";

function App() {
  return (
    <div>
      <Layout>
        <RouteProvider/>
      </Layout>
    </div>
  );
}

export default App;
