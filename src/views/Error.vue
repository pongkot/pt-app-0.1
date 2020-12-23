<template>
  <div class="error">
    <div class="container">
      <div class="row">
        <div class="col-md pt-5 pl-5">
          <h1 class="pt-5">Status Code: {{ statusCode }}</h1>
          <p>Message: {{ getHttpMessage(statusCode) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { Logger } from "@/modules/common/Logger";
import { HttpStatusService } from "../modules/http-status/HttpStatusService";

interface IHttpStatusCode {
  statusCode: string;
  message: string;
}

@Component
export default class Error extends Vue {
  private readonly httpStatusService: HttpStatusService = HttpStatusService.getInstance();
  private readonly logger: Logger = new Logger("Error.vue");

  @Prop()
  private readonly statusCode!: string;

  getHttpMessage(statusCode: string): string {
    this.logger.log(`statusCode: ${statusCode}`);
    return this.httpStatusService.getHttpStatusMessage(statusCode);
  }
}
</script>
