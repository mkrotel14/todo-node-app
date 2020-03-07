<h1>ToDo App</h1>

<h4>App Routes</h4>
<ul>
  <li>
    <a href="#routes">User Routes</a>
  </li>
</ul>

<h3 id="routes">User Routes</h3>
<h4>/POST</h4>
<p>To send a new User you need to use the <code>/users/new</code> route passing a JSON as body of the requisition containing the required field, eg:
<pre>
  <code>
    {
      "firstName": "John",
      "lastName": "Wick",
      "username": "johnwick",
      "email": "john.wick@email.com",
      "password": "ilovemydog"
    }
  </code>
</pre>
<h4>/PUT</h4>
