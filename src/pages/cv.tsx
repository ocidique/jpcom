import React from "react";
import Layout from "../components/Layout";
import WrapperBlock from "../components/WrapperBlock";
import CTA from "../components/CTA";

import DotPattern from "../assets/dot_pattern.svg";
import SEO from "../components/SEO";

const YearLabel = ({ children }: any) => {
  return (
    <div className="inline-block text-sm bg-orange-600 text-white font-medium tracking-wider px-2 py-0.5 rounded-full">
      {children}
    </div>
  );
};

const CVPage = () => {
  return (
    <Layout>
      <WrapperBlock>
        <div className="max-w-3xl mx-auto">
          <div>
            <p className="text-center font-medium text-zinc-900 dark:text-zinc-300 uppercase">Curriculum Vitae</p>
            <h1 className="flex flex-col lg:flex-row justify-center items-center lg:space-x-6 text-6xl font-medium text-center text-zinc-900 dark:text-zinc-300 mt-6 lg:mt-12">
              <span className="font-poppins">developer</span>
              <span className="block lg:hidden">&</span>
              <span className="hidden lg:block font-cursive -mt-4" style={{ fontSize: "100px" }}>
                &
              </span>
              <span className="font-cursive -mt-10" style={{ fontSize: "120px" }}>
                designer
              </span>
            </h1>
          </div>
          <p className="text-orange-600 text-center mt-12">#webdev #frontend #fullstack #uxengineer</p>
          <p className="font-poppins text-xl lg:text-3xl text-zinc-900 dark:text-zinc-300 leading-relaxed tracking-wider py-6 text-center px-12 lg:px-0">
            Hello, is it me you're looking for? A talented modern web software developer? The one who can design and
            code apps that are good looking, diamond cut sharp and accessible! 💎
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="hidden lg:block w-full lg:w-2/5 relative px-12">
            <div className="absolute text-gray-300 dark:text-zinc-700 z-10">
              <DotPattern />
            </div>
            <div
              className="absolute z-10"
              style={{
                top: "280px",
                left: "160px",
                background: "#9acd32",
                width: "200px",
                height: "200px",
                transform: "rotate(-30deg)",
              }}
            ></div>
            <div
              className="absolute w-0 h-0 border z-10"
              style={{
                top: "380px",
                left: "150px",
                transform: "rotate(40deg)",
                borderWidth: "0 100px 170px 100px",
                borderColor: "transparent transparent #cd5c5c transparent",
              }}
            ></div>
            <div
              className="relative transform hover:scale-[1.01] transition-all rounded-xl bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] z-20 w-80"
              style={{ top: "40px", left: "40px" }}
            >
              <div className="p-4 rounded-lg bg-white dark:bg-one-dark-600 space-y-8">
                <p className="italic text-zinc-900 dark:text-zinc-300">
                  “Juho has been a valuable asset in our team. He has shown great multi-talent as a designer and
                  front-end developer”
                </p>
                <p className="italic text-zinc-900 dark:text-zinc-300">
                  “Juho is a dedicated and hardworking person. He always gives input and ideas to develop every day
                  work.”
                </p>
                {/* <div className="flex flex-col space-y-4">
                  <CTA to="#">Portfolio coming soon</CTA>
                  <CTA to="#">Printable CV coming soon</CTA>
                  <CTA to="#">Check the portfolio</CTA>
                  <CTA to="#">Printable CV</CTA>
                </div> */}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5 text-zinc-900 space-y-8 px-4 lg:px-0">
            <div className="space-y-4">
              <h2 className="font-poppins font-semibold text-2xl text-zinc-900 dark:text-zinc-300">Profile</h2>
              <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                A versatile software professional with over 10 years of experience. Lifelong learner. Strongest skill
                set for front-end development, eye for design and usability, also solid skills for back-end
                development. Knowledge of distributed systems and cloud. Creative and entrepreneurial mindset.
              </p>
              <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                I'm eager to build the finest software and like to set into customers' and end users' perspectives when
                delivering the best solutions. A lifelong learning mentality ensures that new technologies and other
                latest and greatest solutions are welcome.
              </p>
              <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                In my free time, I like to challenge myself once in a while mentally and physically. Most of the time
                work already offers challenges so I like to focus on physical exercises and creative hobbies which
                takes the mind elsewhere. However, I constantly have a couple of side projects ongoing.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-poppins font-semibold text-2xl text-zinc-900 dark:text-zinc-300">Expertise</h2>
              <ul className="ml-4 space-y-2 text-lg">
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">Hands-on coding skillz</span>
                </li>
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">HTML, CSS, JavaScript, Typescript, React</span>
                </li>
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">UI/UX, Design Systems, Accessibility, RWD</span>
                </li>
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">
                    Wireframing, UI Protyping, Visual Design, Figma, Sketch
                  </span>
                </li>
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">Python, Django, NodeJS, Java</span>
                </li>
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">REST, GraphQL</span>
                </li>
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">Database Design, Schemas, SQL, NoSQL</span>
                </li>
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">Git</span>
                </li>
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">Azure, AWS</span>
                </li>
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">Agile Methodologies, XP, Scrum Master</span>
                </li>
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">
                    Project management, maintaining project status and priorities
                  </span>
                </li>
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">
                    Roles I've worked as:{" "}
                    <span className="font-semibold">
                      full-stack developer, front-end developer, software designer, UI/UX designer, design system lead
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="font-poppins font-semibold text-2xl text-zinc-900 dark:text-zinc-300">Languages</h2>
              <ul className="ml-4 space-y-2 text-lg">
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">Finnish as native 🇫🇮</span>
                </li>
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">
                    Professional working proficiency in English 🇬🇧
                  </span>
                </li>
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">Måttlig kunskap i svenska 🇸🇪</span>
                </li>
                <li className="list-disc text-orange-600">
                  <span className="text-zinc-900 dark:text-zinc-300">
                    Aprendizaje de conceptos básicos del español 🇪🇸
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-3xl lg:mx-auto space-y-8">
          <div className="space-y-4 px-4 lg:px-0">
            <h2 className="font-poppins font-semibold text-2xl text-zinc-900 dark:text-zinc-300">Education</h2>
            <ul className="flex flex-col space-y-6 lg:space-y-10">
              <li className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 border-t border-zinc-300 dark:border-zinc-700 py-6">
                <div className="w-full lg:w-36">
                  <YearLabel>2017 - 2022</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-300">
                    M.Sc. in CSE - University of Oulu
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                    Studied my master's alongside with full time job. Entrepreneurship as minor studies. The subject of
                    the master's thesis was related to the design systems.
                  </p>
                  {/* <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                    Having few years apart from bachelor's studies made a huge difference. Blog post coming about the
                    journey...
                  </p> */}
                  {/* <CTA to="#">Read about my master's journey</CTA> */}
                </div>
              </li>

              <li className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 border-t border-zinc-300 dark:border-zinc-700 py-6">
                <div className="w-full lg:w-36">
                  <YearLabel>2009 - 2013</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-300">
                    B.Eng. in Oulu University of Applied Sciences
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                    Computer Software Engineering. Orientation to mobile development using Qt. Business as minor
                    studies.
                  </p>
                  {/* <CTA to="#">Read about my journey to becoming an engineer</CTA> */}
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-4 px-4 lg:px-0 pb-12">
            <h2 className="font-poppins font-semibold text-2xl text-zinc-900 dark:text-zinc-300">Experience</h2>
            <ul className="flex flex-col space-y-10">
              <li className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 border-t border-zinc-300 dark:border-zinc-700 py-6">
                <div className="w-full lg:w-36">
                  <YearLabel>2022 -</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-300">
                    Senior Software Developer - Haallas Finland Oy
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                    Long term e-service development. Python, Django, HTML, CSS, JavaScript, TypeScript, React, GraphQL,
                    Tailwind, Design system, Playwright, Azure
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                    Hybrid full-stack developer: responsible for UI/UX design and front-end development.
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                    Participated in various technology, design and marketing activities.
                  </p>
                </div>
              </li>

              <li className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 border-t border-zinc-300 dark:border-zinc-700 py-6">
                <div className="w-full lg:w-36">
                  <YearLabel>2018 - 2021</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-300">
                    Senior Software Developer - Valamis Group Oy
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                    Long term e-service development. Python, Django, HTML, CSS, JavaScript, React, GraphQL, Tailwind,
                    Design system, Azure
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                    Hybrid full-stack developer: responsible for UI/UX design and front-end development.
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                    Organized multiple local tech talks and demo coffees.
                  </p>
                </div>
              </li>

              <li className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 border-t border-zinc-300 dark:border-zinc-700 py-6">
                <div className="w-full lg:w-36">
                  <YearLabel>2017 - 2018</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-300">
                    Senior Software Developer - Arcusys Oy
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                    Long term e-service development. Python, Django, REST, HTML, CSS, React, JavaScript.
                  </p>
                </div>
              </li>

              <li className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 border-t border-zinc-300 dark:border-zinc-700 py-6">
                <div className="w-full lg:w-36">
                  <YearLabel>2013 - 2017</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-300">
                    Software Developer - Arcusys Oy
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                    Various e-service projects. Java, HTML, CSS, JavaScript.
                  </p>
                </div>
              </li>

              <li className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 border-t border-zinc-300 dark:border-zinc-700 py-6">
                <div className="w-full lg:w-36">
                  <YearLabel>2011 - 2014</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-300">Web Developer - Freelance</p>
                  <p className="text-zinc-900 dark:text-zinc-300 text-lg">Wordpress development. PHP, HTML, CSS.</p>
                </div>
              </li>

              <li className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 border-t border-zinc-300 dark:border-zinc-700 py-6">
                <div className="w-full lg:w-36">
                  <YearLabel>2012</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-300">
                    Web Developer - Koodiviidakko Oy
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                    Project gig. Leffatykki.com back-end migration. PHP, HTML, CSS.
                  </p>
                </div>
              </li>

              <li className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 border-t border-zinc-300 dark:border-zinc-700 py-6">
                <div className="w-full lg:w-36">
                  <YearLabel>2012</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-300">
                    Web Developer - ZEF Solutions Oy
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-300 text-lg">Wordpress development. PHP, HTML, CSS.</p>
                </div>
              </li>

              <li className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 border-t border-zinc-300 dark:border-zinc-700 py-6">
                <div className="w-full lg:w-36">
                  <YearLabel>2010</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-300">Web Developer - DreamIT</p>
                  <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                    Summer Job. Product development using PHP, CakePHP, HTML, CSS, JavaScript.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </WrapperBlock>
    </Layout>
  );
};

export const Head = () => <SEO title="CV" description="Juho Pekkala's Curriculum Vitae" />;

export default CVPage;
