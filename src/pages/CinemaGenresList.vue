<template>
  <div>
    <headerPage />
    <div>
      <ul>
        <li v-for="item in ganres" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>


<script>
import HeaderPage from "@/components/HeaderPage";
import ganres from "@/static/ganres.json";

export default {
  components: {
    HeaderPage
  },
  computed: {
    ganres(){
      return ganres;
    }
  }
};
</script>