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

      {/* sliders */}
{/* 
<script type="text/template" id="tmpl-track">
    <div>
      <button class="btn mute {{muted}}">M</button>
      <button class="btn solo {{soloed}}">S</button>
      <button class="btn afl {{afl}}">PFL</button>
      <div class="pan">
        <div class="panner" style="-webkit-transform: rotate({{pan}}deg); -moz-transform: rotate({{pan}}deg);">
          <div class="pan-indicator"></div>
        </div>
      </div>
      <div class="track">
        <canvas class="meter" width="8" height="280"></canvas>
        <div class="fader" style="top: {{gain}}px;"></div>
      </div>
      <p class="label">{{name}}</p>
    </div>
  </script> */}

{/* controls */}
      {/* <script type="text/template" id="tmpl-controls">
    <canvas class="clock" width="360" height="120"></canvas>
    <div class="buttons">
      <button class="btn-cntrl start"></button>
      <button class="btn-cntrl rw"></button>
      <button class="btn-cntrl play {{playing}}"></button>
      <button class="btn-cntrl ff"></button>
    </div>
  </script> */}

      <a href="https://github.com/kevincennis/Mix.js">
        <img style={{ position: 'fixed', top: 0, right: 0, border: 0 }} src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png" alt="Fork me on GitHub" />
      </a>
    </div>
  );
}

export default App;
