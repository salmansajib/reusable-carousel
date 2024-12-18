import Carousel from "./components/Carousel";
import image1 from "./assets/images/flower1.jpg";
import image2 from "./assets/images/flower2.jpg";
import image3 from "./assets/images/flower3.jpg";
import image4 from "./assets/images/flower4.jpg";
import image5 from "./assets/images/flower5.jpg";
import image6 from "./assets/images/flower6.jpg";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen grid place-content-center text-gray-100 p-4">
      <div>
        <div className="max-w-[950px] mx-auto">
          <Carousel autoPlay={true}>
            <img
              className="w-full h-full object-cover"
              src={image1}
              alt="carousel image1"
            />
            <img
              className="w-full h-full object-cover"
              src={image2}
              alt="carousel image2"
            />
            <img
              className="w-full h-full object-cover"
              src={image3}
              alt="carousel image3"
            />
            <img
              className="w-full h-full object-cover"
              src={image4}
              alt="carousel image4"
            />
            <img
              className="w-full h-full object-cover"
              src={image5}
              alt="carousel image5"
            />
            <img
              className="w-full h-full object-cover"
              src={image6}
              alt="carousel image5"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default App;
