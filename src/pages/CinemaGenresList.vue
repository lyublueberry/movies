<template>
  <div>
    <header-page />
    <div>
      <ul>
        <li v-for="item in genres" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>


<script>
import HeaderPage from '@/components/HeaderPage';
import genres from '@/static/genres.json';

export default {
  components: {
    HeaderPage
  },
  computed: {
    genres(){
      return genres;
    }
  }
};
</script>