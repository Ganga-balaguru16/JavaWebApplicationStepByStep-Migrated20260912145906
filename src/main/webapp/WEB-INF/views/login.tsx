import React, { useState } from 'react';

export default function Login() {
  const [errorMessage, setErrormessage] = useState(null);
  return (
    <>
      	<nav className="navbar navbar-default">
      		<a href="/" className="navbar-brand">Brand</a>
      		<ul className="nav navbar-nav">
      			<li className="active"><a href="#">Home</a></li>
      			<li><a href="/list-todos.do">Todos</a></li>
      			<li><a href="http://www.in28minutes.com">In28Minutes</a></li>
      		</ul>
      		<ul className="nav navbar-nav navbar-right">
      			<li><a href="/login.do">Login</a></li>
      		</ul>
      	</nav>
      	<div className="container">
      		<form onSubmit={(e) => { e.preventDefault(); /* TODO: call /login.do */ } } >
      			<p>
      				<font color="red">{errorMessage}</font>
      			</p>
      			Name: <input type="text" name="name" /> Password:<input
      				type="password" name="password" /> <input type="submit"
      				value="Login" />
      		</form>
      	</div>
      	<footer className="footer">
      		<div>footer content</div>
      	</footer>
      	<script src="webjars/jquery/1.9.1/jquery.min.js"></script>
      	<script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    </>
  );
}