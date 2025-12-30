export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 flex items-center">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">

        {/* School Name */}
        <h1 className="flex flex-wrap justify-center md:justify-start gap-3
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          <span className="text-orange-500">SMART</span>
          <span className="text-blue-600">INDIAN</span>
          <span className="text-green-600">MODEL</span>
          <span className="text-purple-700">SCHOOL</span>
        </h1>

        {/* Trust Badge */}
        <p className="mt-3 inline-block bg-white/70 px-4 py-1 rounded-full
          text-sm font-semibold text-gray-800">
          CBSE Affiliated • Aff. No. 2132680
        </p>

        {/* Tagline */}
        <p className="mt-4 text-xl italic font-serif text-gray-900">
          Learning Today… Leading Tomorrow
        </p>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-blue-800">
          SIMS is committed to academic excellence, discipline, and holistic
          development, nurturing students to become confident, responsible,
          and future-ready individuals.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg
            font-semibold hover:bg-blue-700 transition">
            Apply for Admission
          </button>
          <button className="border border-black/30 px-6 py-3 rounded-lg
            hover:bg-black hover:text-white transition">
            Explore Campus
          </button>
        </div>

      </div>
    </section>
  );
}
