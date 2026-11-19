export function TeamSection() {
  const teamMembers = [
    {
      name: "Digvijay",
      role: "Co-founder, creative director + lead photographer",
      image: "/assets/team-portrait.png",
      bio: "Visionary storyteller with over 10 years of experience documenting royal weddings and heritage celebrations across Rajasthan.",
    },
    {
      name: "Ram",
      role: "Lead Photographer",
      image: "/assets/about-right.png",
      bio: "Master of raw candid expressions and editorial framing with an innate sense for natural light.",
    },
    {
      name: "Kamlesh",
      role: "Cinematographer",
      image: "/assets/about-left.png",
      bio: "Crafting 4K cinematic films with atmospheric rhythm, emotional depth, and director-grade color grading.",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Section Heading */}
        <div className="mb-14 text-center sm:text-left">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[40px] font-normal tracking-[2px] text-black">
            Meet the TEAM
          </h2>
        </div>

        {/* 3 Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col space-y-5 group">
              {/* Photo Box */}
              <div className="w-full aspect-square max-w-[320px] mx-auto sm:mx-0 rounded-xl overflow-hidden shadow-xl bg-black/5">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Info */}
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-serif text-2xl sm:text-[30px] font-normal text-black">
                  {member.name}
                </h3>
                <p className="font-sans text-xs uppercase tracking-[2.4px] text-[#26211e] font-medium leading-relaxed">
                  {member.role}
                </p>
                <p className="font-baskervville text-xs sm:text-sm text-black/70 leading-relaxed pt-1">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
