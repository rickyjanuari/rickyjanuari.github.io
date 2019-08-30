<template>
  <footer>
    <div class="container">
      <div class="is-flex footer-content">
        <p>Made with ❤️ in Bandung, Indonesia.</p>
        <social-links />
      </div>
    </div>
  </footer>
</template>

<script>
import SocialLinks from "@/components/SocialLinks";

export default {
  name: "layout-footer",
  components: {
    SocialLinks
  }
};
</script>

<style>
footer {
  background-color: #00adad;
  height: 60px;
  line-height: 60px;
}
footer p {
  color: white;
}
.footer-content {
  flex-wrap: wrap;
}
@media screen and (max-width: 767px) {
  footer p {
    padding-left: 10px;
  }
}
</style>
