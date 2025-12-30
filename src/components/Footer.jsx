export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* About */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">SIMS</h3>
          <p className="text-sm">
            Dedicated to academic excellence, discipline, and holistic
            development for future generations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Admissions</li>
            <li>Programs</li>
            <li>Life at Sims</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h4 className="text-white font-semibold mb-4">Academics</h4>
          <ul className="space-y-2 text-sm">
            <li>Science</li>
            <li>Commerce</li>
            <li>Arts</li>
            <li>Vocational</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm">
            Smart Indian Model School, Village chikna , 6.5 KM Shahbad Road, Rampur, UP <br />
            Phone: +91 8954050111 <br />
            Email: simsrampur@gmail.com
          </p>
        </div>

      </div>

      <div className="border-t border-slate-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} SIMS. All rights reserved.
      </div>
    </footer>
  );
}
