import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Smart Inventory Expiry Alert System",
    category: "Full Stack Web App",
    tools: "React, Node.js, Express, MongoDB, JWT",
    image: "/images/01.png",
  },
  {
    name: "HireLens",
    category: "Full Stack Web App",
    tools: "React, Supabase, PostgreSQL, Vite",
    image: "/images/02.png",
  },
  {
    name: "British Academy",
    category: "Frontend Web Development",
    tools: "HTML, CSS, JavaScript",
    image: "/images/03.png",
  },
  {
    name: "IZAN",
    category: "UI/UX Design",
    tools: "Figma, Adobe Creative Suite",
    image: "/images/04.png",
  },
  {
    name: "Pharmacy Management System",
    category: "Full Stack Web App",
    tools: "HTML, CSS, JavaScript, MySQL",
    image: "/images/05.jpeg",
  },
  {
    name: "Personal Portfolio",
    category: "UI/UX Design & Frontend",
    tools: "HTML, CSS, JavaScript, Figma",
    image: "/images/06.png",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
