import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const menu = [
    {
      title: "About",
      submenu: [
        "Director’s Message",
        "Principal’s Message",
        "Vision & Mission",
        "School Overview"
      ]
    },
    {
      title: "Academics",
      submenu: [
        "Pre-Primary",
        "Primary School",
        "Middle School",
        "Secondary School",
        "Senior Secondary",
        "Fee Structure",
        "Dress Code"
      ]
    },
    {
      title: "Facilities",
      submenu: [
        "Library",
        "Laboratories",
        "Sports",
        "Transport",
        "Hostel"
      ]
    },
    {
      title: "Admissions",
      submenu: [
        "Admission Process",
        "Eligibility",
        "Required Documents",
        "Apply Online"
      ]
    }
  ];


  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="h-17 w-50">
          <img src="../src/assets/simslogo.png" alt="SIMS Logo" className="h-19 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slate-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>

          {menu.map((item, idx) => (
            <li key={idx} className="relative group cursor-pointer">
              <span className="hover:text-blue-600">{item.title}</span>

              {/* Dropdown */}
              <ul className="absolute left-0 top-full mt-3 w-56 bg-white shadow-lg rounded-lg
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-200 z-50">

                {item.submenu.map((sub, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li className="hover:text-blue-600 cursor-pointer">Events</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* CTA */}
        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Apply Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col p-6 gap-4 text-slate-700 font-medium">

            <li>Home</li>

            {menu.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() =>
                    setActiveMenu(activeMenu === idx ? null : idx)
                  }
                  className="w-full flex justify-between items-center"
                >
                  {item.title}
                  <span>{activeMenu === idx ? "−" : "+"}</span>
                </button>

                {activeMenu === idx && (
                  <ul className="mt-2 ml-4 space-y-2 text-sm text-gray-600">
                    {item.submenu.map((sub, i) => (
                      <li key={i} className="hover:text-blue-600">
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li>Events</li>
            <li>Contact</li>

            <button className="mt-4 bg-blue-600 text-white py-2 rounded-lg">
              Apply Now
            </button>
          </ul>
        </div>
      )}

    </header>
  );
}
