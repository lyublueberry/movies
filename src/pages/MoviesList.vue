<template>
  <div class="">
    <headerPage />
    <div>
      <b-table :items="Object.values(listOfFilms)" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage";
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'MoviesList',
  components: {
    HeaderPage
  },
  data() {
    return {
      fields: ['nameRu', 'nameEn', 'rating', 'year', 'filmLength'],
    }
  },
  computed: {
    ...mapGetters([
      'listOfFilms'
    ]),
  },
  created() {
    this.getMovies();
  },
  methods: {
    ...mapActions([
      'getMovies'
    ]),
  }
}
</script>

<style lang="scss" scoped></style>
