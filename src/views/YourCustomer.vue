<template>
  <div class="your-customer">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#" style="font-size: 18px;"
      >Performance Tracking
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-nav-item href="logout">Logout</b-nav-item>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container mt-5">
      <div class="row justify-content-end">
        <div class="col-4">
          <div class="row">
            <div class="col-4">
              <p class="float-right font-weight-bold pt-2">Specialist</p>
            </div>
            <div class="col-8 pl-0">
              <div class="position-relative">
                <div class="position-absolute w-100 pt-1 text-center">
                  <!-- TODO loading: specialist -->
                  <b-icon
                    icon="three-dots"
                    font-scale="2"
                    animation="cylon"
                    v-if="toggle.specialist"
                  ></b-icon>
                </div>
                <b-form-select
                  v-model="form.userId"
                  :options="form.option"
                ></b-form-select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row pt-3 pb-4">
        <div class="col">
          <div class="my-3 p-3 bg-white rounded shadow-sm">
            <pre>userId: {{ form.userId }}</pre>
            <h6 class="border-bottom border-gray pb-2 mb-0">Your customer</h6>
            <div
              class="media text-muted pt-3 position-relative"
              v-for="item in data.customer"
              :key="item['id']"
            >
              <svg
                class="bd-placeholder-img mr-2 rounded"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#007bff" />
                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
              </svg>
              <div
                class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"
              >
                <strong class="d-block text-gray-dark">{{
                    item["accountName"]
                  }}</strong>
                AccountId: {{ item["accountId"] }}
              </div>
              <div class="position-absolute" style="right: 0">
                <button
                  class="btn btn-sm btn-outline-primary mr-1 h5"
                  v-b-modal.modal-center
                >
                  <b-icon icon="pencil-square"></b-icon>
                  Edit KPI
                </button>
                <button class="btn btn-sm btn-outline-primary h5">
                  <b-icon icon="file-earmark-spreadsheet"></b-icon>
                  Table
                </button>
              </div>
            </div>
            <div class="mt-4 mb-2 text-center" v-if="toggle.noContent">
              No Content
            </div>
            <!-- TODO loading: content -->
            <div class="mt-4 mb-2 text-center" v-if="toggle.loadContent">
              <b-icon
                icon="three-dots"
                font-scale="2"
                animation="cylon"
              ></b-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- TODO out of container -->
    <b-modal id="modal-center" centered title="Edit KPI">
      <p class="my-4">Edit KPI</p>
    </b-modal>
    <div class="position-absolute w-25" style="bottom: 5px; right: 20px;">
      <b-alert v-model="alert.specialist.alert" variant="danger" dismissible>
        Error: {{ alert.specialist.message }}
      </b-alert>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Logger } from "@/modules/common/Logger";
import { AdaptorProvider } from "@/modules/provider/AdaptorProvider";
import { ServiceProvider } from "@/modules/provider/ServiceProvider";

@Component
export default class YourCustomer extends Vue {
  private readonly logger: Logger = new Logger("YourCustomer.vue");
  private readonly adaptorProvider: AdaptorProvider = AdaptorProvider.getInstance();
  private readonly serviceProvider: ServiceProvider = ServiceProvider.getInstance();

  toggle = {
    loadContent: true,
    noContent: true,
    specialist: true
  };

  data = {
    customer: [{}]
  };

  alert = {
    specialist: {
      alert: false,
      message: ""
    }
  };

  form = {
    userId: "",
    option: [{}]
  };

  async fetchSpecialistInfoById(id: string): Promise<void> {
    try {
      const SpecialistProfile = await this.adaptorProvider
        .specialist()
        .getProfileById(id);
      this.form.option = await this.serviceProvider
        .specialist()
        .getSpecialistOption(SpecialistProfile);
      this.form.userId = id;
      this.toggle.specialist = false;
    } catch (error) {
      this.alert.specialist.alert = true;
      this.alert.specialist.message = error.message;
    }
  }

  mounted() {
    const specialistId = sessionStorage.getItem("userId"); // TODO refactor to service
    this.fetchSpecialistInfoById(specialistId);
  }
}
</script>
