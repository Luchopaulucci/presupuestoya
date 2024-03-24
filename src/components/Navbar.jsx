import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <header className="bg-white flex flex-row justify-between items-center p-5 h-24">
      <nav><HiBars3 /></nav>
      <h1 className="font-bold text-2xl">PRESUPUESTO YA</h1>
      <button className="bg-gray-500 rounded-sm p-5">DARK MODE 🌓</button>
    </header>
  )
}

export default Navbar