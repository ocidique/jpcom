<template>
  <div class="min-h-screen bg-zinc-100 dark:bg-zinc-900">
    <div class="layout">
      <header class="header">
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <div style="font-size: 16px;">Testing</div>
        <nav class="nav">
          <g-link
            class="nav__link"
            to="/"
          >
            Home
          </g-link>
          <g-link
            class="nav__link"
            to="/about/"
          >
            About
          </g-link>
          <g-link
            class="nav__link"
            to="/blog/"
          >
            Blog
          </g-link>
          <theme-switcher />
        </nav>
      </header>
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
// import the theme-switcher here
import ThemeSwitcher from "../components/ThemeSwitcher";

// reguster theme-swticher under components
export default {
  components: {
    ThemeSwitcher,
  },
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
