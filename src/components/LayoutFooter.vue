<template>
  <footer>
    <div class="container">
      <div class="is-flex footer-content">
        <p><small>Copyright © 2019 <a href="/">Ricky Januari</a>.</small></p>
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
  height: 40px;
  line-height: 40px;
}
footer a {
  color: #fff;
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
