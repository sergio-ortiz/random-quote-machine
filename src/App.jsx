import { useSelector, useDispatch } from "react-redux";
import { getRandomColor } from "./features/color/colorSlice";
import { getRandomQuote } from "./features/quote/quoteSlice";
import { useEffect } from "react";

function App() {
  const color =  useSelector(state => state.color.value);
  const quote = useSelector(state => state.quote.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(
      () => dispatch(getRandomQuote()),
      800
    )
  }, [])


  useEffect(() => {
    dispatch(getRandomColor());
  }, [])

  return (
      <div className={`container-fluid bg-${color} vh-100 text-center`}>
        <div className="row vh-100 justify-content-center align-items-center">
          <div id="quote-box" className="col-4 card p-4">
            <div className="card-body">
              <figure>
                <blockquote className="blockquote">
                  <h1 id="text" className="card-title"><i className="bi bi-quote"></i>{quote.text}</h1>
                </blockquote>
                <figcaption id="author" className="card-subtitle blockquote-footer text-end">
                  {quote.author}
                </figcaption>
              </figure>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a id="tweet-quote" className={`btn btn-${color}`} href="https://twitter.com/intent/tweet?text=testing">
                <i className="bi bi-twitter"></i>
              </a>
              <button 
                onClick={() => {
                  dispatch(getRandomColor());
                  dispatch(getRandomQuote());
                }} 
                id="new-quote" 
                className={`btn btn-${color}`}
              >
                New quote
              </button> 
            </div>
          </div>
        </div>
      </div>
  )
}

export default App

