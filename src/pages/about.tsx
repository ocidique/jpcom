import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import CTA from "../components/CTA";

import DotPattern from "../assets/dot_pattern.svg";

const AboutPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="flex space-x-24 my-32">
          <div className="relative w-full md:w-2/5">
            <div
              className="absolute z-30"
              style={{ background: "#9acd32", width: "200px", height: "200px", transform: "rotate(-30deg)" }}
            ></div>

            <div
              className="absolute w-0 h-0 border z-20"
              style={{
                top: "50px",
                left: "120px",
                transform: "rotate(-130deg)",
                borderWidth: "0 100px 170px 100px",
                borderColor: "transparent transparent #cd5c5c transparent",
              }}
            ></div>
            <div className="absolute z-10" style={{ top: "150px", left: "100px", transform: "rotate(-90deg)" }}>
              <DotPattern />
            </div>
            <StaticImage
              src="../assets/juho_profile.jpg"
              alt="Juho Pekkala"
              className="absolute rounded-full z-40 shrink-0"
              style={{ top: "50px", left: "80px" }}
            />
          </div>
          <div className="w-full md:w-3/5 space-y-12 text-zinc-900 mt-12">
            <h2 className="font-semibold uppercase text-5xl">Hi there 👋🏻</h2>
            <div className="flex flex-col space-y-6">
              <p>My name is Juho Pekkala. I warmly thank you finding here and humbly welcome you to my website 🙏🏼</p>
              <p>
                I'm a <span className="font-semibold">full stack developer</span>,{" "}
                <span className="font-semibold">designer</span> and lifelong learner from Finland 🇫🇮. Strongest skill
                set for front end development, eye for design and usability, but also solid skills for back end
                development. Knowledge for distributed systems and cloud. Creative and entrepreneurial mindset.
              </p>
              <p>
                Sometimes I'm lucky to combine my multiple passions at work. I love the variety of tasks; from
                designing software architectures to applications including user interfaces, drawing graphics and
                deciding looks and feels. Sometimes even solve and develop business aspects as well.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <CTA to="#">Read more about me in the introduction post</CTA>
              <CTA to="#">Here to check my CV?</CTA>
              <CTA to="#">Check out my work portfolio</CTA>
              <CTA to="#">Check out my hobby photography</CTA>
              <CTA to="#">Read my blog. I write sometimes</CTA>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
