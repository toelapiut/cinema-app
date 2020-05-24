import {Explore} from './Explore';
import {connect} from 'react-redux';
import {
  getConfigurationAction,
  getGenreAction,
  getLatestAction,
  getOnTheAirAction,
  getPlayingNowAction,
  getPopularAction,
  getRecentlyAddedAction,
  getTopRatedAction,
  getTrendingAction,
  getUpcomingAction,
} from "../../actions";

const mapStateToProps = state => {
  return {
    latest: state.latest,
    trending: state.trending,
    recent: state.recent,
    configurations: state.configurations,
    genres: state.genre.genres,
    onAir: state.onAir,
    playingNow: state.playingNow,
    popular: state.popular,
    upcoming: state.upcoming,
    topRated: state.topRated,
  }
};

export default connect(mapStateToProps, {
  getRecentlyAddedAction,
  getConfigurationAction,
  getPlayingNowAction,
  getTrendingAction,
  getOnTheAirAction,
  getUpcomingAction,
  getTopRatedAction,
  getPopularAction,
  getLatestAction,
  getGenreAction,

})(Explore);