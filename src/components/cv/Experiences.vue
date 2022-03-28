<template>
  <nu-grid flow="row" gap="2x">
    <!-- Categories selector -->
    <nu-flex content="space-around">
      <nu-btngroup value="" use-radiogroup theme="primary">
        <nu-btn value="" @click="selectCategory">Tous</nu-btn>
        <nu-btn
          v-for="cat in categories"
          :key="cat"
          :value="cat"
          @click="selectCategory"
        >
          {{ cat.replace(/^\w/, (c) => c.toUpperCase()) }}
        </nu-btn>
      </nu-btngroup>
    </nu-flex>

    <!-- Cards -->
    <TransitionGroup name="fade">
      <template v-for="ex in items" :key="ex">
        <nu-card
          :data-category="ex['type']"
          class="experience"
          v-show="currentCategory === ex['type'] || currentCategory == null"
        >
          <nu-flow>
            <nu-heading level="3" size="xl" :key="ex['jobTitle']">
              {{ ex["jobTitle"] }}
            </nu-heading>

            <nu-heading level="4" size="md" text="i" theme="primary">
              <nu-datetime
                month
                year
                :key="ex['startDate']"
                :value="ex['startDate']"
              ></nu-datetime>
              -
              <nu-datetime
                month
                year
                v-if="ex['endDate'].length > 0"
                :key="ex['endDate']"
                :value="ex['endDate']"
              ></nu-datetime>
              <nu-el v-else>présent</nu-el>
            </nu-heading>

            <nu-flex gap="0.5x" theme="primary">
              <nu-in :key="ex['company']">{{ ex["company"] }}</nu-in>
              <nu-in :key="ex['type']">({{ ex["type"] }})</nu-in>
            </nu-flex>
          </nu-flow>
        </nu-card>
      </template>
    </TransitionGroup>
  </nu-grid>
</template>

<script>
import {
  get_experiences_categories,
  json_fetch_return,
  FILTER_DESC,
} from "@/assets/utils";

export default {
  name: "Experiences",
  data: () => ({
    items: null,
    categories: null,
    currentCategory: null,
  }),
  watch: {
    currentCategory(newVal) {
      if (newVal == null) {
        // show all cards
        this.showCards(document.querySelectorAll(".experience.hidden"));
      } else {
        // show only cards for this category
        this.showCards(
          document.querySelectorAll(`.experience[data-category='${newVal}']`)
        );
        // hide all other cards
        this.hideCards(
          document.querySelectorAll(
            `.experience:not([data-category='${newVal}'])`
          )
        );
      }
    },
  },
  methods: {
    selectCategory(event) {
      this.currentCategory =
        event.target.value === "" ? null : event.target.value;
    },
    hideCards(cards) {
      cards.forEach((el) => el.classList.add("hidden"));
    },
    showCards(cards) {
      cards.forEach((el) => el.classList.remove("hidden"));
    },
  },
  async created() {
    this.items = await json_fetch_return(
      "/json/experiences.json",
      null,
      FILTER_DESC,
      "startDate"
    );
    this.categories = get_experiences_categories(this.items);
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
  height: 0;
}

.fade-enter-to,
.face-leave-from {
  opacity: initial;
  height: 100%;
}
</style>
