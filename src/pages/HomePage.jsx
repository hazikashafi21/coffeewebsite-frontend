import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCoffee,
  FaLeaf,
  FaStar,
  FaTruck,
  FaHeart,
} from "react-icons/fa";

const coffees = [
  {
    name: "Espresso",
    price: "₹120",
    rating: 5,
    image:
      "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    desc: "Rich Italian espresso with a bold aroma.",
  },
  {
    name: "Latte",
    price: "₹160",
    rating: 5,
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
    desc: "Smooth espresso with creamy steamed milk.",
  },
  {
    name: "Cappuccino",
    price: "₹170",
    rating: 5,
    image:
      "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg",
    desc: "Perfect foam with strong coffee flavour.",
  },
  {
    name: "Mocha",
    price: "₹190",
    rating: 5,
    image:
      "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
    desc: "Chocolate meets premium coffee.",
  },
  {
    name: "Cold Coffee",
    price: "₹180",
    rating: 5,
    image:
      "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg",
    desc: "Refreshing chilled coffee for every season.",
  },
  {
    name: "Caramel Latte",
    price: "₹210",
    rating: 5,
    image:
      "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg",
    desc: "Sweet caramel blended with creamy latte.",
  },
];

function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section
        className="min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        }}
      >
        <div className="max-w-2xl px-6 md:px-12 lg:px-24 text-white">

          <span className="inline-block bg-[#e6b566] text-[#3f2418] px-5 py-2 rounded-full font-semibold mb-6">
            Premium Coffee Since 2025
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Every Cup
            <br />
            Tells A Story.
          </h1>

          <p className="text-lg md:text-xl leading-8 max-w-xl mb-10">
            Experience handcrafted coffee prepared with premium beans,
            passion and love. Freshly brewed every single day.
          </p>

          <div className="flex flex-wrap gap-5">

            <Link to="/order">
              <button className="bg-[#e6b566] text-[#3f2418] px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                Order Now
              </button>
            </Link>

            <a href="#menu">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#3f2418] transition-all duration-300">
                Explore Menu
              </button>
            </a>

          </div>

        </div>
      </section>

      {/* Menu Section */}

      <section
        id="menu"
        className="bg-white py-20 px-6 lg:px-20 text-center"
      >

        <h2 className="text-4xl md:text-5xl font-bold text-[#3f2418] mb-4">
          Our Signature Coffee
        </h2>

        <p className="text-gray-500 text-lg mb-14">
          Crafted from freshly roasted beans and served with perfection.
        </p>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

  {coffees.map((coffee, index) => (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >

      <div className="overflow-hidden">

        <motion.img
          src={coffee.image}
          alt={coffee.name}
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.4 }}
          className="w-full h-60 sm:h-64 object-cover"
        />

      </div>

      <div className="p-6 text-center">

        <h3 className="text-2xl lg:text-3xl font-bold text-[#3f2418] mb-3">
          {coffee.name}
        </h3>

        <p className="text-gray-600 leading-7 min-h-[72px] mb-4">
          {coffee.desc}
        </p>

        <div className="flex justify-center gap-1 text-yellow-400 text-lg mb-4">

          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className="transition-transform duration-300 group-hover:scale-125"
            />
          ))}

        </div>

        <h4 className="text-3xl font-bold text-[#8b4513] mb-6">
          {coffee.price}
        </h4>

        <Link to="/order">

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="w-full bg-[#e6b566] text-[#3f2418] py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300"
          >
            Order Now
          </motion.button>

        </Link>

      </div>

    </motion.div>

  ))}

</div>
      </section>
           {/* Features Section */}

      <section
        id="about"
        className="bg-[#f8f5f2] py-20 px-6 lg:px-20 text-center"
      >

        <h2 className="text-4xl md:text-5xl font-bold text-[#3f2418] mb-4">
          Why Choose Coffee Haven?
        </h2>

        <p className="text-gray-500 text-lg mb-14">
          We don't just serve coffee—we create unforgettable experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <FaCoffee className="text-5xl text-[#b9772d] mx-auto mb-5" />

            <h3 className="text-2xl font-bold text-[#3f2418] mb-3">
              Premium Beans
            </h3>

            <p className="text-gray-600 leading-7">
              Carefully selected beans roasted to perfection for a rich flavour.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <FaTruck className="text-5xl text-[#b9772d] mx-auto mb-5" />

            <h3 className="text-2xl font-bold text-[#3f2418] mb-3">
              Fast Delivery
            </h3>

            <p className="text-gray-600 leading-7">
              Fresh coffee delivered quickly while keeping its aroma intact.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <FaLeaf className="text-5xl text-[#b9772d] mx-auto mb-5" />

            <h3 className="text-2xl font-bold text-[#3f2418] mb-3">
              100% Fresh
            </h3>

            <p className="text-gray-600 leading-7">
              Every cup is brewed only after you place your order.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <FaHeart className="text-5xl text-[#b9772d] mx-auto mb-5" />

            <h3 className="text-2xl font-bold text-[#3f2418] mb-3">
              Made With Love
            </h3>

            <p className="text-gray-600 leading-7">
              Our baristas prepare every drink with passion and care.
            </p>

          </div>

        </div>

      </section>

      {/* Reviews Section */}

      <section className="bg-white py-24 px-6 lg:px-20 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-[#3f2418] mb-14">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-[#f8f5f2] p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <h3 className="text-2xl mb-5 text-yellow-400">
              ⭐⭐⭐⭐⭐
            </h3>

            <p className="text-gray-600 leading-8 mb-5">
              "The best latte I've ever had. Rich flavour, perfect
              temperature, and amazing service."
            </p>

            <h4 className="font-bold text-[#3f2418]">
              — Hazika
            </h4>

          </div>

          <div className="bg-[#f8f5f2] p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <h3 className="text-2xl mb-5 text-yellow-400">
              ⭐⭐⭐⭐⭐
            </h3>

            <p className="text-gray-600 leading-8 mb-5">
              "Fast delivery, fresh coffee and beautiful packaging.
              Highly recommended!"
            </p>

            <h4 className="font-bold text-[#3f2418]">
              — Bushra
            </h4>

          </div>

          <div className="bg-[#f8f5f2] p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <h3 className="text-2xl mb-5 text-yellow-400">
              ⭐⭐⭐⭐⭐
            </h3>

            <p className="text-gray-600 leading-8 mb-5">
              "Coffee Haven has become my favourite place for coffee.
              Everything tastes premium."
            </p>

            <h4 className="font-bold text-[#3f2418]">
              — Zikra
            </h4>

          </div>

        </div>

      </section>

      {/* Contact Section */}

      <section
        id="contact"
        className="bg-[#3f2418] text-white py-24 px-6 lg:px-20 text-center"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Visit Coffee Haven
        </h2>

        <div className="flex flex-col gap-5 text-lg">

          <p>📍 Srinagar, Jammu & Kashmir</p>

          <p>📞 +91 6005******</p>

          <p>📧 coffeehaven@gmail.com</p>

          <p>🕒 Open Daily • 8:00 AM – 10:00 PM</p>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default HomePage;