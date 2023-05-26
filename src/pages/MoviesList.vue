<template>
  <div>
    <headerPage />
    <div>
      <b-table  
        :items="Object.values(listOfFilms)"
        :fields="fileds"
        @row-hovered="onRowHovered"
        @row-unhovered="onRowUnhovered">
      </b-table>

      <b-tooltip v-if="rowTooltip"
        show
        :target="rowTooltip.target"
        triggers="manual">

        <p v-for="(elem, index) in rowTooltip.item.genres" :key="index">
          {{ elem.genre }}
        </p>
      </b-tooltip>
    </div>
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage";
import { mapActions, mapGetters } from 'vuex';
import { FIELDS } from "../common/constants";

export default {
  name: 'MoviesList',
  components: {
    HeaderPage
  },
  data() {
    return {
      rowTooltip: null,
    }
  },
  computed: {
    ...mapGetters([
      'listOfFilms'
    ]),
    fileds(){
      return FIELDS;
    }
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
