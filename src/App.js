import React, { Component } from 'react'; 
import {Provider} from 'react-redux';
// import {app} from './Firebase';
import rootReducers from './Reducers';
import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoadingScreen from 'react-loading-screen';



import Header from './Components/Header';
import Footer from './Components/Footer';
import SongInfo from './Components/SongInfo';
import AlbumDetail from './Components/AlbumDetails';

import logo from './Images/logo_size.jpg';












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
          <Header headerTitle='Robin Radio'/>
         

          <AlbumDetail/>                                 
        </MuiThemeProvider>
      </Provider>
      </LoadingScreen>
    );
  }
}





export default App;
