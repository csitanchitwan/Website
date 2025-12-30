
const features = [
  { title: "Academic Issue Advocacy", desc: "Identifying students’ academic problems and raising them to concerned stakeholders for better learning outcomes.",},
  { title: "Workshops & Events", desc: "Providing opportunities to participate in workshops and seminars to expand knowledge in various CS & IT fields."},
  { title: "Guidance & Study Support", desc: "Offering guidance and support from seniors for studies, projects, and career preparation."},
  { title: "Community Network", desc: "A nationwide CSIT student community sharing opportunities, resources, and support."},
];

export default function FeatureSection() {
  return (
    <section className="py-20 sm:py-28 bg-linear-to-br from-white via-[#f3f7ff] to-[#1eade6]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#cf4446] mb-2 sm:mb-4">What We Do?</h2>
        <span className="text-[#1eade6] text-xs sm:text-sm font-semibold uppercase tracking-widest">Serving CSIT Students Beyond the Classroom</span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mt-10 sm:mt-14">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-[#cf4446]">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed pt-3 sm:pt-4">{f.desc}</p>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}
