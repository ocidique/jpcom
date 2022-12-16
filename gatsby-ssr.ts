const React = require("react");

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("script", {
      key: "theme-switcher",
      dangerouslySetInnerHTML: {
        __html: `
      (function(){
        const userPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const defaultTheme = userPrefersDark ? "dark" : "light";
        const theme = localStorage.getItem("theme") || defaultTheme;
        document.documentElement.className = theme;
      })();
    `,
      },
    }),
  ]);
};
