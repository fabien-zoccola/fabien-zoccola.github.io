<template>
  <Navbar />
  <nu-flex content="center" padding="top 10vh">
    <nu-card clear theme="primary">
      <nu-grid columns="auto" theme="secondary" align="center" gap>
        <nu-heading level="4" size="md">HTTP 404: Not Found</nu-heading>
        <nu-block>Page non trouvée !</nu-block>
      </nu-grid>
    </nu-card>
  </nu-flex>
</template>

<script>
import Navbar from "@/components/elements/Navbar";
export default {
  name: "NotFound",
  components: { Navbar },
};
</script>

<style scoped></style>
