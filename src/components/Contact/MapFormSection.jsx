import { MapPinIcon } from "lucide-react";
import { BsEnvelope } from "react-icons/bs";
import ContactForm from "./ContactForm";

const MapFormSection = () => {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-5 shadow-2xl rounded-lg overflow-hidden">
        <div className="relative md:col-span-2 bg-[url('/images/content2pic2.jpg')] bg-cover bg-center text-white p-10 lg:p-16 flex flex-col justify-center min-h-[400px]">
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          <div className="relative z-10">
            <h2 className="text-5xl font-[Oswald] font-extrabold mb-5 relative inline-block">
              Get In Touch
              <span className="absolute left-[-15px] top-1/2 -translate-y-1/2 h-[70%] w-1 bg-brand-orange"></span>
            </h2>
            <p className="text-gray-200 mb-12 max-w-md text-sm lg:text-lg">
              If you are interested in working with us, please get in touch.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPinIcon className="text-2xl shrink-0 mt-1" />
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">
                    Our Address
                  </h4>
                  <p className="text-gray-200 leading-relaxed text-sm lg:text-lg">
                    Kalpana Chawla Circle, 23, near Mokshita Dairy, Sector B,
                    Rama Krishna Puram, Kota, Rajasthan 324009
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <BsEnvelope className="text-2xl shrink-0 mt-1" />
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">
                    Our Email
                  </h4>
                  <p className="text-gray-200">
                    <a
                      href="mailto:info@example.com"
                      className="hover:text-brand-orange transition text-sm lg:text-lg"
                    >
                      info@example.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:col-span-3 max-w-2xl bg-brand-navy text-white p-10 lg:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-[2px] w-8 bg-brand-orange"></div>
            <p className="text-brand-orange font-semibold tracking-wider text-sm">
              CONTACT US
            </p>
          </div>

          <h3 className="text-4xl font-[Oswald] font-extrabold mb-10 text-white">
            Get In Touch With Us
          </h3>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default MapFormSection;
