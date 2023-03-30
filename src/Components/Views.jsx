import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function Views() {
  return (
	<Routes>
		<Route path="/" element={Login}/>
		<Route path="/register" element={Signup}/>
		<Route path="*" element={Login}/>
	</Routes>
  )
}

export default Views