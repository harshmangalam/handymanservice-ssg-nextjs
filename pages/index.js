import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>HandymanServiceU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex flex-col items-center justify-center">
        <div className="w-full h-96 shadow-2xl overflow-hidden relative">
          <img
            src="/1.jpg"
            alt="HandymanServiceU"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
          <div className="h-full flex items-center justify-center relative">
            <h1 class="text-4xl lg:text-6xl font-bold text-center">
              Always on Time, Reliable and Trustworthy
            </h1>
          </div>
        </div>
        <div className="bg-black text-white h-20 w-full flex items-center justify-center">
          <h1 className="text-center text-2xl">
            Scheduling Your Handyman is Simple
          </h1>
        </div>
      </section>

      <section className="flex-col lg:space-x-6 lg:flex-row flex items-center justify-between container m-auto my-10 shadow-2xl p-10">
        <div>
          <img src="/2.png" className="w-full h-96" />
        </div>

        <div className="flex items-center justify-center flex-col space-y-4  text-justify">
          <h6 className="text-4xl lg:text-6xl text-pink-800">
            Handyman Services
          </h6>
          <h5 className="text-3xl lg:text-4xl text-blue-500">
            For all your home and business repairs and projects.
          </h5>
          <h4 className="text-2xl text-black ">
            Here’s a sample of the services we offer, call us if we can help
            answer any other requests you may have.
          </h4>
        </div>
      </section>
    </Fragment>
  );
}
