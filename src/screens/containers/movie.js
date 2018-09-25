import React from 'react';
import MovieLayout from '../components/movie-layout';
import Player from '../../videos/containers/player';
import Header from '../../sections/components/header.js';
import { connect } from 'react-redux';
import MovieClose from '../../utils/movie-close';
import MovieDetails from '../../sections/components/movie-details';

class Movie extends React.Component {
    onClose = ()=> {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: null,
            }
        })
    }
  render(){
      return (
        <MovieLayout>
            <Header >
                <MovieClose onPress={ this.onClose }/> 
            </Header>
            <Player />
            <MovieDetails movie={ this.props.movie }/>
        </MovieLayout>
      )
  }
}

function mapStateToProps(state) {
    return {
        movie: state.body.selectedMovie
    }
}

export default connect(mapStateToProps)(Movie);