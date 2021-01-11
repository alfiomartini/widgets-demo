
const Route = ({path, children}) =>{
  // console.log(path, children.type.name);
  // console.log(window.location.pathname, path);
  return(
    window.location.pathname === path
    ? children : null
  )
}

export default Route;