<template>
<div>
  
  <MemeList :memes="memes" />
</div>
</template>

<script>
import MemeList from "../components/MemeList.vue"
export default {
  name: 'Home',
  components: {
    MemeList
  },
  data() {
    return {
    }
  },
  computed: {
    memes() {
      //return this.$root.$data.memes;
      return this.$root.$data.memes.filter(
        meme => meme.week == this.$root.$data.currentWeek
      );
    }
  },
}
</script>
