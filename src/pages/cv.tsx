import React from "react";
import Layout from "../components/Layout";
import CTA from "../components/CTA";

import DotPattern from "../assets/dot_pattern.svg";

const YearLabel = ({ children }) => {
  return (
    <div className="inline-block text-sm bg-orange-700 text-zinc-200 font-medium tracking-wider px-2 py-0.5 rounded-full">
      {children}
    </div>
  );
};

const CVPage = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-6">
            <p className="text-center font-medium text-zinc-900 dark:text-zinc-200 uppercase">Curriculum Vitae</p>
            <h1 className="text-6xl font-medium text-center text-zinc-900 dark:text-zinc-200">Developer & Designer</h1>
          </div>
          <p className="text-orange-700 text-center">#web #frontend #fullstack #developer #designer</p>
          <p className="text-3xl text-zinc-900 dark:text-zinc-200 leading-normal tracking-wider py-6">
            Hello, is it me you're looking for? A talented modern web software developer? The one who can design and
            code UI's that are good looking, diamond cut sharp and accessible! 💎
          </p>
        </div>
        <div className="flex space-x-12">
          <div className="w-2/5 relative px-12">
            <div className="absolute text-gray-200 dark:text-zinc-700 z-10">
              <DotPattern />
            </div>
            <div
              className="absolute z-10"
              style={{
                bottom: "180px",
                left: "180px",
                background: "#9acd32",
                width: "200px",
                height: "200px",
                transform: "rotate(-30deg)",
              }}
            ></div>
            <div
              className="absolute w-0 h-0 border z-10"
              style={{
                bottom: "120px",
                left: "170px",
                transform: "rotate(40deg)",
                borderWidth: "0 100px 170px 100px",
                borderColor: "transparent transparent #cd5c5c transparent",
              }}
            ></div>
            <div
              className="relative shadow-md border dark:border-zinc-700 rounded-lg p-6 bg-white dark:bg-zinc-800 z-20 space-y-8 w-80"
              style={{ top: "60px", left: "60px" }}
            >
              <p className="italic text-zinc-900 dark:text-zinc-200">
                Juho has been a valuable asset in our team. He has shown great multi-talent as a designer and front-end
                developer
              </p>
              <p className="italic text-zinc-900 dark:text-zinc-200">
                Juho is a dedicated and hardworking person. He always gives input and ideas to develop every day work.
              </p>
              <div className="flex flex-col space-y-4">
                <CTA to="#">Portfolio coming soon</CTA>
                <CTA to="#">Printable CV coming soon</CTA>
                {/* <CTA to="#">Check the portfolio</CTA>
                <CTA to="#">Printable CV</CTA> */}
              </div>
            </div>
          </div>
          <div className="w-3/5 text-zinc-900 space-y-8">
            <div className="space-y-4">
              <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">About me</p>
              <p className="text-zinc-900 dark:text-zinc-200">
                Senior Software Developer with over 10 years of experience. Lifelong learner. Strongest skill set for
                front end development, eye for design and usability, but also solid skills for back end development.
                Knowledge for distributed systems and cloud. Creative and entrepreneurial mindset.
              </p>

              <p className="text-zinc-900 dark:text-zinc-200">
                On my freetime I like to challenge myself once in a while mentally and physically. Most of the time
                work already offers challenges so I like to focus on physical exercises and creative hobbiess. My
                permanent favourite is the gym and recent new hobby is golf.
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">Expertise</p>
              <ul className="ml-4 space-y-2">
                <li className="list-disc text-orange-700">
                  <span className="text-zinc-900 dark:text-zinc-200">Eager to build the finest software</span>
                </li>
                <li className="list-disc text-orange-700">
                  <span className="text-zinc-900 dark:text-zinc-200">HTML/CSS/TS/JS/React</span>
                </li>
                <li className="list-disc text-orange-700">
                  <span className="text-zinc-900 dark:text-zinc-200">Design Systems</span>
                </li>
                <li className="list-disc text-orange-700">
                  <span className="text-zinc-900 dark:text-zinc-200">
                    UI/UX/Usable, accessible and responsive web design
                  </span>
                </li>
                <li className="list-disc text-orange-700">
                  <span className="text-zinc-900 dark:text-zinc-200">Azure/AWS</span>
                </li>
                <li className="list-disc text-orange-700">
                  <span className="text-zinc-900 dark:text-zinc-200">Python/Django/NodeJS/Java</span>
                </li>
                <li className="list-disc text-orange-700">
                  <span className="text-zinc-900 dark:text-zinc-200">REST/GraphQL</span>
                </li>
                <li className="list-disc text-orange-700">
                  <span className="text-zinc-900 dark:text-zinc-200">Database Design/Schemas/SQL/NoSQL</span>
                </li>
                <li className="list-disc text-orange-700">
                  <span className="text-zinc-900 dark:text-zinc-200">Hands on coding skillz</span>
                </li>
                <li className="list-disc text-orange-700">
                  <span className="text-zinc-900 dark:text-zinc-200">Agile Methodologies, XP, Scrum Master</span>
                </li>
                <li className="list-disc text-orange-700">
                  <span className="text-zinc-900 dark:text-zinc-200">
                    Project management, maintaining project status and priorities
                  </span>
                </li>
                <li className="list-disc text-orange-700">
                  <span className="text-zinc-900 dark:text-zinc-200">Over 10 years of experience</span>
                </li>
                <li className="list-disc text-orange-700">
                  <span className="text-zinc-900 dark:text-zinc-200">
                    Roles I've worked as:{" "}
                    <span className="font-semibold">
                      full-stack developer, front-end developer, software designer, UI/UX designer, design system lead
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">Languages</p>
            <ul className="ml-4 space-y-2">
              <li className="list-disc text-orange-700">
                <span className="text-zinc-900 dark:text-zinc-200">Finnish is my native language</span>
              </li>
              <li className="list-disc text-orange-700">
                <span className="text-zinc-900 dark:text-zinc-200">Professional working proficiency in English</span>
              </li>
              <li className="list-disc text-orange-700">
                <span className="text-zinc-900 dark:text-zinc-200">Moderate proficiency in Swedish</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">Education</p>
            <ul className="flex flex-col space-y-10">
              <li className="flex bg-white dark:bg-zinc-800 space-x-4 rounded-lg shadow-md border dark:border-zinc-700 p-6">
                <div className="w-44">
                  <YearLabel>2017 - 2022</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">
                    M.Sc. in Computer Science - University of Oulu
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-200">
                    Studied my master's alongside with full time job. Entrepreneurship as minor studies. The subject of
                    the master's thesis was related to the design system.
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-200">
                    Having few years apart from bachelor's studies made a huge difference. Blog post coming about the
                    journey...
                  </p>
                  {/* <CTA to="#">Read about my master's journey</CTA> */}
                </div>
              </li>

              <li className="flex bg-white dark:bg-zinc-800 space-x-4 rounded-lg shadow-md border dark:border-zinc-700 p-6">
                <div className="w-44">
                  <YearLabel>2009 - 2013</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">
                    B.Eng. in Oulu University of Applied Sciences
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-200">
                    Computer Software Engineering. Orientation to mobile development using Qt. Business as minor
                    studies.
                  </p>
                  {/* <CTA to="#">Read about my journey to becoming an engineer</CTA> */}
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-4 pb-12">
            <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">Experience</p>
            <ul className="flex flex-col space-y-10">
              <li className="flex bg-white dark:bg-zinc-800 space-x-4 rounded-lg shadow-md border dark:border-zinc-700 p-6">
                <div className="w-44">
                  <YearLabel>2022 -</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">
                    Senior Software Developer - Haallas Finland Oy
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-200">
                    Long term e-service development. Python, Django, HTML, CSS, JavaScript, React, GraphQL, Tailwind,
                    Design system, Azure
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-200">
                    Hybrid developer: responsible for UX/UI design and front-end development.
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-200">
                    Participated in various marketing and design activities.
                  </p>
                </div>
              </li>

              <li className="flex bg-white dark:bg-zinc-800 space-x-4 rounded-lg shadow-md border dark:border-zinc-700 p-6">
                <div className="w-44">
                  <YearLabel>2018 - 2021</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">
                    Senior Software Developer - Valamis Group Oy
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-200">
                    Long term e-service development. Python, Django, HTML, CSS, JavaScript, React, GraphQL, Tailwind,
                    Design system, Azure
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-200">
                    Hybrid developer: responsible for UX/UI design and front-end development.
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-200">Organized multiple tech talks and demo coffees.</p>
                </div>
              </li>

              <li className="flex bg-white dark:bg-zinc-800 space-x-4 rounded-lg shadow-md border dark:border-zinc-700 p-6">
                <div className="w-44">
                  <YearLabel>2017 - 2018</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">
                    Senior Software Developer - Arcusys Oy
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-200">
                    Long term e-service development. Python, Django, REST, HTML, CSS, React, JavaScript
                  </p>
                </div>
              </li>

              <li className="flex bg-white dark:bg-zinc-800 space-x-4 rounded-lg shadow-md border dark:border-zinc-700 p-6">
                <div className="w-44">
                  <YearLabel>2013 - 2017</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">
                    Software Developer - Arcusys Oy
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-200">
                    Various e-service projects. Java, HTML, CSS, JavaScript.
                  </p>
                </div>
              </li>

              <li className="flex bg-white dark:bg-zinc-800 space-x-4 rounded-lg shadow-md border dark:border-zinc-700 p-6">
                <div className="w-44">
                  <YearLabel>2011 - 2014</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">Web Developer - Freelance</p>
                  <p className="text-zinc-900 dark:text-zinc-200">Wordpress development. PHP, HTML, CSS</p>
                </div>
              </li>

              <li className="flex bg-white dark:bg-zinc-800 space-x-4 rounded-lg shadow-md border dark:border-zinc-700 p-6">
                <div className="w-44">
                  <YearLabel>2012</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">
                    Web Developer - Koodiviidakko Oy
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-200">
                    Project gig. Leffatykki.com back-end migration. PHP, HTML, CSS.
                  </p>
                </div>
              </li>

              <li className="flex bg-white dark:bg-zinc-800 space-x-4 rounded-lg shadow-md border dark:border-zinc-700 p-6">
                <div className="w-44">
                  <YearLabel>2012</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">
                    Web Developer - ZEF Solutions Oy
                  </p>
                  <p className="text-zinc-900 dark:text-zinc-200">Wordpress development. PHP, HTML, CSS.</p>
                </div>
              </li>

              <li className="flex bg-white dark:bg-zinc-800 space-x-4 rounded-lg shadow-md border dark:border-zinc-700 p-6">
                <div className="w-44">
                  <YearLabel>2010</YearLabel>
                </div>
                <div className="w-full space-y-4">
                  <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">Web Developer - DreamIT</p>
                  <p className="text-zinc-900 dark:text-zinc-200">
                    Summer Job. Product development using PHP, CakePHP, HTML, CSS, JavaScript.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CVPage;
