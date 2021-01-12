import React from 'react';

const Link = ({className, href, children}) => {
  const onClick = (event) => {
    // normal browser behaviour
    if (event.metaKey || event.ctrlKey){
      return;
    }
    // prevents a full page reload
    event.preventDefault();
    window.history.pushState({},'', href);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent)
  }
  return (
    <a onClick = {onClick}
    className={`${className} link`} href={href}>{children}
    </a>
  ) 
}

export default Link;