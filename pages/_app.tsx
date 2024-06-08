import "@/styles/globals.css";
import type { AppProps } from "next/app";
import About from "@/Components/About";
import Blog from "@/Components/Blog";
import ClientReview from "@/Components/ClientReview";
import Services from "@/Components/Services";
import Skils from "@/Components/Skils";
import Projects from "@/Components/Projects";
import Testimonials from "@/Components/Testimonials";
import Footer from "@/Components/Footer";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <> 
    <About/>
      {/* Services */}
    <Services/>
      {/* Skills */}
    <Skils/>
      {/* Projects */}
    <Projects/>
      {/* Reviews */}
    <Testimonials/>
      {/* BLOG */}
    <Blog/>
      {/* Footer */}
  
    <Component {...pageProps} />
    <Footer/>
    </>
);
}
