<template>
  <div class="logout">
    <div class="position-absolute" style="top: 45%; left: 45%;">
      <h1>LogOut</h1>
      <b-col>
        <b-icon icon="three-dots" animation="cylon" font-scale="4"></b-icon>
      </b-col>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Logout extends Vue {
  mounted() {
    sessionStorage.clear();
    this.$router.push("/");
  }
}
</script>
