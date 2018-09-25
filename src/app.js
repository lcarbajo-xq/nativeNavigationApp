import React from 'react';
import {
        Text
        } from 'react-native';

import { connect } from 'react-redux';
import Home from './screens/containers/home.js';
import Header from './sections/components/header.js';
import SuggestionList from './videos/containers/suggestion-list';
import CategorieList from './videos/containers/categorie-list';
import API from './utils/api';
import Searcher from './sections/containers/searcher';
import Movie from './screens/containers/movie';

class AppLayout extends React.Component {
    async componentDidMount() {
        const movies =  await API.getSuggestion(10);
        this.props.dispatch({
          type:'SET_MOVIE_LIST',
          payload:{
            movies
          }
        })
    
        const categories =  await API.getMovies();
        this.props.dispatch({
          type:'SET_SUGGESTION_LIST',
          payload:{
            categories
          }
        })
      }
    render() {
        if (this.props.isSelectedMovie) {
            return <Movie />
        } else {
            return (
                <Home>
                    <Header />
                    <Searcher />
                    <CategorieList />
                    <SuggestionList />
                </Home>
            )
        }
    }
}

function mapStateToProps(state, props){
   return { 
       isSelectedMovie:  state.body.selectedMovie
    }
}

export default connect (mapStateToProps)(AppLayout);