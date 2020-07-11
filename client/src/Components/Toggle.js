import React from 'react'
import { func, string } from 'prop-types';
import Switch from '@material-ui/core/Switch';
import './style.css'

const Toggle = ({ theme, toggleTheme }) => {
    
  return (
    <div className="mode-switch"
    >
    <Switch
      onClick={toggleTheme}
      defaultChecked
      color="secondary"
      inputProps={{ "aria-label":  'primary'}}
    />
    </div>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;