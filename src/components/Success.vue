<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'success',
  data () {
    return {
      msg: 'Post was made succesfully',
      response: null
    }
  }
}
</script>