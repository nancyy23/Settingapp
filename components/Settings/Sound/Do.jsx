import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Do = () => {
  const [isToggle1On, setToggle1] = useState(false);
  const [isToggle2On, setToggle2] = useState(false);
  const [isToggle3On, setToggle3] = useState(false);

  const toggleSwitch1 = () => {
    setToggle1(!isToggle1On);
  };

  const toggleSwitch2 = () => {
    setToggle2(!isToggle2On);
  };

  const toggleSwitch3 = () => {
    setToggle3(!isToggle3On);
  };

  return (
    <div className="container">
      <div className="header">
        <NavLink to="../Sound" className="arrow-icon link-no-underline">&#8592;</NavLink>
        <h1>Do Not Disturb</h1> {/* Update the title */}
      </div>

      <div className="toggle-container1">
        <div className="toggle-row">
          <div className="toggle-label">Do Not Disturb</div>
          <div className="toggle-switch" style={{ display: 'flex', justifyContent: 'space-around' }}>
            <label className="switch">
              <input type="checkbox" checked={isToggle1On} onChange={toggleSwitch1} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="displays-links">
        <div className="nav-links">
          <div className="nav-link-row">
            <NavLink to="/link1" className="display-link">Schedules</NavLink>
          </div>

          <hr className="line" />

          <p className="grey-text" id="grey-text1">
            Exceptions
          </p>

          <div className="nav-link-row">
            <NavLink to="/link2" className="display-link">Allowed notifications</NavLink>
          </div>
          <div className="nav-link-row">
            <NavLink to="/link3" className="display-link">Allow message forms</NavLink>
          </div>
          <div className="nav-link-row">
            <NavLink to="/link4" className="display-link">Allow calls form</NavLink>
          </div>
        </div>
      </div>

      <hr className="line" />

      <div className="toggle-container1">
        <div className="toggle-row">
          <div className="toggle-label">Ring for repeated calls</div>
          <div className="toggle-switch">
            <label className="switch">
              <input type="checkbox" checked={isToggle2On} onChange={toggleSwitch2} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="toggle-container1">
        <div className="toggle-row">
          <div className="toggle-label">Silence media when Do Not Disturb is on</div>
          <div className="toggle-switch" style={{ display: 'flex', justifyContent: 'space-around' }}>
            <label className="switch">
              <input type="checkbox" checked={isToggle3On} onChange={toggleSwitch3} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Do;