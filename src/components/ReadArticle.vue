<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2> {{ response.title[0].value }} </h2>
    {{ response.body[0].value }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'read',
  data () {
    return {
      msg: 'Read',
      response: null
    }
  },
  created () {
    let self = this
    axios
      .get('http://cmsdev.localhost/node/1?_format=hal_json')
      .then(response => {
        self.response = response.data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
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
  color: #35495E;
}
</style>
