import logo from "./logo.svg";
import "./App.css";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import ProductList from "./components/ProductList";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <ProductList />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
