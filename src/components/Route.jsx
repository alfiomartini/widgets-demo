
const Route = ({path, children}) =>{
  // console.log(path, children.type.name);
  return(
    window.location.pathname === path
    ? children : null
  )
}

export default Route;