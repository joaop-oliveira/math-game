import { StyleSheet } from 'react-native';

const genStyle = ({ height }) => ({
  input: {
    width: '90%',
    height: height,
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 3,
    padding: 5,
    margin: 8
  }
});

const styles = props => StyleSheet.create(genStyle(props));

export default styles;
