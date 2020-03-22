import {Explore} from './Explore';
import {connect} from 'react-redux';
import {
  getLatestAction,
  getTrendingAction,
  getConfigurationAction,
  getGenreAction,
  getOnTheAirAction,
  getPlayingNowAction,
  getRecentlyAddedAction
} from "../../actions";

const mapStateToProps = state => {
  return {
    latest: state.latest,
    trending: state.trending,
    recent: state.recent,
    configurations: state.configurations,
    genres: state.genre.genres
  }
};

export default connect(mapStateToProps, {
  getGenreAction,
  getLatestAction,
  getTrendingAction,
  getOnTheAirAction,
  getPlayingNowAction,
  getConfigurationAction,
  getRecentlyAddedAction,
})(Explore);