import React, { Component } from "react";
import "./PlayerBar.css";

class PlayerBar extends Component {
  render() {
    const {
      handlePrevClick,
      handleSongClick,
      handleNextClick,
      handleTimeChange,
      handleVolumeChange,
      currentTime,
      currentVolume,
      isPlaying,
      duration,
      formatTime
    } = this.props;

    return (
      <section
        className="player-bar w3-bottom "
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      >
        <div className="w3-row w3-padding">
          <div className="w3-col m8 track-controls">
            <section id="buttons" className="w3-row-padding">
              <button
                id="previous"
                onClick={this.props.handlePrevClick}
                className="w3-button w3-transparent w3-circle w3-border"
              >
                <span className="fa fa-step-backward" />
              </button>
              <button
                id="play-pause"
                onClick={handleSongClick}
                className="w3-button w3-transparent w3-circle w3-border"
                style={{ margin: "0 5px" }}
              >
                <span className={isPlaying ? "fa fa-pause" : "fa fa-play"} />
              </button>
              <button
                id="next"
                onClick={handleNextClick}
                className="w3-button w3-transparent w3-circle w3-border"
              >
                <span className="fa fa-step-forward" />
              </button>
            </section>
            <section id="time-control" className="w3-row-padding">
              <div className="current-time w3-col s1">
                <span className="w3-right">{formatTime(currentTime)}</span>
              </div>
              <div className="w3-col s10">
                <input
                  type="range"
                  className="seek-bar "
                  value={currentTime / duration || 0}
                  max="1"
                  min="0"
                  step="0.01"
                  onChange={handleTimeChange}
                />
              </div>
              <div className="total-time w3-col s1">
                <span className="w3-left">{formatTime(duration)}</span>
              </div>
            </section>
          </div>
          <section id="volume-control" className="w3-col m4 " style={{height:"100%"}}>
            <section className="w3-row-padding" >
              <span class="w3-padding w3-large  w3-transparent w3-border">{Math.round(currentVolume * 100)}</span>
            </section>
            <section className="w3-row-padding">
              <div className="icon ion-md-volume-low w3-col s1" />
              <input
                type="range"
                className="seek-bar w3-col s10 "
                max="1"
                min="0"
                step="0.01"
                onChange={handleVolumeChange}
                value={currentVolume}
              />
              <div className="icon ion-md-volume-high w3-col s1" />
            </section>
          </section>
        </div>
      </section>
    );
  }
}

export default PlayerBar;
