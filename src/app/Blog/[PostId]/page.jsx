import React from 'react';

// TODO : Fetch data from an API instead of using static data 

const blogsData = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    author: "John Smith",
    category: "Web Development",
    description: "A beginner-friendly guide to learning HTML, CSS, and JavaScript.",
    date: "2026-09-01"
  },
  {
    id: 2,
    title: "10 JavaScript Tips for Beginners",
    author: "Emma Wilson",
    category: "JavaScript",
    description: "Useful JavaScript tips that can help beginners write cleaner and better code.",
    date: "2026-09-04"
  },
  {
    id: 3,
    title: "Why React Is So Popular",
    author: "David Brown",
    category: "React",
    description: "Learn why React has become one of the most popular libraries for building modern web applications.",
    date: "2026-09-07"
  },
  {
    id: 4,
    title: "Understanding REST APIs",
    author: "Sophia Davis",
    category: "Backend",
    description: "An introduction to REST APIs and how frontend applications communicate with servers.",
    date: "2026-09-10"
  },
  {
    id: 5,
    title: "How to Become a Better Programmer",
    author: "Michael Lee",
    category: "Programming",
    description: "Practical habits and strategies that can help you improve your programming skills.",
    date: "2026-09-14"
  }
];

const PostDetailPage = async ({params}) => {

    const {PostId}= await params
    const post = blogsData.find(post => post.id === parseInt(PostId))

    return (
        <div>
            <h2>Post Detail Page : {PostId}</h2>

            {
                post && <div>
                    <h3>{post.title}</h3>
                    <p>{post.author}</p>
                    <p>{post.description}</p>
                </div>
            }
        </div>
    );
};

export default PostDetailPage;
