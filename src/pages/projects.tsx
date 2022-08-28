import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import WrapperBlock from "../components/WrapperBlock";
import H1 from "../components/H1";

const ProjectsPage = () => {
  return (
    <Layout>
      <WrapperBlock>
        <H1>projects</H1>

        <p className="text-xl lg:text-3xl text-zinc-900 dark:text-zinc-300 leading-normal tracking-wider">
          I do stuff sometimes.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">projects here</div>
      </WrapperBlock>
    </Layout>
  );
};

export default ProjectsPage;
