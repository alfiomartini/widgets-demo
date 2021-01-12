import React from 'react';

class Link extends React.Component {
  constructor(props){
    super(props);
    this.state = {
         path:window.location.pathname,
         href:this.props.href
        }
  }
 
  onClick = (event) => {
    // console.log('wlp, href', window.location.pathname, this.props.href);
    // normal browser behaviour
    if (event.metaKey || event.ctrlKey){
      return;
    }
    // prevents a full page reload
    event.preventDefault();
    window.history.pushState({},'', this.props.href);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  render(){
    return (
      <a onClick = {() => {
          this.onClick(); this.setState({path:window.location.pathname});
        }}
        className={`${window.location.pathname=== this.props.href?'active':''} link`} 
        href={this.props.href}>
        {this.props.children}
      </a>
    ) 
  }
}

export default Link;