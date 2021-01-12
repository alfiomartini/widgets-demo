import { useEffect, useState } from 'react';

const Route = ({path, children}) =>{

  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  const onLocationChange = () => {
    console.log('Location changed');
    // forces the component to rerender itself
    setCurrentPath(window.location.pathname);
  }

  // only runs when the component first renders to the screen
  useEffect(() =>{
    window.addEventListener('popstate', onLocationChange)
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }
  }, []);

  return(
    currentPath === path
    ? children : null
  )
}

export default Route;