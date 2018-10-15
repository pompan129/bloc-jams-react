import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';


class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration, 
      isPlaying: false,
      isPaused: false,
      hovered:null
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      }
    };
    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true, isPaused:false });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false, isPaused:true });
  }   

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }  
      this.play();
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleNextClick() {
    const {songs} = this.state.album;
    const currentIndex = songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.min(songs.length - 1, currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleMouseEnter(song){
    this.setState({ hovered: song });
  }
  handleMouseOut(){
    this.setState({ hovered: null });
  }

  getSpanClass(song){
    const {currentSong,isPaused,isPlaying,hovered} = this.state;
    if(currentSong === song && isPlaying){ return "icon ion-md-pause"}
    if(currentSong === song && isPaused){return "icon ion-md-play-circle"}
    return hovered === song? "icon ion-md-play-circle":null;
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  formatTime(time){
    let seconds = Math.round(time%60);
    if(seconds<10){seconds = '0'+ seconds}
    return Number(time)?
      `${Math.floor(time/60)}:${seconds}`:
      '-:--';
  }

  render() {
    const {songs} = this.state.album;

    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
           <div className="album-details">
           <h1 id="album-title">{this.state.album.title}</h1>
             <h2 className="artist">{this.state.album.artist}</h2>
             <div id="release-info">{this.state.album.releaseInfo}</div>
           </div>
         </section>
         <table id="song-list">
           <colgroup>
             <col id="song-number-column" />
             <col id="song-title-column" />
             <col id="song-duration-column" />
           </colgroup>  
           <tbody>
             {songs.map((song,index)=>{
               const spanClass = this.getSpanClass(song);
                return <tr 
                  className="song"
                  key={index} 
                  onMouseEnter={()=>this.handleMouseEnter(song)}
                  onMouseLeave={()=>this.handleMouseOut()}
                  onClick={() => this.handleSongClick(song)} >
                  <td>
                  <span className={spanClass}>{spanClass?null:index+1}</span>
                  </td>
                  <td>{song.title}</td> 
                  <td>{this.formatTime(song.duration)}</td>
                </tr>
              }
              )}
           </tbody>
         </table>
         <PlayerBar
           isPlaying={this.state.isPlaying}
           currentSong={this.state.currentSong}
           currentTime= {this.audioElement.currentTime}
           duration={this.audioElement.duration}
           handlePrevClick={() => this.handlePrevClick()}
           handleNextClick={() => this.handleNextClick()}
           handleTimeChange={(e) => this.handleTimeChange(e)}
           handleSongClick={() => this.handleSongClick(this.state.currentSong)}
           formatTime={this.formatTime}
         />
      </section>
    );
  }
}

export default Album;