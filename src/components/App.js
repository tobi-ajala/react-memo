import React, { PropTypes } from 'react';

const App = (props) => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Idea Board</a>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        {props.children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
