import React, { Component, Fragment } from 'react';
import {
        Text,
        StatusBar
        } from 'react-native';

import { connect } from 'react-redux';
import Header from '../../sections/components/header';
import SuggestionList from '../../videos/containers/suggestion-list';
import CategorieList from '../../videos/containers/categorie-list';
import API from '../../utils/api';
import Searcher from '../../sections/containers/searcher';
import Movie from '../../screens/containers/movie';

class Home extends Component {
    static navigationOptions = () => {
      return {
        header: Header,
        title: 'Inicio'
      }
    }
    async componentDidMount() {
        this.focus = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
          })
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
      componentWillUnmount() {
          this.focus.remove();
      }
    render() {
        if (this.props.isSelectedMovie) {
            return <Movie />
        } else {
            return (
                <Fragment>
                    <Searcher />
                    <CategorieList />
                    <SuggestionList />
                </Fragment>
            )
        }
    }
}

function mapStateToProps(state, props){
   return { 
       isSelectedMovie:  state.body.selectedMovie
    }
}

export default connect (mapStateToProps)(Home);
