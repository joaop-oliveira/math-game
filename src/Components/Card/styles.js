import { StyleSheet } from 'react-native';

const genStyle = ({ width, height }) => ({
  card: {
    backgroundColor: 'white',
    width: width,
    height: height,
    flex: 1,
    elevation: 3,
    borderRadius: 4,
    marginBottom: 7,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1.0
  }
});

const styles = props => StyleSheet.create(genStyle(props));

export default styles;
