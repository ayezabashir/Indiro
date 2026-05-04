import NewsLetter from "../components/common/NewsLetter";
import MapFormSection from "../components/Contact/MapFormSection";
import MapSection from "../components/Contact/MapSection";

const ContactUs = () => {
  return (
    <div className="relative">
      <div className="bg-[url('/images/bnr1.jpg')] bg-cover bg-center h-[500px]">
        <div className="h-full w-full pt-30">
          <h1 className="text-white text-6xl font-[Oswald] font-black h-full flex justify-center items-center ">
            Contact US
          </h1>
        </div>
      </div>
      <section >
        <MapSection />
        <div className="z-100 relative bottom-50">
          <MapFormSection />
        </div>
      </section>
      <NewsLetter />
    </div>
  );
};

export default ContactUs;
