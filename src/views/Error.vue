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
import { Vue } from "vue-property-decorator";
import { httpStatusCode as httpStatusList } from "../modules/common/httpStatusCode";

interface IHttpStatusCode {
  statusCode: string;
  message: string;
}

const ErrorProps = Vue.extend({
  props: {
    statusCode: String
  }
});

export default class Error extends ErrorProps {
  private readonly httpStatus: Array<{
    statusCode: string;
    message: string;
  }> = httpStatusList;

  getHttpMessage(statusCode: string): string {
    const pickUpStatusCode: Array<IHttpStatusCode> = this.httpStatus.filter(
      (doc: IHttpStatusCode) => doc.statusCode === statusCode
    );
    const result: string = pickUpStatusCode[0]
      ? pickUpStatusCode[0].message
      : "Invalid status code";
    return result;
  }
}
</script>
