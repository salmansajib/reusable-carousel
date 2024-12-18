import Carousel from "./components/Carousel";
import image1 from "./assets/images/dan-gold-4_jhDO54BYg-unsplash.jpg";
import image2 from "./assets/images/eaters-collective-12eHC6FxPyg-unsplash.jpg";
import image3 from "./assets/images/luke-michael-1cWZgnBhZRs-unsplash.jpg";
import image4 from "./assets/images/megan-thomas-xMh_ww8HN_Q-unsplash.jpg";
import image5 from "./assets/images/webvilla-hv1MrBzGGNY-unsplash.jpg";

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen grid place-content-center text-gray-100 p-4">
      <div>
        <div className="max-w-[1000px] mx-auto">
          <Carousel autoPlay={true}>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default App;
