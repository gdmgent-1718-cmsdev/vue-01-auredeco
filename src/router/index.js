import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Read from '@/components/ReadArticle'
import Post from '@/components/PostArticle'
import Success from '@/components/Success'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/read',
      name: 'ReadArticle',
      component: Read
    },
    {
      path: '/post',
      name: 'PostArticle',
      component: Post
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    }
  ]
})
