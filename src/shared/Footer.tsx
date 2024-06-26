import logo from "../assets/flashsoft.png";
import fb from "../assets/facebookImg.png";
import ig from "../assets/instagramImg.png";
import li from "../assets/linkedinImg.png";

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold items-center space-x-3 text-primary"
          >
            <img src={logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-white">Flashsoft Indonesia</span>
          </a>
          <p className="md-1/2">Software Development and Training Center</p>
        </div>
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <a href="" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="" className="block hover:text-gray-300">
                Features
              </a>
              <a href="" className="block hover:text-gray-300">
                About
              </a>
              <a href="" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              <a href="" className="block hover:text-gray-300">
                How does it works?
              </a>
              <a href="" className="block hover:text-gray-300">
                Where to ask question?
              </a>
              <a href="" className="block hover:text-gray-300">
                How to play?
              </a>
              <a href="" className="block hover:text-gray-300">
                What is needed for this?
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contacts</h4>
            <ul className="space-y-3">
              <p className="hover:text-gray-300">853 6383 4829</p>
              <p className="hover:text-gray-300">
                flashsoftindonesia@gmail.com
              </p>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>@ Flashsoft Indonesia 2024. All rights reversed</p>
        <div className="flex items-center space-x-5">
          <a href="https://www.facebook.com/flashsoftindonesia/">
            <img
              src={fb}
              alt=""
              className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
            />
          </a>
          <a href="https://www.instagram.com/flashsoftindonesia/?hl=en">
            <img
              src={ig}
              alt=""
              className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
            />
          </a>
          <a href="https://www.linkedin.com/company/flashsoft-indonesia/mycompany/">
            <img
              src={li}
              alt=""
              className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
