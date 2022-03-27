
import { connect } from "react-redux";
import { setLetterSpaceAC, setLineHeightAC, setWordSpaceAC } from "../../../redux/reducers/spacesReducer";
import Spaces from "./Spaces";

const mapStateToProps = state => ({state : state.spacesReducer})

const mapDispatchToProps = dispatch =>({
       setLetterSpace: value => dispatch(setLetterSpaceAC(value)),
       setWordSpace:  value => dispatch(setWordSpaceAC(value)),
       setLineHeight:  value => dispatch(setLineHeightAC(value)),
    })

const SpacesContainer = connect(mapStateToProps, mapDispatchToProps)(Spaces)

export default SpacesContainer