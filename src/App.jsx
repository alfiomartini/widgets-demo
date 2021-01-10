import React from 'react';
import Youtube from './components/Youtube';
import Pictures from './components/Pictures';
import WikiSearch from './components/WikiSearch';
import Translator from './components/Translator';
import NavbarCss from './components/NavbarCss';
import Route from './components/Route';


const menu = [
  {
    option:'Videos',
    path:'/'
  },
  {
    option:'Translate',
    path:'/translate'
  },
  {
    option:'Articles',
    path:'/wiki'
  },
  {
    option:'Pictures',
    path:'/pictures'
  }
]

const basePathName = '/widgets';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      component: 'Videos',
      pathname:window.location.pathname
    }
  }

  updateCurrent = (option, path) => {
    this.setState({
      component:option,
      pathname:window.location.pathname
       });
  }

  render(){
    const current = this.state.component;
    // const pathname = this.state.pathname;
    return(
      <div>
         <NavbarCss setSelection={this.updateCurrent} 
                    current={current} options={menu} />
          <Route path={basePathName + '/'}>
            {/* inner component inside a component = children prop */}
             <Youtube />
          </Route>
          <Route path={basePathName}>
             <Youtube />
          </Route>
          <Route path={basePathName + '/translate'}>
             <Translator />
          </Route>
          <Route path={basePathName + '/wiki'}>
             <WikiSearch />
          </Route>
          <Route path={basePathName + '/pictures'}>
             <Pictures/>
          </Route>
      </div>
    )
  }
  
}

export default App;