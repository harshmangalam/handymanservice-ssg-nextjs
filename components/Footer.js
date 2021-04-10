import { Fragment } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  facebook,
  twitter,
  instagram,
  linkedin,
  siteTitle,
} from "../site.config";

export default function Navbar() {
  return (
    <Fragment>
      <div className="bg-indigo-600">
        <div className="flex items-center container m-auto justify-center lg:justify-between flex-col lg:flex-row lg:space-x-3 space-y-4 lg:space-y-0 px-4 lg:px-0 py-4">
          <section>
            <h3 className="font-bold text-2xl">{siteTitle}</h3>
            <h6>141S , Vancouver ,BC,Canada</h6>
          </section>
          <section className="flex items-center justify-center space-x-3">
            {soocialMedia.map((social) => (
              <Fragment key={social.name}>
                <a href={social.url} title={social.name}>
                  {social.icon}
                </a>
              </Fragment>
            ))}
          </section>
        </div>
      </div>
      <section className="bg-indigo-700  h-20 flex items-center justify-center">
        <h6 className="text-xl text-gray-200">
          &copy; {siteTitle} {new Date().getFullYear()}
        </h6>
      </section>
    </Fragment>
  );
}

const soocialMedia = [
  {
    name: "Facebook",
    url: facebook,
    icon: <FaFacebook size="25px" />,
  },
  {
    name: "Twitter",
    url: twitter,
    icon: <FaTwitter size="25px" />,
  },
  {
    name: "Instagram",
    url: instagram,
    icon: <FaInstagram size="25px" />,
  },
  {
    name: "Linkedin",
    url: linkedin,
    icon: <FaLinkedinIn size="25px" />,
  },
];
