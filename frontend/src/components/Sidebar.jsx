import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const { pathname } = useLocation();
  const links = [
    { name: "Home", path: "/" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <div className="w-56 bg-blue-700 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Menu</h1>
      <ul className="space-y-3">
        {links.map(link => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`block px-3 py-2 rounded ${pathname === link.path ? "bg-blue-500" : "hover:bg-blue-600"}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
