import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mix.js</h1>
      </header>

      <div id="loader">
        <div className="loader-bar"></div>
        <span>Loading Audio Assets...</span>
      </div>

      <div id="mixer">
        <div id="meters">
          <div className="vu">
            <div className="mask">
              <div className="needle left"
                style={{ transform: 'rotateZ(0deg)' }}
              ></div>
            </div>
            <p className="vu-label">L</p>
          </div>
          <div className="vu">
            <div className="mask">
              <div className="needle right"
                style={{ transform: 'rotateZ(0deg)'}}
              ></div>
            </div>
            <p className="vu-label">R</p>
          </div>
        </div>
        <div id="master">
          <div className="track">
            <div className="fader" style={{ top: '209px' }}></div>
          </div>
          <p className="label">Master</p>
        </div>
      </div>

      <div id="controls"></div>

      <a href="https://github.com/kevincennis/Mix.js">
        <img style={{ position: 'fixed', top: 0, right: 0, border: 0 }} src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png" alt="Fork me on GitHub" />
      </a>
    </div>
  );
}

export default App;
