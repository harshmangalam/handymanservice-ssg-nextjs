import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/tailwind.css"
function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-200 text-white">
      <Navbar />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;
