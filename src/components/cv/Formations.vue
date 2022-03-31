<template>
  <nu-grid flow="row" gap="2x">
    <template v-for="forma in items" :key="forma">
      <nu-card>
        <nu-flow>
          <!-- Name -->
          <nu-heading level="3" size="xl" :key="forma['name']">
            {{ forma["name"] }}

            <!-- Date -->
            <nu-el size="md" text="n i" theme="primary" padding="1x left">
              <nu-datetime
                year
                :key="forma['startDate']"
                :value="forma['startDate']"
              ></nu-datetime>
              -
              <nu-datetime
                year
                v-if="forma['endDate'].length > 0"
                :key="forma['endDate']"
                :value="forma['endDate']"
              ></nu-datetime>
              <nu-el v-else>présent</nu-el>
            </nu-el>
          </nu-heading>

          <!-- Honours -->
          <nu-heading
            level="4"
            size="md"
            theme="primary"
            v-if="forma['honours'].length > 0"
          >
            Mention : {{ forma["honours"] }}
          </nu-heading>

          <!-- Additional info -->
          <nu-flow>
            <nu-block
              v-for="c in forma['additional_info']"
              class="info"
              :key="c"
              theme="primary"
            >
              {{ c }}
            </nu-block>
          </nu-flow>
        </nu-flow>
      </nu-card>
    </template>
  </nu-grid>
</template>

<script>
import {
  json_fetch_return,
  FILTER_DESC_THEN_ALPHABETICAL,
  set_title,
} from "@/assets/utils";

export default {
  name: "Formations",
  data: () => ({
    items: null,
  }),
  async created() {
    set_title("Formation");
    this.items = await json_fetch_return(
      "/json/formations.json",
      null,
      FILTER_DESC_THEN_ALPHABETICAL,
      "startDate",
      "name"
    );
  },
};
</script>

<style scoped></style>
