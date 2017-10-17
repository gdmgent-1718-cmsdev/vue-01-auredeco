<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form action="POST" @submit.prevent="post">
      <label for="title">Title:</label>
      <input id="title" name="title" placeholder="Title" v-model="title">
      <br>
      <label for="title">Body:</label>
      <textarea id="body" name="body" placeholder="Tekst" v-model="body"></textarea>
      <br>
      <input type="submit">
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'
Vue.use(Router)

export default {
  name: 'create',
  data () {
    return {
      msg: 'Create',
      title: '',
      body: ''
    }
  },
  methods: {
    post: function () {
      axios
        .post('http://cmsdev.localhost/node/',
        {
          '_links': {
            'type': {
              'href': 'http://cmsdev.localhost/rest/type/node/article'
            }
          },
          'title': {
            'value': this.title
          },
          'body': {
            'value': this.body
          },
          'type': {
            'target_id': 'article'
          }
        },
        {
          auth: {
            username: 'admin',
            password: 'secret'
          },
          'headers': {
            'Accept': 'application/hal+json',
            'Content-Type': 'application/hal+json',
            'X-CSRF-Token': 'aDCXQOdcJ4OwXnCd_V0031auvcTi8d9SjrFCG3SAPFQ'
          }
        }).then(function (response) {
          console.log(response)
          this.$router.go('success')
        })
        .catch(function (error) {
          console.log(error)
        })
    }
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
