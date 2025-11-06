import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="relative">
      <div className="sticky z-10 top-0 right-0 left-0 navbar overflow-visible bg-Background border-b-2 border-Textcolor h-24 shadow-sm p-0 ">
        <div className="navbar-start ml-5">
          <div className="flex flex-col text-center">
            
          </div>
        </div>
        <div className="navbar-center">
            <a className="text-6xl text-Textcolor text-shadow-lg font-bold">
              ShopyFy
            </a>
        </div>
        <div className="navbar-end gap-9 mr-5">
          <label className="input bg-white flex items-center gap-3  rounded-md border border-gray-300">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="black"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search"
              className="text-Textcolor text-lg bg-white outline-none"
            />
          </label>
          <div className="gap-10">
            <div className="join join-horizontal text-Textcolor">
            <Link to={'/Cart'}>
                <button className="btn btn-ghost join-item h-16 text-2xl border-l-2 border-0 text-Textcolor border-Textcolor hover:bg-Textcolor hover:text-Background">
                Cart
                </button>
            </Link>
            
            <button className="btn btn-ghost join-item h-16 text-2xl border-l-2 border-0 text-Textcolor border-Textcolor hover:bg-Textcolor hover:text-Background">
              Login
            </button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
