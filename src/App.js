import React, { Component } from 'react'; 
import {Provider} from 'react-redux';
// import {app} from './Firebase';
import rootReducers from './Reducers';
import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoadingScreen from 'react-loading-screen';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';



import Header from './Components/Header';
import Footer from './Components/Footer';
import CurrentPlayingSong from './Components/CurrentPlayingSong';
import AlbumList from './Components/AlbumList';

import TrackList from './Components/TrackList';
import Songs from './Components/Songs';
import TrackPlayer from './Components/TrackPlayer';
import MediaControl from './Components/MediaControl';

import logo from './Images/logo_size.jpg';
import logoTrans from './Images/logo_transparent_background.png';



const styles = {
  height: 20,
  width: 20,
}








class App extends Component {
  state ={
    loading: true
  }

  componentWillMount(){
    this.setState({loading: true})
  }

  componentDidMount(){
    setTimeout(()=>{

    this.setState({loading: false})

    },4000)
  }
  

  render() {

    const createStoreWithMiddleware = applyMiddleware(promise(), thunk)(createStore);
    const store = createStoreWithMiddleware(rootReducers);


    return (
      <LoadingScreen
        loading ={this.state.loading}
        logoSrc ={logo}
        >
      <Provider store={store}>
        <MuiThemeProvider>
        <Router>
        <div>
        <Header/>
          <Route path='/' exact strict component={TrackPlayer}/>
          <Route path='/albums' component={AlbumList}/>
          <Route path='/records' component={Songs}/> 
        </div>
        </Router>                  
        </MuiThemeProvider>
      </Provider>
      </LoadingScreen>
    );
  }
}





export default App;
