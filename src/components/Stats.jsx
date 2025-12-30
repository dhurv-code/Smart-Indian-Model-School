export default function Stats() {
  const stats = [
    { label: "Years of Excellence", value: "11" },
    { label: "Students", value: "1,000+" },
    { label: "Qualified Faculty", value: "40+" },
    { label: "Recognized Programs", value: "50+" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold text-primary">{item.value}</h3>
            <p className="text-gray-600 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
