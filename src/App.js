import "./App.css";
import { Header } from "./components/layouts/Header";
import { Content } from "./components/layouts/Content";
import { Footer } from "./components/layouts/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
