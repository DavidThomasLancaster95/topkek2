<template>
  <div class="about">

<img src="images/meme1.jpeg" />
<img src="/images/meme1.jpeg" />
<img src="/images/meme1.jpeg" />

    <div class="holder">
      <p></p>
      <div class="bg-text">
        <ul>
          <li v-for="item in this.$root.$data.numberOfWeeks" :key="item.id">
            <p @click="setWeek(item)"><a href="">Week {{ item }}</a></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {};
  },
  methods: {
    setWeek(item) {
      this.$root.$data.currentWeek = item;

      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.about {
  display: flex;
  -ms-flex-align: center;
  width: 100mv;
  justify-content: center;
}
.bg-text {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}

  a:visited { text-decoration: none; color:rgb(185, 185, 185); }
a:hover { text-decoration: none; color:rgb(224, 224, 228); }
a:focus { text-decoration: none; color:rgb(185, 185, 182); }
a:hover, a:active { text-decoration: none; color:black }

</style>
