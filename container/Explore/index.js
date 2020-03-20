import {Explore} from './Explore';
import {connect} from 'react-redux';
import {getLatestAction, getTrendingAction, getConfigurationAction, getGenreAction,} from "../../actions";

const mapStateToProps = state => {
  return{
    latest:state.latest,
    trending:state.trending,
    configurations:state.configurations
  }
};

export default connect(mapStateToProps,{
  getGenreAction,
  getLatestAction,
  getTrendingAction,
  getConfigurationAction,
})(Explore);