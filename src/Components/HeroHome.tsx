import leftPlant from "../assets/leftPlant.png";
import image23 from "../assets/image23.png";
import { Button } from "./Button";

const HeroHome = () => {
  return (
    <div className="bg-wisper px-10 sm:pl-20 pb-40 relative">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <section className="max-w-xl relative mt-20">
          <div className="flex items-center mb-5">
            <hr className="w-8 border-t-4 border-black mr-5" />
            <h2 className="text-lg font-bold font-pacifico">Love for Nature</h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 text-primary-lunar-green font-eb-garamond md:leading-snug">
            Discover Your <span className="text-primary-avacado">Green</span>{" "}
            Side
          </h1>
          <p className="text-base mt-4 mb-6 text-secondary-secondary font-raleway">
            We are your one-stop destination for all things green and growing.
            Our website offers a wide array of stunning plants, ranging from
            vibrant flowers to lush indoor foliage, allowing you to create your
            very own green oasis.
          </p>
          <Button to="/products">Shop Now</Button>
          <a
            href="/learn"
            className="hover:text-primary-lunar-green  cursor-pointer relative md:top-36 mt-6 mb-4 text-secondary-secondary text-sm font-raleway block"
          >
            Learn Gardening →
          </a>
        </section>
        <section>
          <img
            src={leftPlant}
            alt="Left Plant"
            className="pointer-events-none absolute left-0 -bottom-32 w-48 mix-blend-luminosity hidden lg:block"
          />
        </section>
        <section>
          <img
            src={image23}
            alt="Right Plant"
            className="absolute bottom-0 right-0 mix-blend-luminosity h-full hidden lg:block filter-custom-drop-shadow"
          />
        </section>
      </div>
    </div>
  );
};

export default HeroHome;
