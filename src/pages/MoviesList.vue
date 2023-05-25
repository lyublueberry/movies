<template>
  <div>
    <headerPage />
    <div>
      <b-table :items="Object.values(listOfFilms)" :fields="fields" @row-hovered="onRowHovered"
        @row-unhovered="onRowUnhovered">
      </b-table>
      <b-tooltip v-if="rowTooltip" show :target="rowTooltip.target" triggers="manual">
        <p v-for="elem in rowTooltip.item.genres" :key="elem">
          {{ elem.genre }}
        </p>
      </b-tooltip>
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
      rowTooltip: null,
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
    onRowHovered(item, _, event) {
      this.rowTooltip = {
        item: item,
        target: event.target
      };
    },
    onRowUnhovered() {
      this.rowTooltip = null;
    }
  }
}
</script>

<style lang="scss" scoped></style>
