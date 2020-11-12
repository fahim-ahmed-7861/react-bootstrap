import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {

   const [articles,setArticle]=useState([]);

  
   useEffect(()=>{

      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=95f25ffea51643e892bb1b1c700166e7')
      .then(res =>res.json())
      .then(data =>setArticle(data.articles))

   },[])
    return (
        <div>
            <h1>Top Headline : {articles.length}</h1>

            <ul>

    {articles.map(article => <News article={article}></News>)}

            </ul>

        </div>
    );
};

export default TopHeadline;