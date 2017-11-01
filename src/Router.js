import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Stack key="root">
<<<<<<< HEAD
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>

        <Scene key="main">
          <Scene
          onRight={() => console.log('right!!!')}
          rightTitle="Add"
          key="employeeList"
          component={EmployeeList}
          title="Employees" 
          />
        </Scene>
=======
        <Scene key="login" component={LoginForm} title="Please Login" />
        <Scene key="employeeList" component={EmployeeList} title="Employees" />
>>>>>>> e3e41126c588bd970f61d834c791f5b4d70c4c26
      </Stack>
    </Router>
  );
};

export default RouterComponent;
