import Image from "next/image";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1>Joseph Okafor Chidiebere</h1>
        <p>Full-stack Developer | Tech Lead | Entrepreneur</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I am a seasoned Full-stack Developer with 8+ years of professional
          experience in building payment products, CRMs, websites, and startup
          applications. I have expertise in PHP, JavaScript, NodeJS, C#, and
          Python, and I am proficient in various frameworks and libraries,
          including React, Laravel, Vue, and Angular. My strengths lie in
          balancing both Frontend and Backend development, with a focus on user
          experience and data security.
        </p>
      </section>

      <section className="experience">
        <h2>Work Experience</h2>
        <Experience
          title="Full-stack Developer"
          company="Savetown"
          date="Jan 2024 - Present"
          description="Working with MERN stack to fulfill responsibilities such as developing new features, maintaining and securing database systems, contributing to product documentation, and managing servers."
        />

        <Experience
          title="Software Developer"
          company="Landearn Homes"
          date="Dec 2020 - Jan 2024"
          description="Building a simple and intuitive platform for real estate purchases and rentals, with a focus on task-based functionality to empower users and generate income."
        />
      </section>

      <section className="education">
        <h2>Education</h2>
        <p>
          Federal Polytechnic Oko, Anambra state
          <br />
          National Diploma in Computer Engineering (Computer Engineering), 2009
          - 2011
        </p>
      </section>
    </main>
  );
}
