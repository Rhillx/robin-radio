import React, { Component } from 'react'; 
import {Provider} from 'react-redux';
// import {app} from './Firebase';
import rootReducers from './Reducers';
import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



import Header from './Components/Header';
import Footer from './Components/Footer';
import SongInfo from './Components/SongInfo';












class App extends Component {
  


  render() {

    const createStoreWithMiddleware = applyMiddleware(promise(), thunk)(createStore);
    const store = createStoreWithMiddleware(rootReducers);


    return (
      
      <Provider store={store}>
        <MuiThemeProvider>
          <Header headerTitle='Robin Radio'/>
         

          <Footer/>                                 
        </MuiThemeProvider>
      </Provider>
    );
  }
}





export default App;
