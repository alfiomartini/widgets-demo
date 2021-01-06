import { React, Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:''
    }
  }

  onInputChange = (event) => {
    const value = event.target.value;
    this.setState({search:value});

  }

  
  onSearch = () =>{
    const  input  = this.state.search;
    // get callback from parent component (App)
     const { onSearchSubmit } = this.props;
    onSearchSubmit(input);
  }


  render(){
    return(
      // the author uses forms and onSubmit event listener
      <div className='search-box'>
        <div className="ui small action input">
          <input type="text" 
           placeholder="Image Search..."
           onChange={this.onInputChange}
           value = {this.state.input} 
           />
          <button className="ui button"
           onClick = {this.onSearch}>Search</button>
        </div>
      </div>
    )
  }
}

export default SearchBox;
