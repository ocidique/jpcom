const React = require("react");

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement("script", {
      key: "theme-switcher",
      dangerouslySetInnerHTML: {
        __html: `
      (function(){
        const userPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const defaultTheme = userPrefersDark ? "dark" : "light";
        document.documentElement.className = defaultTheme;
      })();
    `,
      },
    }),
  ]);
};
