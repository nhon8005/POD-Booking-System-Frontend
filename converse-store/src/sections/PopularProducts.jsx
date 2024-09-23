import { products } from "../assets/constants";
import PopularProductCard from "../components/PopularProductCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-purple-900">Popular</span> Location
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
        The website provides detailed information on POD workspace locations, including addresses,
         amenities, availability, and user reviews to help users choose the best fit for their needs.
        </p>
      </div>
      <TrackVisibility partialVisibility once>
        {({ isVisible }) => (
          <div
            className={`mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ${
              isVisible ? "animate__animated animate__fadeIn animate__slow" : ""
            }`}
          >
            {products.map((product, index) => (
              <PopularProductCard
                key={product.name}
                {...product}
                isLast={index === products.length - 1}
              />
            ))}
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};

export default PopularProducts;
