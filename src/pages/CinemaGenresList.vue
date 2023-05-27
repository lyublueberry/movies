<template>
  <div>
    <header-page />
    <div>
      <ul>
        <li v-for="genre in this.listOfGenres" :key="genre.id">{{ genre.genre }}</li>
      </ul>
    </div>
  </div>
</template>


<script>
import HeaderPage from '@/components/HeaderPage';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  components: {
    HeaderPage
  },
  computed: {
    ...mapGetters([
      'listOfGenres',
      'isListGenresLoaded'
    ]),
  },
  methods: {
    ...mapActions([
      'getGenres'
    ]),
    ...mapMutations([
      'SET_LIST_LOADED_GENRES'
    ]),
  },
  created() {
    if(!this.isListGenresLoaded) {
     this.getGenres();
    }
  },
};
</script>