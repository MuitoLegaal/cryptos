import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { updateThemeAction } from '../actions/actions';
import { IOSSwitch } from './themeButtonStyle';

function BackgroundThemeButton(props) {
  const [isChecked, setIsChecked] = React.useState(false);


  const handleChange = async () => {
    props.updateThemeAction(!isChecked)
    setIsChecked(!isChecked);
  };

  return (
    // <div>
    //   <Switch
    //     checked={isChecked}
    //     onChange={handleChange}
    //     color="secondary"
    //     inputProps={{ 'aria-label': 'primary checkbox' }}
    //   ><span class="toggle_BsTx">🌞</span></Switch>
    //        </div>
    <div class="react-toggle displayOnlyInLargeViewport_2aTZ">
        <Switch
          checked={isChecked}
          onChange={handleChange}
          color="secondary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <FormControlLabel
        control={<IOSSwitch checked={isChecked} onChange={handleChange} />}
        label="iOS style"
        />
      <div class="react-toggle-track">
              <div class="react-toggle-track-check">
                <span class="toggle_BsTx">🌜</span>
              </div>
              <div class="react-toggle-track-x">
                <span class="toggle_BsTx">🌞</span>
              </div>
      </div>
    <div class="react-toggle-thumb"></div>
    </div>

  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateThemeAction }, dispatch);

export default connect(null, mapDispatchToProps)(BackgroundThemeButton)