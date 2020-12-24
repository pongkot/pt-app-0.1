<template>
  <div class="error">
    <div class="position-absolute" style="top: 45%; left: 45%;">
      <h1>LogIn</h1>
      <b-col>
        <b-icon icon="three-dots" animation="cylon" font-scale="4"></b-icon>
      </b-col>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { Logger } from "@/modules/common/Logger";

@Component
export default class Login extends Vue {
  @Prop()
  private readonly token!: string;
  private readonly logger: Logger = new Logger("Login.vue");

  private verifyToken(token: string): void {
    if (token) {
      sessionStorage.setItem("loggedIn", "TRUE");
      this.logger.log("sessionStorage `loggedIn` created");
    }
  }

  mounted() {
    if (sessionStorage.getItem("loggedIn") === "TRUE") {
      this.$router.push({ path: "/about" });
    } else {
      this.verifyToken(this.token);
    }
  }
}
</script>
