import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BookDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { getBookById } from "../redux/ducks/product";
import { addToCart, buyProduct } from "../redux/ducks/cart";

const BookDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { book } = useSelector((state: any) => state.product);
  const navigate = useNavigate();
  console.log(book);

  useEffect(() => {
    dispatch(getBookById(id as string));
  }, []);

  if (!book) {
    return <h1>Loading...</h1>;
  }

  const handleAddToCart = (book: IBook) => {
    dispatch(addToCart(book));
    navigate("/cart");
  };

  const handleBuyBook = (book: IBook) => {
    dispatch(buyProduct(book));
    navigate("/cart");
  };
  return (
    <div className="book-detail">
      <div className="row">
        <img src={book.thumbnailUrl} alt={book.title} />
        <h2>${book.price}</h2>
      </div>
      <div className="row">
        <h2>{book.title}</h2>
        <h3>{book.authors.join(", ")}</h3>
        <em>{book.longDescription}</em>
        <div className="book-buy">
          <button
            className="btn btn-danger"
            onClick={() => handleBuyBook(book)}
          >
            Buy Now
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleAddToCart(book)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
