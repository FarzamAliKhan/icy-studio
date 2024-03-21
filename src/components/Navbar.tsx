import React from "react";

const Navbar = () => {
  return (
    <nav className="flex gap-8 items-center justify-between mt-10 py-1 px-6 bg-transparent fixed w-full  ">
      {/* Logo on the left */}
      <div className="flex items-center">
        <a href='#'>
          <img 
            className="h-28"
            src="ICY-LOGO-WITHOUT-TAGLINE.png"
            alt="Icy Studio"
          />
        </a>
      </div>

      {/* Button on the right */}
      <div>
        <a href="#" className="cursor-hand">
          <img 
            className="h-8" 
            src="5-(WHITE).png"
            alt="Menu"          
           />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
