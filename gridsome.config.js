// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "juho pekkala",
  siteDescription: "Write a description here",
  siteUrl: "https://juhopekkala.com",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag",
            create: true
          },
        }
      }
    },
  ],
  templatess: {
    Tag: "/tag/:id",
    Post: "/blog/:title"
  },
  transformers: {
    remark: {
      // global remark options
    }
  }
}
