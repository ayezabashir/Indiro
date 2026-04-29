import { BsQuote } from "react-icons/bs";
import ShiftingButton from "../common/ShiftingButton";
import content3pic from "/images/content3pic.jpg";
const ContentInner3 = () => {
  return (
    <section className="relative bg-brand-navy py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="relative z-10 overflow-hidden border-4 border-white/10">
              <img
                src={content3pic}
                alt="Engineers working"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-brand-orange/20 -z-0"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <h5 className="text-brand-orange font-bold uppercase tracking-widest text-sm">
                What We Do
              </h5>
              <span className="h-0.5 w-10 bg-brand-orange"></span>
            </div>

            <h2 className="text-white text-4xl md:text-5xl font-bold mb-8 leading-tight uppercase">
              We Are Always Best <br />
              <span className="text-white">Industrial Solution</span>
            </h2>

            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Aenean fermentum congue risus ut blandit. Cras sed fermentum
              felis. Cras quis bibendum libero. Sed dictum, nibh at placerat
              rhoncus.
            </p>

            <div className="relative pl-8 border-l-4 border-brand-orange mb-10">

              <div className="relative z-10">
                <BsQuote className="text-brand-orange text-5xl" />
                <h4 className="text-white font-bold text-xl mb-1">
                  Adam Stone{" "}
                  <span className="text-zinc-500 font-normal text-sm ml-2">
                    / CEO at Google INC
                  </span>
                </h4>
                <p className="text-zinc-300 italic text-xl leading-relaxed">
                  Sed elit quam, iaculis sed semper sit amet udin vitae nibh.
                  magna akal semper Fusce commodo molestie luctus. Lorem ipsum
                  Dolor tusima olatiup.
                </p>
              </div>
            </div>

            <p className="text-zinc-400 mb-10">
              Industries, the countries they reside in, and the economies of
              those countries are interlinked in a complex web of
              interdependence.
            </p>

            <ShiftingButton to="/" children="Learn More" className="mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentInner3;
