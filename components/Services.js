import { CgArrowRightR } from "react-icons/cg";
import Content from "./Content";

export default function Services() {
  return (
    <section className=" bg-gradient-to-r from-green-400 to-blue-500 py-20 px-4">
      <div className="flex items-center justify-center flex-col space-y-4   text-justify">
        <h6 className="text-center text-3xl lg:text-4xl text-pink-800">
          Handyman Services
        </h6>

        <div className="grid grid-cols-1 gap:2 lg:grid-cols-3 lg:gap-4 py-6 lg:space-y-0 space-y-4">
          {services.map((service) => (
            <div className="flex items-center space-x-3" key={service}>
              <CgArrowRightR size="25px" color="white" />
              <h6 className="text-2xl text-purple-800 font-bold">{service}</h6>
            </div>
          ))}
        </div>
        <h6 className="text-2xl text-center text-white font-bold">
          much more...
        </h6>
      </div>

      <Content />
    </section>
  );
}


const services = [
    " Home lighting installation",
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
  ];
  