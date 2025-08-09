import React from "react";

export const DesignCapabilitiesSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Design Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "UI/UX Design",
              icon: "🎨",
              features: [
                "User Interface Design",
                "User Experience Design",
                "Visual Design Systems",
              ],
            },
            {
              title: "Prototyping",
              icon: "🔧",
              features: [
                "Interactive Prototypes",
                "Wireframing",
                "Mockup Creation",
              ],
            },
            {
              title: "User Research",
              icon: "🔍",
              features: [
                "User Testing",
                "Journey Mapping",
                "Persona Development",
              ],
            },
            {
              title: "Design Tools",
              icon: "🛠️",
              features: ["Figma", "Adobe Creative Suite", "Framer"],
            },
            {
              title: "Brand Identity",
              icon: "✨",
              features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
            },
            {
              title: "Accessibility",
              icon: "♿",
              features: [
                "WCAG Compliance",
                "Inclusive Design",
                "Usability Testing",
              ],
            },
          ].map((category) => (
            <div
              key={category.title}
              className="group bg-[#161B22] p-6 rounded-lg hover:bg-[#21262D] transition-all"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-gray-400 group-hover:text-gray-300 transition-colors"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
