<template>
  <div class="error">
    <div class="container">
      <div class="row">
        <div class="col-md pt-5 pl-5">
          <h1 class="pt-5">
            Status Code: {{ getHttpMessage(statusCode).statusCode }}
          </h1>
          <p>Message: {{ getHttpMessage(statusCode).message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { Logger } from "@/modules/common/Logger";
import { HttpStatusService } from "../modules/http-status/HttpStatusService";
import { httpStatusCode } from "@/modules/common/httpStatusCode";
import { IHttpStatusService } from "@/modules/http-status/interfaces";

// TODO import from external
interface IHttpStatusCode {
  statusCode: string;
  message: string;
}

@Component
export default class Error extends Vue {
  @Prop()
  private readonly statusCode!: string;
  private readonly logger: Logger = new Logger("Error.vue");
  private readonly httpStatusService: IHttpStatusService = HttpStatusService.getInstance();

  constructor() {
    super();
    this.httpStatusService.setHttpStatusCodeDocs(httpStatusCode);
  }

  getHttpMessage(statusCode: string): IHttpStatusCode {
    return this.httpStatusService.getHttpStatus(statusCode);
  }
}
</script>
