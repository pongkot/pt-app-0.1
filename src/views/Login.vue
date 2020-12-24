<template>
  <div class="login">
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
import { ITokenAdaptor } from "@/modules/token/interfaces";
import { TokenAdaptor } from "@/modules/token";
import { IAuthAdaptor } from "@/modules/auth/interfaces";
import { AuthAdaptor } from "@/modules/auth";

@Component
export default class Login extends Vue {
  @Prop()
  private readonly token!: string;
  private readonly tokenAdaptor: ITokenAdaptor = TokenAdaptor.getInstance();
  private readonly authAdaptor: IAuthAdaptor = AuthAdaptor.getInstance();
  private readonly logger: Logger = new Logger("Login.vue");
  private readonly defaultPage: string = "/your-customer";

  private async verifyTokenAndRedirect(token: string): Promise<void> {
    if (token) {
      const authed = await this.authAdaptor.getVerify(token);
      this.logger.log(`authed: ${authed}`);
      if (authed) {
        const tokenDecoded: string = await this.tokenAdaptor.decode(token);
        const doc: { userId: string } = JSON.parse(tokenDecoded);
        sessionStorage.setItem("loggedIn", "TRUE");
        this.logger.log("sessionStorage `loggedIn` created");
        sessionStorage.setItem("userId", doc.userId);
        this.logger.log("sessionStorage `userId` created");
        await this.$router.push(this.defaultPage);
      }
    }
  }

  mounted() {
    if (sessionStorage.getItem("loggedIn") === "TRUE") {
      this.$router.push({ path: this.defaultPage });
    } else {
      this.verifyTokenAndRedirect(this.token);
    }
  }
}
</script>
