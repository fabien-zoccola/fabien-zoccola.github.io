<template>
  <Navbar />

  <nu-flex flow="column" items="center" gap="2x">
    <nu-attrs for="card" clear padding="2x" theme="primary"></nu-attrs>

    <nu-heading level="2">Présentation Vidéo</nu-heading>
    <nu-card>
      <nu-flow gap align="center">
        <nu-block>
          Cette vidéo relate notre expérience du Hackathon Devops Heroes, et le
          projet que nous avons réalisé durant ce week-end.
        </nu-block>
        <nu-block>
          Vidéo réalisée en collaboration avec Noé Tarbouriech, un de mes
          co-équipiers lors de ce Hackathon.
        </nu-block>
      </nu-flow>
    </nu-card>
    <nu-card>
      <nu-block>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/a7E09PW_Nkw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </nu-block>
    </nu-card>
  </nu-flex>
</template>

<script>
import Navbar from "@/components/elements/Navbar";
export default {
  name: "Video",
  components: { Navbar },
};
</script>

<style scoped></style>
