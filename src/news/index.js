import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './style.css'
const baseUrl = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=85f2ad5666bd4993817ed2094527b5e2"
const News = () => {
    const[post,setPost]= useState(null)
    useEffect(() =>{
        axios.get(baseUrl).then((response)=>{
            setPost(response.data.articles)
        })
    },[])
    if(!post) return "Loading ..."
  return (
      <div className='news'>
     <h1 id='news'>WORLD <span>NEWS</span></h1>
        <div className='new-category'>
        {post.map((article, index)=>(
            <div key={index} className='per-news'>
            <img src={article.urlToImage} alt='newsImage'/>
            <p id='description'>{article.description}</p>
            <p><a href={article.url}>{article.title}</a></p>
            <p id='dates'>  Written by {article.author}<span> at {article.publishedAt}</span></p>
         
          
    </div>
))}
    </div>
    </div>
  )
}
export default News

