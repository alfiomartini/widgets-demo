import React from 'react';
import Youtube from './components/Youtube';
import Pictures from './components/Pictures';
import WikiSearch from './components/WikiSearch';
import Translator from './components/Translator';
import NavbarCss from './components/NavbarCss';
import Route from './components/Route';

const basePathName = '/widgets-demo';

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

class App extends React.Component {

  render(){
    return(
      <div>
         <NavbarCss options={menu}
                    basePath={basePathName}
          />
          <Route path={basePathName + '/'}>
            {/* inner component inside a component = children prop */}
             <Youtube />
          </Route>
          <Route path={basePathName}>
            {/* inner component inside a component = children prop */}
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