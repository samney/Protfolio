"use client";
import React, { useState } from "react";
import { RequestQuoteForm } from "./RequestQuoteForm";

export const AboutMeSection = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  
  // Reusable styles
  const cardStyles = "bg-[#161B22] rounded-lg p-6 hover:bg-[#1A1F2B] transition-all";
  const tagStyles = "px-3 py-1 bg-[#1A1F2B] rounded-full text-xs font-medium text-gray-300 border border-[#2D333B] hover:border-blue-500/50 transition-colors";
  
  // Reusable components
  const SectionTitle = ({
    icon,
    children,
  }: {
    icon: string;
    children: React.ReactNode;
  }) => (
    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
      <span className="text-xl">{icon}</span>
      {children}
    </h4>
  );

  const Card = ({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <div className={`${cardStyles} ${className}`}>{children}</div>;

  return (
    <section className="py-12 sm:py-20 px-4 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">
          About Me
        </h2>

        {/* Hero Introduction */}
        <Card className="mb-8 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="text-5xl">👋</div>
            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Hello, I&apos;m Saad Mney
              </h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                A passionate freelance UI/UX designer specializing in crafting
                intuitive digital experiences that bridge the gap between user
                needs and business objectives. With a keen eye for detail and
                a user-centered approach, I transform complex problems into
                elegant, accessible solutions.
              </p>
            </div>
          </div>
        </Card>

        {/* Main Grid - 3 Columns on Desktop, 1-2 on Mobile/Tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Contact Information */}
          <Card>
            <SectionTitle icon="📍">Contact Info</SectionTitle>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Email</div>
                  <a href="mailto:saad.mney1@gmail.com" className="text-white font-medium hover:text-blue-400 transition-colors">
                    saad.mney1@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xl">📱</span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Phone</div>
                  <a href="tel:+212699730783" className="text-white font-medium hover:text-blue-400 transition-colors">
                    +212 699 730 783
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xl">🌍</span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Location</div>
                  <div className="text-white font-medium">Benguerir, Morocco</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Key Achievements */}
          <Card>
            <SectionTitle icon="🏆">Key Achievements</SectionTitle>
            <div className="grid grid-cols-2 gap-4">
              {[
                { metric: "14+", label: "Projects" },
                { metric: "92%", label: "Satisfaction" },
                { metric: "100%", label: "Accessibility" },
                { metric: "7+", label: "Years Exp." },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {stat.metric}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Core Values */}
          <Card className="md:col-span-2 lg:col-span-1">
            <SectionTitle icon="⚡">Core Values</SectionTitle>
            <div className="space-y-4">
              {[
                { icon: "🎨", title: "User-Centered", desc: "Every decision starts with user needs" },
                { icon: "🔍", title: "Detail-Oriented", desc: "Perfection in every pixel" },
                { icon: "🚀", title: "Results-Driven", desc: "Design that delivers impact" },
              ].map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">{value.icon}</span>
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">
                      {value.title}
                    </div>
                    <div className="text-xs text-gray-400 leading-relaxed">
                      {value.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Bottom Row - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Design Philosophy */}
          <Card>
            <SectionTitle icon="🎯">Design Philosophy</SectionTitle>
            <p className="text-gray-400 leading-relaxed mb-4">
              I believe great design is invisible—it solves problems so
              seamlessly that users don&apos;t have to think about it. Every
              pixel serves a purpose, every interaction tells a story, and
              every project is an opportunity to create something meaningful.
            </p>
            
            <div className="p-4 bg-[#1A1F2B] rounded-lg border-l-4 border-green-500/50">
              <p className="text-sm text-gray-400 italic">
                &quot;Design is not just what it looks like and feels like. Design is how it works.&quot;
              </p>
              <p className="text-xs text-green-400 mt-1">— Steve Jobs</p>
            </div>
          </Card>

          {/* Skills & Expertise */}
          <Card>
            <SectionTitle icon="🌟">Skills & Expertise</SectionTitle>
            <div>
              <h5 className="text-sm font-semibold text-white mb-3">Areas of Focus</h5>
              <div className="flex flex-wrap gap-2">
                {[
                  "User Psychology",
                  "Design Systems",
                  "Accessibility",
                  "Problem Solving",
                  "Collaboration",
                  "Visual Storytelling",
                  "Strategic Thinking",
                  "Product Design",
                  "User Interface Design",
                  "Interaction Design",
                  "Usability Testing"
                ].map((skill, index) => (
                  <span key={index} className={tagStyles}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
              <span className="relative px-6 py-3 bg-[#161B22] rounded-full inline-flex items-center justify-center">
                Start a Project
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <a
              href="https://www.linkedin.com/in/mneys/"
              className="px-6 py-3 bg-[#21262D] rounded-full hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      {/* Quote Form Modal */}
      <RequestQuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)} 
      />
    </section>
  );
};