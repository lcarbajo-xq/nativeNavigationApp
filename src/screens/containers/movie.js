import React from 'react';
import { SafeAreaView } from 'react-native';
import MovieLayout from '../components/movie-layout';
import Player from '../../videos/containers/player';
import Header from '../../sections/components/header.js';
import { connect } from 'react-redux';
import MovieClose from '../../utils/movie-close';
import MovieDetails from '../../sections/components/movie-details';
import { NavigationActions } from 'react-navigation';

class Movie extends React.Component {
    static navigationOptions = ( {navigation} ) => {
        return {
            header: (
                <Header>
                    <MovieClose onPress={ () => 
                        {
                            navigation.goBack();
                        }
                    }
                    /> 
                </Header>
            )
        }
    }      
    onClose = ()=> {
        this.props.dispatch(
            NavigationActions.navigate({
                routeName: 'Home'
            })
        )
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: null,
            }
        })
    }
    render(){
      return (
        <SafeAreaView>
            <MovieLayout>
                <Player />
                <MovieDetails movie={ this.props.movie }/>
            </MovieLayout>
        </SafeAreaView>
      )
  }
}

function mapStateToProps(state) {
    return {
        movie: state.body.selectedMovie
    }
}

export default connect(mapStateToProps)(Movie);