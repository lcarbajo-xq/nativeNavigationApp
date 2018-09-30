import {
    TextInput,
    StyleSheet
    } from 'react-native';
import React, { Component } from 'react';
import API from '../../utils/api';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class Searcher extends Component {
    state = {
        text: ''
    }
    handleSubmit = async () => {
        const movies = await API.getSearchedMovie(this.state.text);
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: movies[0],
            }
        })
        this.props.dispatch(
            NavigationActions.navigate({
                routeName:'Movie'
            })
        )
    }
    handleChangeText = (text) => {
        this.setState({
            text
        })
    }
    render() {
        return(
            <TextInput
                placeholder="Busca tu peliula favorita"
                autoCorrect={ false }
                autoCapitalize="none"
                onSubmitEditing={  this.handleSubmit }
                onChangeText={ this.handleChangeText }
                style={ styles.input }
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
      padding: 15,
      fontSize: 15,
      borderWidth: 1,
      borderColor: '#eaeaea'
    }
  })

export default connect(null)(Searcher);