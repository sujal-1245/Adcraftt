import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

// Sections
import Navbar from "../sections/Navbar";
import Services from "../sections/Services";
import Showcase from "../sections/Showcase";
import Process from "../sections/Process";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import TechMarquee from "../sections/TechMarquee";

gsap.registerPlugin(ScrollTrigger);

// ✅ Updated arrays (removed 2nd video + text)
const videos = [
  "https://videos.pexels.com/video-files/2792370/2792370-hd_1920_1080_30fps.mp4",
  "https://videos.pexels.com/video-files/3129576/3129576-uhd_2560_1440_30fps.mp4",
  "https://videos.pexels.com/video-files/25744121/11904048_2560_1440_25fps.mp4",
];

const texts = [
  "Crafting Timeless Digital Experiences",
  "Creativity Meets Engineering",
  "Let’s Build Something Iconic",
];

const LandingPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // ✅ Smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ Ensure videos visible at start (fix vanish-on-reload)
    gsap.set(".video-section", { opacity: 1 });

    const sections = gsap.utils.toArray(".video-section");

    sections.forEach((section, i) => {
      if (i === sections.length - 1) return; // last one no pin

      // Pin each section so it holds in place while next overlaps
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });

      // ✅ Smooth fade transition between sections (fixed ghosting)
      gsap.fromTo(
        section,
        { opacity: 1 },
        {
          opacity: 0,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top top", // ✅ changed from "center center"
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    // ✅ Text fade-in effect
    gsap.utils.toArray(".video-text").forEach((textEl) => {
      gsap.fromTo(
        textEl,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textEl,
            start: "top 80%",
          },
        }
      );
    });

    ScrollTrigger.refresh();

    // ✅ Cleanup correctly
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-black text-white font-sans overflow-x-hidden"
    >
      <Navbar />

      {/* Cinematic stacked videos */}
      <div className="relative">
        {videos.map((video, i) => (
          <section
            key={i}
            className="video-section relative h-screen w-full flex items-center justify-center overflow-hidden"
          >
            {/* Background Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text */}
            <div className="relative z-10 text-center px-6 max-w-3xl">
              <h1 className="video-text text-5xl md:text-7xl font-bold tracking-tight">
                {texts[i]}
              </h1>
            </div>
          </section>
        ))}
      </div>

      {/* Normal sections (start AFTER video stack ends) */}
      <div className="relative z-20 bg-black">
        <Services />
        <TechMarquee />
        <Showcase />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
