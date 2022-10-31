import React from "react";
import Layout from "../components/Layout";
import WrapperBlock from "../components/WrapperBlock";
import H1 from "../components/H1";
import SEO from "../components/SEO";

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <Layout>
      <WrapperBlock>
        <H1>page not found</H1>
        <p className="text-zinc-900 dark:text-zinc-300">
          yikes, this is not the page you're looking for!
          <span role="img" aria-label="Droid emoji" className="mx-2">
            🤖
          </span>
        </p>
        {process.env.NODE_ENV === "development" ? (
          <p className="text-zinc-900 dark:text-zinc-300">
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
          </p>
        ) : null}
      </WrapperBlock>
    </Layout>
  );
};

export const Head = () => (
  <SEO title="yikes, this is not the page you're looking for!" description="404: Page Not Found" />
);

export default NotFoundPage;
