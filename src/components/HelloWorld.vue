<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in memedata" :key="product.id">
      <div class="info">
          
        <h1>{{product.id}}</h1>
        <p>{{product.year}}</p>
      </div>
      
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    memedata: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
