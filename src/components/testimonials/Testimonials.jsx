import "./Testimonials.scss";
import Wrapper from "../wrapper/Wrapper";
import Img from "../../assets/testimonial-img.png";
import Testimonial1 from "../../assets/testimonial-1.png";
import Testimonial2 from "../../assets/testimonial-2.png";
import Testimonial3 from "../../assets/testimonial-3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const data = [
  {
    text: "The customer is very important, the customer will be followed by the customer. In fact, the stress factor in the eros is the sad element. The course of the house, I would like to decorate the cartoons, sometimes there was no pain, so that the advantage of the backyard was a free life. Aenean faucibus nibh and just the course of that rutrum lorem imperdiet. Now to put the sad smile of life.",
    name: "Full name",
    position: "position",
    img: Testimonial1,
  },
  {
    text: "The customer is very important, the customer will be followed by the customer. In fact, the stress factor in the eros is the sad element. The course of the house, I would like to decorate the cartoons, sometimes there was no pain, so that the advantage of the backyard was a free life. Aenean faucibus nibh and just the course of that rutrum lorem imperdiet. Now to put the sad smile of life.",
    name: "Full name",
    position: "position",
    img: Testimonial2,
  },
  {
    text: "The customer is very important, the customer will be followed by the customer. In fact, the stress factor in the eros is the sad element. The course of the house, I would like to decorate the cartoons, sometimes there was no pain, so that the advantage of the backyard was a free life. Aenean faucibus nibh and just the course of that rutrum lorem imperdiet. Now to put the sad smile of life.",
    name: "Full name",
    position: "position",
    img: Testimonial3,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Wrapper className="testimonials__container">
        <div className="testimonials__left">
          <Carousel
            centerMode={false}
            infiniteLoop={true}
            showStatus={false}
            showArrows={false}
          >
            {data.map(({ text, name, position, img }) => (
              <div className="testimonials__card">
                <p>{text}</p>
                <div className="testimonials__card-info">
                  <img src={img} alt="" />
                  <div>
                    <h3>{name}</h3>
                    <span>{position}</span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="testimonials__right">
          <img src={Img} alt="" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Testimonials;
