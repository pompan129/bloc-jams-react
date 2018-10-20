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
      <div className="w3-flat-pomegranate" style={{minHeight: "100vh", paddingTop:"78px"}}>
        <section className="library w3-row-padding">
          {this.state.albums.map((album, index) => (
            <div className="w3-col l3 m4 s6 w3-margin-bottom">
              <Link
                to={`/album/${album.slug}`}
                key={index}
                style={{textDecoration:"none"}}
              >
                <div className="w3-margin-bottom w3-black w3-animate-zoom w3-hover-shadow">
                  <img
                    className="w3-grayscale-min"
                    src={album.albumCover}
                    alt={album.title}
                    style={{ width: "100%" }}
                  />
                  <div className="w3-xlarge">{album.title}</div>
                  <div className="w3-large">{album.artist}</div>
                  <div>{album.songs.length} songs</div>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default Library;
