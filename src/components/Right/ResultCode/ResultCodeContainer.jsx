import { connect } from "react-redux";
import ResultCode from "./ResultCode";

const mapStateToProps = state => ({
    stateShadow : state.shadowReducer,
    stateText: state.textReducer,
    stateSpaces: state.spacesReducer
})

const ResultCodeContainer = connect(mapStateToProps)(ResultCode)
export default ResultCodeContainer