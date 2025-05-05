<template>
   <div class="container">
     <h1>📋 Listado de Posts</h1>
     <ul class="post-list">
       <li class="post-item" v-for="post in posts" :key="post.id">
       
           <h2 class="post-title">
               {{ post.id + " . " + post.title }}
            </h2>
            
            <div class="links">
               <router-link :to="{ name: 'postdetail', params: { id: post.id } }"> Details </router-link>
            </div>
        </li>   
     </ul>
   </div>
</template>

<script setup lang="ts">
import {Ref ,ref, onMounted } from 'vue'
import IPost from '../interfaces/IPost'
import PostService from '../services/PostService'

let posts: Ref<Array<IPost>> = ref([]);
const service = new PostService();

onMounted(async () => {
  posts.value = await service.getPosts();
});

</script>


<style  scoped>


.container {
   max-width: 800px;
   border-radius: 30px;
   margin: 30px auto;
   padding: 2rem;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   background-color: skyblue  ;
 }

 
 h1 {
   font-size: 2rem;
   margin-bottom: 1.5rem;
   color: #333;
 }
 
 .post-list {
   list-style-type: none;
   padding: 0;
   margin: 0;
 }


 
 .post-item {
   background-color: #ffffff;
  
   margin-bottom: 1rem;
   padding: 1.25rem;
   border-radius: 12px;
   box-shadow: 0 2px 6px rgba(0,0,0,0.1);
   transition: transform 0.2s, box-shadow 0.2s;
 }
 
 .post-item:hover {
   cursor: pointer;    
   transform: scale(1.01);
   box-shadow: 0 4px 12px rgba(0,0,0,0.15);

   .post-title {
       color: #333;
   }
   
 }
 
 .post-title {
   font-size: 1.5rem;
   margin: 0 0 0.5rem;
   text-align: left;
   color: silver;
 }



 
 .post-body {
   font-size: 1rem;
   color: #555;
   line-height: 1.6;
 }

 .links {
   margin-top: 1rem;
   margin-left: 600px;
 }


</style>