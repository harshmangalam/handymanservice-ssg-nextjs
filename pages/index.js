import { Fragment } from "react";
import { email, phone, siteTitle } from "../site.config";
export default function Home() {
  return (
    <Fragment>
      <section className="flex flex-col items-center justify-center">
        <div
          className="w-full h-full shadow-2xl overflow-hidden relative"
          style={{ height: "70vh" }}
        >
          <img
            src="/image2.jpg"
            alt={siteTitle}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
          <div className="h-full flex flex-col space-y-4 items-center justify-center relative px-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-center">
              Quality work, Guaranteed!
            </h1>
            <h1 className="text-3xl lg:text-4xl font-bold text-center">
              Call Us Today! (604) 220 9388
            </h1>
          </div>
        </div>
        <div className="bg-black text-white py-4 w-full flex flex-col items-center  space-y-3 justify-center">
          <h6 className="font-semibold font-mono text-xl">
            141S , Vancouver ,BC,Canada
          </h6>
        </div>
      </section>

      <section className=" bg-gradient-to-r from-green-400 to-blue-500 py-10">
        <div className="flex items-center justify-center flex-col space-y-4   text-justify">
          <h6 className="text-center text-4xl lg:text-6xl text-pink-800">
            Handyman Services
          </h6>
          <h5 className="text-center text-2xl lg:text-3xl text-white">
            Handyman Servies In Vancouver , BC
          </h5>
          <div className="items-center py-6 ">
            {services.map((service) => (
              <h6 className="text-2xl text-purple-800 font-bold">{service}</h6>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

const services = [
  " Home",
  "lighting",
  "installation",
  "Ceiling fan installation",
  "Window blind installation",
  "Small carpentry projects",
  "Furniture assembly",
  "TV wall mounting",
  "Room painting",
  "Door lock installation",
  "Door replacement",
  "Tub and shower caulking",
  "Accent-wall painting",
  "Tiling",
  "much more...",
];
