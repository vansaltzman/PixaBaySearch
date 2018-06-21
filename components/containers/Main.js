import PhotoListContainer from '../containers/PhotoList';
import PhotoDetail from '../containers/PhotoDetail';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator(
  { Search: {screen: PhotoListContainer, 
    navigationOptions: ({ navigation }) => ({
    title: 'Search',
  }),},
    PhotoDetail: {screen: PhotoDetail,
    navigationOptions: ({ navigation }) => ({
      title: `Details`,
    }),},
  },
  {
  initialRouteName: 'Search',
  }
)