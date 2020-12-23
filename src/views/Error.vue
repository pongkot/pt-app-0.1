<template>
  <div class="error">
    <h1>Status Code: {{ statusCode }}</h1>
    <p>Message: ???</p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

const ErrorProps = Vue.extend({
  props: {
    statusCode: String
  }
});

export default class Error extends ErrorProps {}
</script>
