import {CarouselItem} from './CarouselItem';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    configurations: state.configurations,
  }
};
export default connect(mapStateToProps, null)(CarouselItem);
