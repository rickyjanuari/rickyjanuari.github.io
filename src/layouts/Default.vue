<template>
  <div class="default-layout">
    <layout-navigation></layout-navigation>
    <section class="section">
      <div class="container">
        <slot />
      </div>
    </section>
    <layout-footer />
  </div>
</template>

<script>
import LayoutNavigation from "@/components/LayoutNavigation";
import LayoutFooter from "@/components/LayoutFooter";

export default {
  components: {
    LayoutNavigation,
    LayoutFooter
  }
};
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>


<style>
:root {
  --var-bg: #ffffff;
  --var-txt-color: #2c3e50;
}
body {
  font-family: "Fira Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: var(--var-text-color);
  background-color: var(--var-bg);
  border-top: 7px solid #00adad;
  min-height: 100%;
  position: relative;
}
#app {
  position: relative;
}
</style>

