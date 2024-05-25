import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex justify-between px-6 py-10 bg-[#F39C12] shadow-sm font-nunito font-extrabold">
      <h1 className="font-bubbles text-4xl text-white text-center w-1/3">
        <NavLink to={"/"} className={""}>
          BURBUJA&apos;S WEBSITE
        </NavLink>
      </h1>
      <nav className="flex items-center text-2xl">
        <ul className="flex gap-6 w-1/3">
          <li>
            <NavLink>Inicio</NavLink>
          </li>
          <li>
            <NavLink>Tienda</NavLink>
          </li>
          <li>
            <NavLink>Contactános</NavLink>
          </li>
        </ul>
      </nav>

      <button className="w-1/3 text-2xl">Identificarse</button>
    </header>
  );
}
