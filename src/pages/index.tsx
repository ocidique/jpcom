import React from "react";
import Navigation from "../components/Navigation";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <div className="relative">
      <StaticImage
        src="../assets/forest.png"
        alt=""
        className="frontpage-bg w-screen h-screen absolute bottom-0 left-0 z-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-20 bg-gradient-to-tl from-lime-900 via-sky-200 to-orange-300 opacity-80 dark:bg-gradient-br dark:from-black dark:via-slate-900 dark:to-cyan-900" />

      <div className="min-h-screen relative z-30">
        <div className="flex flex-col min-h-screen justify-between">
          <div className="space-y-12">
            <Navigation />

            <div className="hidden lg:flex flex-col items-center z-30">
              <div className="mt-40 mb-20 relative">
                <div className="relative z-50">
                  <div
                    className="font-cursive absolute text-zinc-100 text-shadow-xl text-center"
                    style={{ fontSize: "60px", top: "-32px", left: "55px", transform: "rotate(-6deg)" }}
                  >
                    creative
                  </div>
                  <div
                    className="font-poppins font-semibold text-zinc-100 text-shadow-xl tracking-tight"
                    style={{ fontSize: "80px" }}
                  >
                    developer
                  </div>
                  <div
                    className="font-cursive -mt-16 text-zinc-100 text-shadow-xl"
                    style={{
                      position: "relative",
                      fontSize: "90px",
                      left: "230px",
                      top: "45px",
                      transform: "rotate(-9deg)",
                    }}
                  >
                    & designer
                  </div>
                </div>

                <div className="landing hidden lg:flex">
                  <div className="landing-circle" />
                  <div className="landing-square">
                    <div className="landing-square__left">
                      <p className="welcome font-mono text-zinc-900 dark:text-zinc-200 text-3xl">juho pekkala</p>
                    </div>
                    <div className="landing-square__right">
                      <p className="slogan font-mono text-zinc-900 dark:text-zinc-200">
                        only development is permanent
                      </p>
                    </div>
                  </div>
                  <div className="landing-triangle" />
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:hidden text-3xl space-y-2 px-4">
              <div>
                <p className="text-center text-xl font-medium text-zinc-900 dark:text-zinc-300 uppercase mb-6">
                  Juho Pekkala
                </p>
                <h1 className="flex flex-col lg:flex-row relative justify-center items-center lg:space-x-6 text-6xl font-medium text-center text-zinc-100 text-shadow-xlmt-6 lg:mt-12">
                  <span
                    className="font-cursive relative text-shadow-xl text-center"
                    style={{ fontSize: "50px", top: "10px", left: "-50px", transform: "rotate(-6deg)" }}
                  >
                    creative
                  </span>
                  <span className="font-poppins font-semibold text-shadow-xl tracking-tight">developer</span>
                  <span className="block lg:hidden font-cursive text-shadow-xl">&</span>
                  <span className="hidden lg:block font-cursive -mt-4" style={{ fontSize: "100px" }}>
                    &
                  </span>
                  <span
                    className="font-cursive text-shadow-xl -mt-10"
                    style={{ fontSize: "120px", transform: "rotate(-9deg)" }}
                  >
                    designer
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
