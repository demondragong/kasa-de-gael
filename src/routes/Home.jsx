import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import image from "../assets/banner_background.jpg";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = 'Kasa - Accueil';
  });
  return (
    <main className="main">
      <Banner location="home" image={image} text="Chez vous, partout et ailleurs" />
      <Gallery />
    </main>
  );
}
