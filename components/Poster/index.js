import {Poster} from './Poster';
import {connect} from 'react-redux';
import withSpringAnimation from "../../hoc/withSpringAnimation";

const mapStateToProps = state => {
  return {
    configurations: state.configurations,
  }
};
export default withSpringAnimation(connect(mapStateToProps,null)(Poster));