import React, { useState } from 'react';

export default function ListTodos() {
  const [errorMessage, setErrormessage] = useState(null);
  const [name, setName] = useState(null);
  const [todo, setTodo] = useState(null);
  const [todos, setTodos] = useState(null);
  return (
    <>
      {/* TODO: Re-implement JSP include */}
      {/* TODO: Re-implement JSP include */}
      <div className="container">
      	<H1>Welcome {name}</H1>
      	<table className="table table-striped">
      		<caption>Your Todos are</caption>
      		<thead>
      			<th>Description</th>
      			<th>Category</th>
      			<th>Actions</th>
      		</thead>
      		<tbody>
      			<c:forEach items="{todos}" var="todo">
      				<tr>
      					<td>{todo.name}</td>
      					<td>{todo.category}</td>
      					<td>&nbsp;&nbsp;<a className="btn btn-danger"
      						href="/delete-todo.do?todo={todo.name}&category={todo.category}">Delete</a></td>
      				</tr>
      			))}
      		</tbody>
      	</table>
      	<p>
      		<font color="red">{errorMessage}</font>
      	</p>
      	<a className="btn btn-success" href="/add-todo.do">Add New Todo</a>
      </div>
      {/* TODO: Re-implement JSP include */}
    </>
  );
}