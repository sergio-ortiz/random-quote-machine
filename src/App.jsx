import { useSelector, useDispatch } from "react-redux";
import { randomize } from "./features/color/colorSlice";

function App() {
  const color =  useSelector(state => state.color.value);
  const dispatch = useDispatch();

  return (
      <div className={`container-fluid bg-${color} vh-100 text-center`}>
        <div className="row vh-100 justify-content-center align-items-center">
          <div id="quote-box" className="col-3 h-25 card p-4">
            <div className="card-body">
              <figure>
                <blockquote className="blockquote">
                  <h1 id="text" className="card-title"><i className="bi bi-quote"></i>...You&apos;re Broke!!</h1>
                </blockquote>
                <figcaption id="author" className="card-subtitle blockquote-footer text-end">
                  Rather not say
                </figcaption>
              </figure>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a id="tweet-quote" className={`btn btn-${color}`} href="https://twitter.com/intent/tweet?text=testing">
                <i className="bi bi-twitter"></i>
              </a>
              <button onClick={() => dispatch(randomize())} id="new-quote" className={`btn btn-${color}`}>Random</button> 
            </div>
          </div>
        </div>
      </div>
  )
}

export default App

