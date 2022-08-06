import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import image from "../assets/banner_background.jpg";

export default function Home() {
  return (
    <main className="main">
      <Banner image={image} text="Chez vous, partout et ailleurs" />
      <Gallery />
    </main>
  );
}
