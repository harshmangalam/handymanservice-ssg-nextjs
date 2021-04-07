import { MdEmail, MdPhone } from "react-icons/md";
import {email,phone, siteTitle} from "../site.config"
export default function Navbar() {

  return (
    <nav className="flex items-center py-4  lg:py-0 lg:flex-row flex-col lg:justify-between justify-center bg-indigo-500 lg:h-20 w-full px-4">
      {/* logo    */}

      <h1 className="text-3xl text-white font-bold">{siteTitle}</h1>
      <div className="py-3 lg:py-0">
        <div className="flex items-center space-x-4">
          <MdEmail />
          <h3>{email}</h3>
        </div>
        <div className="flex items-center space-x-4">
          <MdPhone />
          <h3>{phone}</h3>
        </div>
      </div>
    </nav>
  );
}
