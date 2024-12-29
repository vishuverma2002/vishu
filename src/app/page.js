import Categories from "@/components/Categories/page";
import styles from "./page.module.css";
import Header from "@/components/Header/page";
import Toprest from "@/components/Toprest/page";
import Online from "@/components/Online/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <Footer />
    </>
  );
}
