import React from "react";
import Navigation from "../components/Navigation";
import ForestBackground from "../assets/forest.svg";

const IndexPage = () => {
  return (
    <div className="relative">
      <ForestBackground />
      <div className="absolute inset-0 z-20 bg-gradient-to-tl from-lime-900 via-sky-200 to-orange-300 opacity-80 dark:bg-gradient-br dark:from-black dark:via-slate-900 dark:to-cyan-900" />

      <div className="min-h-screen relative z-30">
        <div className="flex flex-col min-h-screen justify-between">
          <div className="space-y-12">
            <Navigation />

            <div className="flex flex-col items-center z-30">
              <div className="mt-40 mb-20 relative">
                <div className="relative z-50">
                  <div
                    className="font-cursive absolute text-zinc-100 text-shadow-xl text-center"
                    style={{ fontSize: "60px", top: "-30px", left: "60px" }}
                  >
                    creative
                  </div>
                  <div
                    className="font-semibold text-zinc-100 text-shadow-xl tracking-tight"
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

                <div className="landing hidden xl:flex">
                  <div className="landing-circle" />
                  <div className="landing-square">
                    <div className="landing-square__left">
                      <p className="welcome font-mono text-zinc-200">welcome to my website</p>
                    </div>
                    <div className="landing-square__right">
                      <p className="slogan font-mono text-zinc-200">only development is permanent</p>
                    </div>
                  </div>
                  <div className="landing-triangle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
