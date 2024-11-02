import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const data = useLoaderData();
    const {bookId} = useParams();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id)

    const {bookId: currentBookId, image} = book;

    return (
        <div className="my-12">
            <h2>details: {bookId}</h2>
            <img className='w-36' src={image} alt="" />
            <br />
            <button className="btn btn-outline btn-accent mr-5">Read</button>
            <button className="btn btn-accent">Wish List</button>
        </div>
    );
};

export default BookDetail;