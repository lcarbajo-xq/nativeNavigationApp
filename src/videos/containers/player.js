import React, { Component } from 'react';
import {
        StyleSheet,
        ActivityIndicator,
        Text,
        } from 'react-native';
import Video from 'react-native-video';
import VideoLayout from '../components/video-layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import ProgressBar from '../components/progress-bar';
import Timer from '../components/timer';
import FullScreen from '../components/fullscreen';

class Player extends Component {
  state = {
    loading: true,
    paused: true,
    nowTime:  0,
    duration: 0,
    currentTime: 0,
    changedTime: 0,
    isFullScreenPresent: false,
  }
  onBuffer = ({isBuffering}) => {
    this.setState({
      loading: isBuffering
    })
  }
  onLoad = () => {
    this.setState({
      loading: false
    })
  }
  playPause = () => {
    this.setState({
      paused: !this.state.paused
    })
  }
  sliderChangeValue = (value) => {
    this.setState({
        changedTime: this.state.duration * value,
      })
  }
  setTime = (current) => {
    this.setState({
      duration: current.seekableDuration,
      total: current.playableDuration,
      currentTime:  current.currentTime,
    })
  }
  // presentFullScreen = () => {
  //   if (this.state.isFullScreenPresent) {
  //     this.player.dismissFullscreenPlayer();
  //   } else {
  //     this.player.presentFullscreenPlayer();
  //   }
  //   this.setState({
  //     isFullScreenPresent: !this.state.isFullScreenPresent,
  //   })
  // }
  render() {
    return (
      <VideoLayout
        loading={this.state.loading}
          video={
            <Video
              ref={(ref) => {
                this.player = ref
              }}
              source={{uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
              style={styles.video}
              muted
              resizeMode="contain"
              currentTime={this.state.changedTime}
              onBuffer={this.onBuffer}
              onLoad={this.onLoad}
              paused={this.state.paused}
              onProgress={this.setTime}
              />
              }
          loader={
            <ActivityIndicator color= 'grey' />
          }
          controls={
            <ControlLayout>
              <PlayPause onPress={this.playPause}
                         paused={this.state.paused}/>
              <ProgressBar
                sliderActualValue={this.sliderChangeValue}
                duration={this.state.duration}/>
              <Timer
                actualTime={timeReadable(this.state.currentTime)} //READABALE
                totalTime={timeReadable(this.state.duration)}
                />
              <FullScreen
                isFullScreen={() => {this.player.presentFullscreenPlayer()}}
                />
            </ControlLayout>
          }
        >
        </VideoLayout>
    )
  }
}

function timeReadable (time) {
  let duration = time / 60;
  let mins = Math.floor(duration);
  let seconds = duration % 1;
  seconds = (seconds * 60) / 1000;
  let currentTime = (mins + seconds * 10).toFixed(2);
  return currentTime;
}

const styles = StyleSheet.create ({
  video: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
})

export default Player;
