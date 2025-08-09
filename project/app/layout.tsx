import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saad M. - UI UX Designer",
  description:
    "Welcome to my portfolio! I am a passionate UX Engineer crafting intuitive, user-centered digital experiences. Specializing in UI/UX design and user research, I transform complex problems into elegant solutions that drive engagement and deliver measurable results.",
  keywords: [
    "UX Engineer",
    "UI/UX Designer",
    "User Experience Designer",
    "User Interface Designer",
    "UX Researcher",
    "Product Designer",
    "Interaction Designer",
    "Design Systems",
    "User-Centered Design",
    "Digital Product Design",
    "Figma",
    "Prototyping",
    "Wireframing",
    "User Research",
    "Usability Testing",
    "Information Architecture",
    "User Journey Mapping",
    "Visual Design",
    "Responsive Design",
    "Web Design",
    "Mobile App Design",
    "Design Thinking",
    "Human-Computer Interaction",
    "Accessibility Design",
    "Webflow",
    "Adobe Creative Suite",
    "Framer",
    "Morocco UX Designer",
    "Saad Mney",
  ],
  authors: [{ name: "Saad M." }],
  creator: "Saad M.",
  openGraph: {
    title: "Saad M. - UI UX Designer Portfolio",
    description:
      "Welcome to my portfolio! I am a passionate UX Engineer crafting intuitive, user-centered digital experiences. Specializing in UI/UX design and user research, I transform complex problems into elegant solutions that drive engagement and deliver measurable results.",
    url: "https://saadmney.com",
    siteName: "Saad M. - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saad M. - UI UX Designer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad M. - UI UX Designer Portfolio",
    description:
      "Welcome to my portfolio! I am a passionate UX Engineer crafting intuitive, user-centered digital experiences. Specializing in UI/UX design and user research, I transform complex problems into elegant solutions that drive engagement and deliver measurable results.",
    creator: "@saadmney",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
