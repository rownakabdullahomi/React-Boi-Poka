import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utility/addToDb";
import { Helmet } from "react-helmet-async";

const BookDetail = () => {
  const data = useLoaderData();
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);

  const { bookId: currentBookId, image } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };
  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div className="my-12">
      <Helmet>
        <title>Book Detail | {bookId}</title>
      </Helmet>
      <h2>details: {currentBookId}</h2>
      <img className="w-36" src={image} alt="" />
      <br />
      <button
        onClick={() => handleMarkAsRead(currentBookId)}
        className="btn btn-outline btn-accent mr-5"
      >
        Mark asRead
      </button>
      <button
        onClick={() => handleAddToWishList(currentBookId)}
        className="btn btn-accent"
      >
        Add to Wish List
      </button>
    </div>
  );
};

export default BookDetail;
