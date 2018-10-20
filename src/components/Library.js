import React, { Component } from "react";
import { Link } from "react-router-dom";
import albumData from "./../data/albums";

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }
  render() {
    return (
      <div style={{ marginTop: "60px"}}>
        <section className="library w3-row-padding w3-grayscale-min">
          {this.state.albums.map((album, index) => (
            <Link to={`/album/${album.slug}`} key={index}>
              <div className="w3-col l4 m6 w3-margin-bottom">
                <img
                  src={album.albumCover}
                  alt={album.title}
                  style={{ width: "100%" }}
                />
                <div>{album.title}</div>
                <div>{album.artist}</div>
                <div>{album.songs.length} songs</div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    );
  }
}

export default Library;
