import { NavLink } from "react-router";

export default function Header() {
  const title = "Personal Diary";

  return (
    <>
      <header className="border p-4 bg-black">
        <h1 className="text-3xl">{title}</h1>
        {/* Navigation! */}
        <nav className="my-5">
          <ul className="flex gap-3">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
