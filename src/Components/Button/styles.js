import { StyleSheet } from 'react-native';
import COLORS from '../../lib/consts';

const genStyle = ({ elevation, color }) => ({
  button: {
    width: '70%',
    // height: 50,
    backgroundColor: COLORS[color],
    lineHeight: 1.2,
    padding: 16,
    elevation: elevation,
    borderRadius: 2,
    position: 'relative',
    alignContent: 'center',
    marginBottom: 3,
    marginTop: 3
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  }
});

const styles = props => StyleSheet.create(genStyle(props));

export default styles;
