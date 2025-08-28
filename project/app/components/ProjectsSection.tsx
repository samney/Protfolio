import React from "react";
import Image from "next/image";

export const ProjectsSection = () => {
  return (
    <section
      id="work"
      className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Featured Projects
        </h2>
        <div className="space-y-8 sm:space-y-12">
          {[
            {
              title: "FITYCAL - 3D Scanning Fitness App",
              description:
                "Empowering users to track fitness goals with precision through innovative 3D scanning technology",
              metrics: {
                UsabilityScore: 98,
                UserSatisfaction: 92,
                Accessibility: 100,
              },
              techDetails: [
                "User research & persona development",
                "Information architecture design",
                "Interactive prototyping & testing",
                "Visual design & Simple design system creation",
                "Prototype & usability testing",
              ],
              image: "/ftycall.webp",
              projectUrl:
                "https://www.figma.com/design/SCmP3rFyvDCowgvjJyH01s/Fitycal-application?node-id=0-1&t=S2njswjrH6kjo8Ic-1",
            },
            {
              title: "EQOS - Personalized Dining Discovery",
              description:
                "Revolutionizing dining experiences through intelligent restaurant recommendations and personalized user journeys",
              metrics: {
                UsabilityScore: 80,
                UserSatisfaction: 95,
                Accessibility: 90,
              },
              techDetails: [
                "User journey mapping & experience design",
                "Personalization algorithm UX design",
                "Restaurant discovery interface design",
                "Social features & community building UX",
                "Mobile-first responsive design system",
              ],
              image: "/poster_logo.gif",
              projectUrl:
                "https://www.figma.com/design/N3tD4o7rvbEXEGqT664egx/EQOS?node-id=0-1&t=3VQHBloDHHgNdwbT-1",
              prototypeUrl:
                "https://www.figma.com/proto/N3tD4o7rvbEXEGqT664egx/EQOS?page-id=2%3A3029&node-id=2-12777&p=f&viewport=3552%2C4327%2C0.44&t=LXcvLXPDB9dsmGAy-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A12818&show-proto-sidebar=1",
            },
            {
              title: "DaumTech - Corporate Website",
              description:
                "DAUMTech represents the strategic alliance between UM6P scientific excellence and Domaines Agricoles’ expertise, working together to shape the agriculture of tomorrow.",
              metrics: {
                UsabilityScore: 90,
                UserSatisfaction: 85,
                Accessibility: 90,
              },
              techDetails: [
                "Website UX/UI design",
                "Brand identity design",
                "Brand guidelines documentation",
              ],
              image: "/daumtech.png",
              projectUrl:
                "https://www.figma.com/design/DcLzqFn7yCLYfhYxkUmDVl/Daumtech-UI-Design-website?node-id=0-1&t=WNiOnPpEaB4euvtF-1",
            },
            {
              title: "UM6P Change Makers Platform",
              description:
                "UM6P Change Makers platform, highlighting innovation and collaboration through intuitive navigation and dynamic visuals.",
              metrics: {
                UserEngagement: 92,
                DesignInnovation: 95,
                NavigationEfficiency: 88,
              },
              techDetails: [
                "3D visual",
                "Corporate website",
                "UI/UX design",
                "Innovation showcase interface",
              ],
              image: "/um6pChangemakers.png",
              projectUrl:
                "https://www.figma.com/design/VoTBh0QkKt76YKbJOTm5Ns/ux-um6p?node-id=0-1&p=f",
            },
            {
              title: "Match - Dating App Concept",
              description:
                "A conceptual dating app that reimagines digital connections through innovative UI design, focusing on authentic relationships and meaningful interactions with pixel-perfect attention to detail.",
              techDetails: [
                "High-fidelity UI design with meticulous attention to detail",
                "User experience optimization through design thinking",
                "User-centered interaction design patterns",
              ],
              image: "/matcha.png",
              projectUrl:
                "https://www.figma.com/design/puFkCr2n0jFzwwhiSk5Cam/Work?node-id=56-11123&t=6eLHKvRfgI0XYCle-1",
            },
            {
              title: "AljaridaPro - Legal Announcement Platform",
              description:
                "A comprehensive legal announcement platform that streamlines the publication and management of official legal notices through intuitive design and efficient workflow systems.",
              techDetails: [
                "Legal document management system design",
                "Comprehensive brand identity development",
                "Marketing website design",
                "Web applications design",
              ],
              image: "/aljaridapro.png",
              projectUrl:
                "https://www.figma.com/design/OuUT3VvdmWviAAUewSUju1/UI-UX-ALJARIDA-APP?node-id=0-1&p=f",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-[#21262D] rounded-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {project.title}
                    </h3>
                    <span className="bg-[#1A1F2B] text-green-400 px-3 py-1 rounded-full text-sm font-semibold border border-green-500/40 hover:border-green-400 hover:bg-[#2D333B] transition-all duration-200 whitespace-nowrap">
                      🌟 Freelance
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400">
                    {project.description}
                  </p>
                  {/* Technical Implementation */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                      Technical Implementation
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      {project.techDetails.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span className="text-green-400">▹</span>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    {(project.title === "FITYCAL - 3D Scanning Fitness App" ||
                      project.title ===
                        "EQOS - Personalized Dining Discovery" ||
                      project.title ===
                        "DaumTech - Corporate Digital Identity") && (
                      <p className="text-xs text-gray-400 pt-6">
                        This project overview has been simplified to respect
                        client confidentiality and proprietary information.
                      </p>
                    )}
                  </div>
                  {/* tags and tools of the project like : UI/UX system design / Brand  */}

                  <div className="flex flex-wrap gap-2 mt-4">
                    {(project.title === "FITYCAL - 3D Scanning Fitness App"
                      ? ["UI/UX Design", "Branding Identity", "Prototyping"]
                      : project.title === "EQOS - Personalized Dining Discovery"
                      ? [
                          "UI/UX Design",
                          "UX Research",
                          "Mobile App Design",
                          "Prototyping",
                          "Branding Identity",
                        ]
                      : project.title === "UM6P Change Makers Platform"
                      ? ["Corporate Website", "3D", "UI/UX Design"]
                      : project.title === "Match - Dating App Concept"
                      ? [
                          "Mobile App Design",
                          "UI/UX Design",
                          "Concept Design",
                          "Interaction Design",
                        ]
                      : project.title ===
                        "AljaridaPro - Legal Announcement Platform"
                      ? [
                          "UI/UX Design",
                          "Brand Identity",
                          "Marketing Website",
                          "Web Applications Design",
                        ]
                      : [
                          "Corporate Website",
                          "UI UX",
                          "Wireframing",
                          "Branding Identity",
                        ]
                    ).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#1A1F2B] rounded-full text-sm font-medium text-gray-300 border border-[#2D333B] hover:border-blue-500/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.projectUrl && project.projectUrl !== "#" && (
                      <a
                        className="inline-block px-4 py-2 bg-[#1A1F2B] text-gray-300 rounded-lg border border-blue-500/30 hover:border-blue-400 hover:bg-[#2D333B] hover:text-white transition-all duration-200 font-semibold"
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    )}
                    {project.prototypeUrl && (
                      <a
                        className="inline-block px-4 py-2 bg-[#1A1F2B] text-gray-300 rounded-lg border border-green-500/30 hover:border-green-400 hover:bg-[#2D333B] hover:text-white transition-all duration-200 font-semibold"
                        href={project.prototypeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Prototype
                      </a>
                    )}
                    {(project as { liveUrl?: string }).liveUrl && (
                      <a
                        className="inline-block px-4 py-2 bg-[#1A1F2B] text-gray-300 rounded-lg border border-purple-500/30 hover:border-purple-400 hover:bg-[#2D333B] hover:text-white transition-all duration-200 font-semibold"
                        href={(project as { liveUrl?: string }).liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Project
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
