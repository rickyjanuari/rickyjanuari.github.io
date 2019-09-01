<template>
  <header>
    <nav class="navbar container" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <!-- <img class="avatar-logo" src="../assets/img/ricky.jpeg" alt="Ricky Januari Logo" /> -->
          <img src="../assets/img/logo.png" alt="Ricky Januari Logo" />
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <g-link class="navbar-item is-uppercase" active-class to="/about" >About</g-link>
          <g-link class="navbar-item is-uppercase" active-class  to="/work">Work</g-link>
          <g-link class="navbar-item is-uppercase" active-class to="/blog">Blog</g-link>
          <g-link class="navbar-item is-uppercase" active-class to="/video">Video</g-link>
          <g-link class="navbar-item is-uppercase" active-class to="/contact">Contact</g-link>
        </div>
      </div>
      <search-component />
    </nav>
  </header>
</template>

<script>
import SearchComponent from "@/components/SearchComponent";

export default {
  name: "LayoutNavigation",
  components: {
    SearchComponent
  },
  mounted() {
    const navbarBurgers = document.querySelectorAll(".navbar-burger");
    navbarBurgers.forEach(menu => {
      menu.addEventListener("click", () => {
        const target = document.getElementById(menu.dataset.target);
        menu.classList.toggle("is-active");
        target.classList.toggle("is-active");
      });
    });
  }
};
</script>

<style>
/* .brand {
  margin-left: 5px;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
} */
header {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.13);
    padding: 0.25rem
}
.avatar-logo {
  border-radius: 50%;
}
.navbar {
    
    background: none;
}
.active--exact {
  color:  #00adad;
}
.navbar-brand a.navbar-item {
  margin-left: 0px !important;
}

.navbar-item {
  font-family: "Oswald", sans-serif;
  font-size: 18px;
}
a.navbar-item:hover {
  background-color: white;
  color: #00adad;
}
</style>
