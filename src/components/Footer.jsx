import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#2d1912] text-white text-center py-10 px-5">
      
      <h2 className="text-3xl font-bold mb-3">
        Coffee Haven ☕
      </h2>

      <p className="text-gray-300">
        Brewing Happiness, One Cup at a Time.
      </p>

      <div className="flex justify-center gap-6 text-3xl my-6">
        <FaFacebook className="cursor-pointer transition-all duration-300 hover:text-[#e6b566] hover:scale-125" />
        <FaInstagram className="cursor-pointer transition-all duration-300 hover:text-[#e6b566] hover:scale-125" />
        <FaTwitter className="cursor-pointer transition-all duration-300 hover:text-[#e6b566] hover:scale-125" />
      </div>

      <p className="text-sm text-gray-400">
        © 2026 Coffee Haven. All Rights Reserved.<br></br>Developed By Hazika Shafi
      </p>

    </footer>
  );
}

export default Footer;