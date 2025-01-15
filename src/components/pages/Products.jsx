import React, { useState } from "react";

const Product = () => {
  const [comments, setComments] = useState([]);

  const handleComment = (text) => {
    setComments([...comments, text]);
  };

  return (
    <main>
      <h1>Our Chats</h1>
      <ul>
        <li>
          <h2>Chat 1</h2>
          <p>Description of Chat 1</p>
        </li>
        <li>
          <h2>Chat 2</h2>
          <p>Description of Chat 2</p>
        </li>
      </ul>
      <section>
        <h3>Leave a Comment</h3>
        <textarea onBlur={(e) => handleComment(e.target.value)} />
        <ul>
          {comments.map((comment, idx) => (
            <li key={idx}>{comment}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Product;
