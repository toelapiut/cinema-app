import {Search} from './Search';
import {connect} from 'react-redux';
import {getAiringTodayAction} from '../../actions';

const mapStateToProps = state => {
  return{
    genres: state.genre.genres,
    airing: state.airing,
  }
};

export default connect(mapStateToProps, {
  getAiringTodayAction,
})(Search);