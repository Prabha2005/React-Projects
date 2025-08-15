//import logo from './logo.svg';
import './App.css';

import React from "react";
import "./App.css";

function CourseDetails({ courses }) {
  return (
    <div className="section">
      <h2>Course Details</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <strong>{course.name}</strong>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

function BookDetails({ books }) {
  return (
    <div className="section">
      <h2>Book Details</h2>
      {books.map((book, index) => (
        <div key={index}>
          <strong>{book.title}</strong>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
}

function BlogDetails({ blogs }) {
  return (
    <div className="section">
      <h2>Blog Details</h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <strong>{blog.title}</strong>
          <p>{blog.author}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const courses = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/3/2021" }
  ];

  const books = [
    { title: "Master React", price: "670" },
    { title: "Deep Dive into Angular 11", price: "800" },
    { title: "Mongo Essentials", price: "450" }
  ];

  const blogs = [
    { title: "React Learning", author: "Stephen Biz", content: "Welcome to learning React!" },
    { title: "Installation", author: "Schwezdenier", content: "You can install React from npm." }
  ];

  return (
    <div className="container">
      <CourseDetails courses={courses} />
      <BookDetails books={books} />
      <BlogDetails blogs={blogs} />
    </div>
  );
}
