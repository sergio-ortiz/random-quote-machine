function App() {
  return (
      <div className="container-fluid bg-primary vh-100 text-center">
        <div className="row vh-100 justify-content-center align-items-center">
          <div id="quote-box" className="col-3 h-25 card p-4">
            <div className="card-body">
              <figure>
                <blockquote className="blockquote">
                  <h1 id="text" className="card-title">...You're Broke!!</h1>
                </blockquote>
                <figcaption id="author" className="card-subtitle blockquote-footer text-end">
                  Rather not say
                </figcaption>
              </figure>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a id="tweet-quote" className="btn btn-primary" href="https://twitter.com/intent/tweet?text=testing">
                <i className="bi bi-twitter"></i>
              </a>
              <button id="new-quote" className="btn btn-primary">Random</button> 
            </div>
          </div>
        </div>
      </div>
  )
}

export default App

