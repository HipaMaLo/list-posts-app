import {Ref, ref} from "vue";   
import IPost from "../interfaces/IPost";

class PostService{

private posts:IPost[] ;

constructor(){
    this.posts = [];
}

async getPosts():Promise<Array<IPost>>{
    try
    {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        this.posts = await response.json();
        return this.posts;
    }
    catch (error) { 
        console.error("Error fetching posts:", error);
        throw error; 
    }
}

async getPostById(id: number): Promise<IPost | null> {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      if (response.ok) {
        const post = await response.json() as IPost;
        return post;
      } else {
        console.error("Error fetching post:", response.statusText)
      }
    } catch (error) {
      console.error("Error fetching post:", error)
      throw error
    }
  
    return null
  }
  

}

export default PostService;