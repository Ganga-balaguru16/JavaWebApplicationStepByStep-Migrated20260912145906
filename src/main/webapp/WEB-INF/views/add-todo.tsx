import React from 'react';

export default function AddTodo() {
  return (
    <>
      {/* TODO: Re-implement JSP include */}
      {/* TODO: Re-implement JSP include */}
      <div className="container">
      	Your New Action Item:
      	<form  onSubmit={(e) => { e.preventDefault(); /* TODO: call /add-todo.do */ } }>
      		<fieldset className="form-group">
      			<label>Description</label> <input name="todo" type="text"
      				className="form-control" /> <BR />
      		</fieldset>
      		<fieldset className="form-group">
      			<label>Category</label> <input name="category" type="text"
      				className="form-control" /> <BR />
      		</fieldset>
      		<input name="add" type="submit" className="btn btn-success" value="Submit" />
      	</form>
      </div>
      {/* TODO: Re-implement JSP include */}
    </>
  );
}