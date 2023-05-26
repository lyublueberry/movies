<template>
  <div>
    <header-page />
    <div>
      <b-table
        id="table-films"
        :fields="fileds"
        :items="Object.values(listOfFilms)"
        show-empty
        :per-page="0"
        :current-page="currentPage"
        @row-hovered="onRowHovered"
        @row-unhovered="onRowUnhovered"
        >
      </b-table>
      
      <b-pagination
        aria-controls="table-films"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        align="center"
        >
      </b-pagination>

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
import HeaderPage from '@/components/HeaderPage';
import { mapActions, mapGetters } from 'vuex';
import { FIELDS } from '../common/constants';

export default {
  name: 'MoviesList',
  components: {
    HeaderPage
  },
  data() {
    return {
      rowTooltip: null,
      perPage: 2,
      currentPage: 1,
    }
  },
  computed: {
    ...mapGetters([
      'listOfFilms',
      'countPages'
    ]),
    fileds() {
      return FIELDS;
    },
    rows() {
      return this.listOfFilms.length
    }
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
    },
    loadData() {
      let page = this.currentPage.toString();
      this.$store.dispatch('getMovies', page);
    }
  },
  watch: {
    currentPage(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.loadData();
      }
    }
  },
  created() {
    this.getMovies();
    this.loadData();
  }
}
</script>
