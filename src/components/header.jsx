import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
const Header = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const userDetail = Cookies.get("user-detail")
      ? Cookies.get("user-detail")
      : null;
    setUser(JSON.parse(userDetail));
  }, []);
  const logout = () => {
    Cookies.remove("user-detail");
    Cookies.remove("user-token");
    window.location.replace("/");
  }
 
  return (
    <div className="bg-gray-100 shadow py-4">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center gap-4 py-2">
          <p className="lg:text-3xl text-xl font-semibold font-serif text-cyan-600">
            <Link to="/">Thoplo-Machine</Link>
          </p>
          <ul className="flex gap-4">
            {user ? (
              <>
                <li>
                  <div className="flex space-x-3 items-center mt-[4px]">
                    <div className="flex-none flex justify-center">
                      <div className="w-8 h-8 flex ">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShta_GXR2xdnsxSzj_GTcJHcNykjVKrCBrZ9qouUl0usuJWG2Rpr_PbTDu3sA9auNUH64&usqp=CAU"
                          alt="profile"
                          className="shadow rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br  flex justify-center items-center">
                    <div className="relative">
                      <button  className="bg-sky-500 p-2 font-bold text-gray-100 rounded-md peer focus:bg-sky-400 focus:text-gray-200 transition-all duration-200  ">
                      {user.firstName + " " + user.lastName}
                      </button>
                      <div
                        className=' w-80 absolute top-5 z-10 right-0
		after:content-[""] after:inline-block after:absolute after:top-0 after:bg-white/40
		after:w-full after:h-full after:-z-20 after:blur-[2px] after:rounded-lg
    peer-focus:top-12 peer-focus:opacity-100 peer-focus:visible 
    transition-all duration-300 invisible  opacity-0 
    '
                      >
                        <ul className="py-6 px-3 flex flex-col gap-3">
                          <li className="cursor-pointer bg-sky-300 p-3 rounded-md hover:opacity-90 text-white">
                            <Link to="/user/dashboard">View Account</Link>
                          </li>
                          <li onClick={logout} className="cursor-pointer bg-blue-300 p-3 rounded-md hover:opacity-90 text-white">
                            Logout
                          </li>
                          {/* <li className="cursor-pointer bg-cyan-300 p-3 rounded-md hover:opacity-90 text-white">
                            Eat an apple a day
                          </li>
                          <li className="cursor-pointer bg-red-300 p-3 rounded-md hover:opacity-90 text-white">
                            Eat an apple a day
                          </li>
                          <li className="cursor-pointer bg-yellow-300 p-3 rounded-md hover:opacity-90 text-white">
                            Eat an apple a day
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button className="bg-cyan-600 text-white px-4 py-2 rounded">
                    <Link to="/signin">Login</Link>
                  </button>
                </li>
                <li>
                  <button className="bg-cyan-600 text-white px-4 py-2 rounded">
                    <Link to="/signup">Register</Link>
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
