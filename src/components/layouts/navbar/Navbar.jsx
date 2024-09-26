import CartWidget from "../../common/cartWidget/CartWidget";
import logo from "../../../../public/logoPanaderia.svg";
import ThemeController from "../../common/themeController/ThemeController";
import Button from "../../common/button/Button";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200" data-theme="coffee">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <details className="font-bold">
              <summary>Menú</summary>
              <ul className="p-2">
                <li>
                  <Button categoria="Panaderia" />
                </li>
                <li>
                  <Button categoria="Pasteleria" />
                </li>
                <li>
                  <Button categoria="Bolleria" />
                </li>
                <li>
                  <Button categoria="Cafeteria" />
                </li>
                <li>
                  <Button categoria="Mermeladas" />
                </li>
              </ul>
            </details>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl p-0">
          <img src={logo} alt="" className="w-16" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex z-10">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <details className="font-bold">
              <summary>Menú</summary>
              <ul className="p-2">
                <li>
                  <Button categoria="Panaderia" />
                </li>
                <li>
                  <Button categoria="Pasteleria" />
                </li>
                <li>
                  <Button categoria="Bolleria" />
                </li>
                <li>
                  <Button categoria="Cafeteria" />
                </li>
                <li>
                  <Button categoria="Mermeladas" />
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeController />
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
