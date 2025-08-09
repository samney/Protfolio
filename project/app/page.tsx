import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { DesignCapabilitiesSection } from './components/DesignCapabilitiesSection';
import { AboutMeSection } from './components/AboutMeSection';
import { ContactSection } from './components/ContactSection';

export default function WebDeveloperPortfolio() {
	return (
		<main className="min-h-screen bg-[#0D1117] text-white">
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<DesignCapabilitiesSection />
			<AboutMeSection />
			<ContactSection />
		</main>
	);
}
