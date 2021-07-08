import React from 'react';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { updateThemeAction } from '../actions/actions';

function BackgroundThemeButton(props) {
  const [isChecked, setIsChecked] = React.useState(false);


  const handleChange = async () => {
    props.updateThemeAction(!isChecked)
    setIsChecked(!isChecked);
  };

  return (
    <Box style={{display:'flex', alignItems:'center'}}>
      <p>
        Dark Theme
      </p>
      <Switch
        checked={isChecked}
        onChange={handleChange}
        color="secondary"
        inputProps={{ 'aria-label': 'primary checkbox' }} />
    </Box>

  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateThemeAction }, dispatch);

export default connect(null, mapDispatchToProps)(BackgroundThemeButton)