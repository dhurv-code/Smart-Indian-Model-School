export default function Programs() {
const programs = [
  {
    title: "Pre-Primary School",
    classes: "Nursery – UKG",
    desc: "Play-based learning focused on early development, creativity, and social skills."
  },
  {
    title: "Primary School",
    classes: "Class I – V",
    desc: "Strong foundation in literacy, numeracy, and value-based education."
  },
  {
    title: "Middle School",
    classes: "Class VI – VIII",
    desc: "Concept-oriented learning with emphasis on logical and critical thinking."
  },
  {
    title: "Secondary School",
    classes: "Class IX – X",
    desc: "CBSE board preparation with academic discipline and career guidance."
  },
  {
    title: "Senior Secondary",
    classes: "Class XI – XII",
    desc: "Science and Commerce for future academic and career readiness."
  }
];


  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-gray-900">
          Academic Programs
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Structured learning pathways for every stage of education
        </p>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {programs.map((p, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {p.title}
              </h3>
              <p className="text-sm font-medium text-gray-500 mt-1">
                {p.classes}
              </p>
              <p className="mt-3 text-gray-600 text-sm">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
