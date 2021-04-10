import { siteTitle } from "../site.config";

export default function Header() {
  return (
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
        <h6 className="font-semibold font-mono text-xl text-center">
          Handyman Servies In Vancouver , BC
        </h6>
      </div>
    </section>
  );
}
