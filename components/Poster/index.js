import {Poster} from './Poster';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    configurations: state.configurations,
  }
};
export default connect(mapStateToProps,null)(Poster);