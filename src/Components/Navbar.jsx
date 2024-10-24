import profileIcon from "../assets/profileIcon.png";
import PropTypes from "prop-types";

const Navbar = ({ cartItems, SearchProductByInput }) => {
  return (
    <div>
      <nav className="bg-flipkartBlue p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <i className="logo-spin fa-brands fa-react mr-2"> </i>FakeShop
          </div>

          <div className="hidden md:flex space-x-6 text-white">
            <a href="#" className="hover:text-flipkartYellow">
              Home
            </a>
            <a href="#" className="hover:text-flipkartYellow">
              Shop
            </a>
            <a href="#" className="hover:text-flipkartYellow">
              About
            </a>
            <a href="#" className="hover:text-flipkartYellow">
              Contact Us
            </a>
          </div>

          <div className="flex items-center border border-flipkartYellow rounded-md px-2 py-1">
            <input
              type="text"
              placeholder="Search"
              onKeyUp={(e) => SearchProductByInput(e.target.value)}
              className="px-2 py-1 outline-none bg-transparent text-white placeholder-white"
            />
            <i className="fas fa-search text-flipkartYellow"></i>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-white flex items-center">
              <div className="relative mr-3">
                <i className="fas fa-shopping-cart text-2xl"></i>
                <span className="absolute -top-2 -right-3 bg-flipkartYellow rounded-full h-5 min-w-5 text-black text-xs p-[2px] flex items-center justify-center">
                  {cartItems.length}
                </span>
              </div>
              <span className="ml-2 text-sm font-bold">
                <span className="text-md font-extrabold">৳ </span>
                {cartItems
                  .reduce((init, { price }) => init + price, 0)
                  .toFixed(2)}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <img
                src={profileIcon}
                alt="User Profile"
                className="w-10 h-10 rounded-full border-2 border-flipkartYellow"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  cartItems: PropTypes.array.isRequired,
  SearchProductByInput: PropTypes.func,
};
export default Navbar;
