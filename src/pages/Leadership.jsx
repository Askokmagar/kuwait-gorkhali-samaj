export default function Leadership() {
  const leaders = [
    { name: "President", role: "Community Lead" },
    { name: "Vice President", role: "Support Lead" },
    { name: "Secretary", role: "Operations" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold mb-8">Leadership</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {leaders.map((l, i) => (
          <div key={i} className="border rounded-xl p-6 text-center space-y-4">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
              Photo
            </div>
            <div>
              <h3 className="font-semibold">{l.name}</h3>
              <p className="text-sm text-gray-600">{l.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
