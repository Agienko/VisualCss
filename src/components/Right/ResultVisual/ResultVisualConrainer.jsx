import { connect } from "react-redux";
import { changeTextAC } from "../../../redux/reducers/resultVisualReducer";

import ResultVisual from "./ResultVisual";

const mapStateToProps = state => ({
    stateShadow : state.shadowReducer,
    stateText: state.textReducer,
    stateSpaces: state.spacesReducer,
    stateResultVisual: state.resultVisualReducer,
})

const mapDispatchToProps = dispatch => ({
    changeText: text => dispatch(changeTextAC(text)),
})





let ResultVisualConrainer = connect(mapStateToProps, mapDispatchToProps)(ResultVisual)
export default ResultVisualConrainer