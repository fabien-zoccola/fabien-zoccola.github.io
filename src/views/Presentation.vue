<template>
  <Navbar />

  <nu-flex flow="column" padding="4x 0" gap="4x" items="center" align="center">
    <nu-attrs for="flex" flow="column" gap="2x" items="center"></nu-attrs>
    <nu-attrs for="heading" theme="secondary" padding="0.75x bottom"></nu-attrs>
    <nu-attrs
      for="grid"
      width="60vw"
      flow="row"
      columns="50% 50%"
      gap="3x"
      items="flex-start"
      theme="primary"
    ></nu-attrs>

    <nu-heading level="2" padding="1x bottom">Présentation</nu-heading>

    <!-- FUTUR -->
    <nu-flex>
      <nu-heading level="3" size="xl">
        Mon futur :
        <nu-el theme="primary">
          Ingénieur informatique et exploitation Opérationnelle (DO) - Polytech
          Montpellier
        </nu-el>
      </nu-heading>

      <nu-grid>
        <!-- FUTUR - PROJET DE FORMATION -->
        <nu-block align="right">
          <nu-heading level="4" size="lg">Mon projet de formation</nu-heading>
          <nu-block padding="1x right">
            Ma formation envisagée est guidée par l'intérêt que je porte aux
            matières d'architecture et systèmes, et aussi à la programmation. Je
            me dirige ainsi vers Polytech Montpellier, pour suivre une formation
            d'Ingénieur en informatique et exploitation opérationnelle (DevOps),
            qui me permettra d'acquérir les compétences d'administration
            infrastructures, de programmation, et d'algorithmique avancée. Cette
            formation initiale sous statut d'apprenti délivre un diplôme
            d'ingénieur certifié CTI en 3 ans.
          </nu-block>
        </nu-block>

        <!-- FUTUR - PROJET PRO -->
        <nu-block align="left">
          <nu-heading level="4" size="lg">Mon projet professionnel</nu-heading>
          <nu-block padding="1x left">
            Mon projet professionnel est d'évoluer dans le secteur de
            l'informatique, peut-être plus dans le domaine privé. Je
            souhaiterais être ingénieur informatique opérationnelle (DevOps).
            Les niveaux de recrutement sont entre le Bac+3 et le Bac+5. Les
            raisons de ce choix correspondent à mes centres d'intérêts et à mes
            valeurs, ce qui me motive à continuer. La formation d'ingénieur
            informatique de Polytech que je vise prépare aux métiers de
            développeur, d'ingénieur infrastructure, et délivre également
            d'autres compétences utiles au domaine de l'informatique.
          </nu-block>
        </nu-block>
      </nu-grid>
    </nu-flex>
    <!-- FIN FUTUR -->

    <!-- PRESENT -->
    <nu-flex>
      <nu-heading level="3" size="xl">
        Mon présent :
        <nu-el theme="primary">
          DUT Informatique - IUT de Montpellier-Sète
        </nu-el>
      </nu-heading>

      <nu-grid columns="33% 33% 33%" width="80vw">
        <nu-block align="right">
          <!-- PRESENT - FORMATION -->
          <nu-heading level="4" size="lg">Ma formation</nu-heading>
          <nu-block padding="1x right">
            Étudiant passionné des matières informatiques, j'apprécie la
            programmation, l'architecture systèmes et réseaux, et
            l'administration de bases de données. J'ai eu l'opportunité de
            réaliser un stage d'observation au sein de l'entreprise
            <nu-link to="https://www.proxiel.com/">Proxiel</nu-link>,
            spécialisée dans l'administration et le déploiement de systèmes
            informatiques pour les entreprises, durant ma première année
            d'études supérieures. J'effectue actuellement mon stage de fin
            d'études au sein de l'entreprise
            <nu-link to="https://www.sfi.fr/">SFI</nu-link> où j'y suis
            développeur web back-end PHP.
          </nu-block>
        </nu-block>

        <!-- PRESENT - PARTICIPATIONS -->
        <nu-block align="left">
          <nu-heading level="4" size="lg" align="center">
            Mes participations
          </nu-heading>
          <nu-block padding="1x left">
            <nu-list padding="5x left">
              <nu-listitem>
                La
                <nu-link to="https://www.nuitdelinfo.com/">
                  Nuit de l'Info 2020
                </nu-link>
                - Équipe Stilex Huminex
              </nu-listitem>

              <nu-listitem>
                La
                <nu-link to="http://codegamejam.extragames.fr/">
                  Code Game Jam 2021
                </nu-link>
                - Équipe Stilex Huminex

                <!-- Prix CGJ 2021 -->
                <nu-block>
                  Prix remportés :
                  <nu-list>
                    <nu-listitem>Premier prix - médaille d'or</nu-listitem>
                    <nu-listitem>Prix étudiant (prix du public)</nu-listitem>
                  </nu-list>
                </nu-block>
              </nu-listitem>

              <nu-listitem>
                Les Presque 24H des IUT 2021 - Équipe Stilex Huminex

                <!-- Prix P24HIUT 2021 -->
                <nu-block>
                  Prix remportés :
                  <nu-list>
                    <nu-listitem>
                      Prix du plus grand nombre de défis remportés
                    </nu-listitem>
                    <nu-listitem>
                      5<nu-sup>me</nu-sup> place classement Intelligence
                      Artificielle
                    </nu-listitem>
                  </nu-list>
                </nu-block>
              </nu-listitem>
            </nu-list>
          </nu-block>
        </nu-block>

        <!-- PRESENT - REALISATIONS -->
        <nu-block align="left">
          <nu-heading level="4" size="lg">Mes réalisations</nu-heading>
          <nu-block padding="1x left">
            Parmi mes projets universitaires :
            <nu-list padding="5x left">
              <nu-listitem>
                Un site web en HTML/CSS, dans le cadre du cours de conception
                HTML
              </nu-listitem>
              <nu-listitem>
                Un site WordPress, au cours de l'UE de gestion de projet
              </nu-listitem>
              <nu-listitem>
                Un jeu de société (Bang!) en Java, dans le cadre de l'UE (Unité
                d'Enseignement) de programmation orientée objet
              </nu-listitem>
              <nu-listitem>
                Une interface graphique du jeu Bang!, dans la continuité de la
                création de celui-ci, dans le cadre de l'UE d'IHM (Interaction
                Homme-Machine)
              </nu-listitem>
              <nu-listitem>
                Une application de jeu de Takuzu en PHP, dans le cadre du projet
                de semestre 3
              </nu-listitem>
              <nu-listitem>
                Un site d'e-commerce fictif en PHP, dans le cadre de l'UE de
                programmation web
              </nu-listitem>
            </nu-list>
          </nu-block>
        </nu-block>
      </nu-grid>
    </nu-flex>
    <!-- FIN PRESENT -->

    <!-- PASSE -->
    <nu-flex>
      <nu-heading level="3" size="xl">Mon passé :</nu-heading>

      <nu-grid>
        <nu-block align="center">
          <nu-heading level="4" size="lg">Mes diplômes</nu-heading>
          <nu-block>
            <nu-heading level="5" size="xxl" theme="primary">
              2020 - Baccalauréat Scientifique
            </nu-heading>
            <nu-block> Lycée Georges Pompidou, Castelnau-Le-Lez </nu-block>
            <nu-block> Mention Très Bien </nu-block>
          </nu-block>
        </nu-block>

        <nu-block align="center">
          <nu-heading level="4" size="lg">Mes expériences</nu-heading>
          <nu-block>
            <nu-heading level="5" size="xxl" theme="primary">
              2017 - Stage d'observation chez
              <nu-link to="https://www.devensys.com/">Devensys</nu-link>
            </nu-heading>
            <nu-block>
              Ce stage d'observation, réalisé dans le cadre de l'année de 3ème,
              m'a permis de découvrir les métiers de la sécurité informatique et
              de confirmer mes projets dans le secteur de l'informatique.
            </nu-block>
          </nu-block>
        </nu-block>
      </nu-grid>
    </nu-flex>
    <!-- FIN PASSE-->
  </nu-flex>
</template>

<script>
import Navbar from "@/components/elements/Navbar";

export default {
  name: "Presentation",
  components: { Navbar },
};
</script>

<style scoped></style>
