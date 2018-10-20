import React from 'react';




const Landing = () => (
  <section className="landing w3-flat-midnight-blue w3-animate-opacity" >
    <div className="hero-container w3-display-container w3-content w3-wide"  style={{maxWidth:"1500px"}}>
      <img className="w3-image w3-opacity" src="/assets/images/home/microphoneboy2.jpg" alt="Architecture" width="1500" height="600" ></img>
      <div className="w3-display-middle w3-center">
        <h1 className="hero-title w3-xxxlarge w3-black w3-opacity-min">
          <span className="w3-text-orange w3-padding "><span className="w3-hide-small">Turn the</span> Music Up!</span>
        </h1>
      </div>
    </div>
    <section className="selling-points w3-row-padding" style={{color:"#f0f3f7"}}>
      <div className="point w3-col m4 w3-margin-bottom">
        <span className="w3-xxxlarge"><i className="fa fa-headphones"></i></span>
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point w3-col m4 w3-margin-bottom ">
        <span className="w3-xxxlarge "><i className="fa fa-wifi"></i></span>
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point w3-col m4 w3-margin-bottom">
        <span className="w3-xxxlarge"><i className="fa fa-mobile"></i></span>
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
);

export default Landing;