<template>
    <div class="container">
      <h1>Post detalle N° {{ post.id }}</h1>
      <div class="post-detail" v-if="post.id !== 0">
        <h2>{{ post.title }}</h2>
        <p> {{ post.body }} </p>
        <div class="links">
          <router-link :to="{ name: 'posts' }">Back to Posts</router-link>
        </div>
      </div>
      <div v-else>
        <p>Cargando...</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import { ref, onMounted, Ref } from 'vue'
  import PostService from '../services/PostService'
  import IPost from '../interfaces/IPost'
  
  const route = useRoute()
  const postId = Number(route.params.id)
  const service = new PostService()

  const post:Ref<IPost> = ref({
    id: 0,
    title: '',
    body: ''
  })
  
  onMounted(async () => {
    const fetchedPost = await service.getPostById(postId)
    if (fetchedPost !== null) {
      post.value = fetchedPost
    }
  })
  </script>

    
<style scoped lang="scss">

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
}

.post-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.links {
  margin-top: 20px;
}

h1 {
  font-size: 2.5em;
  color: orangered;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

.post-detail h2 {
  font-size: 1.5em;
  color: #555;
  margin: 10px 0;
}

.post-detail p {
  margin: 10px 0;
  font-size: 1.2em;
}

.post-detail h1 {
  margin-bottom: 20px;
  font-size: 2em;
  color: orange
}




</style>