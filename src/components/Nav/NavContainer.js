import { connect } from "react-redux";
import Nav from "./Nav";

let mapStateToProps = (state) => {
  console.log(state)
  return {
    state: state.sideBar
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)

export default NavContainer
