import { Outlet } from 'react-router-dom';
import React from 'react';
import ProfileFunctionalComponent from './Profile';
import Profile from './ProfileClass';
import userContext from '../../utils/userContext';

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log('Parent - constructor');
  }

  componentDidMount() {
    // Best place to make an Api call
    //console.log('Parent - componentDidMount');
  }
  render() {
    //console.log('parent - render');

    return (
      <div>
        <h1>About Us Page</h1>

        <userContext.Consumer>
          {({ user }) => (
            <h1 className="font-bold text-xl p-10">
              {user.name} - {user.email}
            </h1>
          )}
        </userContext.Consumer>

        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path
        </p>
        <Profile />
      </div>
    );
  }
}

export default About;

/**
 *
 * Parent Constructor
 * Parent Render
 *   First Child Constructor
 *   First Child Render
 *   Second Child Constructor
 *   Second Child Render
 *   First Child ComponentDidMount
 *   Second Child ComponentDidMount
 * Parent ComponentDidMount
 */
