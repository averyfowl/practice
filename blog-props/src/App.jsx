import { useState } from 'react'
import Header from './components/Header'
import BlogList from './components/BlogList'
import Footer from './components/Footer'


function App () {
  const storeName = "Start Bootstrap"
  const blogPosts = [
    {
        id: 1,
        title: "Man must explore, and this is exploration at its greatest",
        subTitle: "Problems look mighty small from 150 miles up",
        author: "Start Bootstrap",
        date: "September 24, 2019"
    },{
        id: 2,
        title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        subTitle: "",
        author: "Start Bootstrap",
        date: "September 18, 2019"
    },{
        id: 3,
        title: "Science has not yet mastered prophecy",
        subTitle: "We predict too much for the next year and yet far too little for the next ten.",
        author: "Start Bootstrap",
        date: "August 24, 2019"
    },{
        id: 4,
        title: "Failure is not an option",
        subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
        author: "Start Bootstrap",
        date: "July 8, 2019"
    }
];
  const blogElements = blogPosts.map((post, i) => {
    return (
      <BlogList {...post} key={post.title + i}/>
    )

  })

  return (
    <>
    <div className = "app">
     <Header name = {storeName}/>
     {blogElements}
      <Footer/>
      </div>
    </>
  )
}

export default App
