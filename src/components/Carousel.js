import home_image from "../assets/images/home_image.jpg";
import home_image_small from "../assets/images/home_image_small.jpg";

function Carousel_home() {
  return (
    <section className="home" id="home">
      <div className="cover_image">
        <img src={home_image} alt="" />
      </div>
      <div className="cover_image_small d-none">
        <img src={home_image_small} alt="" />
      </div>
    </section>
  );
}

export default Carousel_home;
