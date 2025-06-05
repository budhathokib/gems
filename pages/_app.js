import "@/styles/globals.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Top from "./Components/Top";
import Gems from "./Components/Gems";
import Cybersec from "./Components/Cybersec"
import Included from "./Components/Included"
import Why from "./Components/Why"
import Carousel from "./Components/Carousel";
import What from "./Components/What"
import Faq from "./Components/Faq";
import Blog from "./Components/Blog";
import AboutUs from "./Components/About";

export default function App({ Component, pageProps }) {
  return (
    <>
    
      <Header />
      <Top/>
      <Gems/>
      <Carousel/>
      <Cybersec/>
      <Included/>
      <What/>
      <Why/>
      <Faq/>
      <Component {...pageProps} />
      <AboutUs/>
      <Blog/>
      <Footer />
    </>
  );
}
