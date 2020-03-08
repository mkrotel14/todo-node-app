<h1>ToDo App</h1>

<h4>App Routes</h4>
<ul>
  <li>
    <a href="#users">User Routes</a>
  </li>
  <li>
    <a href="#todos">ToDo Routes</a>
  </li>
</ul>

<h3 id="users">User Routes</h3>
<h4>/POST</h4>
<p>To create a new User you need to use the <code>/users/new</code> route passing a JSON as body of the requisition containing the required field. <b>Returns a UserSchema</b>, eg:
<br/>
<b>REQUEST</b>
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
<br/>
<b>RESPONSE</b>
<pre>
  <code>
    {
      "todo": [],
      "_id": "5e6497e7bb5e856ac0eba795",
      "firstName": "John",
      "lastName": "Wick",
      "username": "johnwick",
      "email": "john.wick@email.com",
      "password": "$2b$10$dbCcGTwSHdLRaX46bpvkTOnff9OfmAffDQKCS.P2ozUemBOAuzeo6",
      "createdAt": "2020-03-08T06:53:00.096Z",
      "__v": 0
    }
  </code>
</pre>
<h4>/PUT</h4>
<p>To update a existing User you need to use the <code>/users/edit</code> route passing a JSON as body of the requisition containing the <code>user_id</code> as required. <b>Returns a UserSchema</b>, eg:
<br/>
<b>REQUEST</b>
<pre>
  <code>
    {
      "user_id": "5e6497e7bb5e856ac0eba795",
      "password": "dontkillmydog"
    }
  </code>
</pre>
<br/>
<b>RESPONSE</b>
<pre>
  <code>
    {
      "todo": [],
      "_id": "5e6497e7bb5e856ac0eba795",
      "firstName": "John",
      "lastName": "Wick",
      "username": "johnwick",
      "email": "john.wick@email.com",
      "password": "$2b$10$8l/8JCZQrtIoka8UDQWbZOGdOi.D5MkaQSGWMib8YoJ0pLcXjqiB2",
      "createdAt": "2020-03-08T06:53:00.096Z",
      "__v": 0,
      "updatedAt": "2020-03-08T06:54:32.476Z"
    }
  </code>
</pre>
<p>You can update the <code>firstName</code>, <code>lastName</code> and <code>password</code> fileds at the moment.
<h4>/DELETE</h4>
<p>To delete a existing User you need to use the <code>/users/delete</code> route passing a JSON as body of the requisition containing the <code>user_id</code> as required, eg:
<pre>
  <code>
    {
      "user_id": "5e6497e7bb5e856ac0eba795"
    }
  </code>
</pre>
<p>This may delete all the Todo's related to the User
<hr/>
<h3 id="todos">ToDo Routes</h3>
<h4>/GET</h4>
<p>To get all the Todo's for you user you need to use the <code>/todo/?user_id=USER_ID</code>. <b>Returns a TodoSchema</b>, eg:
<br/>
<b>RESPONSE</b>
<pre>
  <code>
    [{
      "finished": false,
      "_id": "5e6497eebb5e856ac0eba796",
      "content": "Avenge my dog's death",
      "user": "5e6497e7bb5e856ac0eba795",
      "createdAt": "2020-03-08T06:59:58.047Z",
      "__v": 0
    }]
  </code>
</pre>
<h4>/POST</h4>
<p>To create a new Todo you need to use the <code>/todo/new</code> route passing a JSON as body of the requisition containing the required field. <b>Returns a array of TodoSchema</b>, eg:
<br/>
<b>REQUEST</b>
<pre>
  <code>
    {
      "content": "Avenge my dog",
      "user_id": "5e6497e7bb5e856ac0eba795"
    }
  </code>
</pre>
<br/>
<b>RESPONSE</b>
<pre>
  <code>
    [{
      "finished": false,
      "_id": "5e649813ec5c906b53435e31",
      "content": "Avenge my dog's death",
      "user": "5e6497e7bb5e856ac0eba795",
      "createdAt": "2020-03-08T07:00:35.230Z",
      "__v": 0
    }]
  </code>
</pre>
