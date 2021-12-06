<div markdown="fileTab.file.challenge.instructions" class="markdown collapsed"><h1>Project: WeLoveMovies</h1><blockquote>
<p>You've been hired on as a back end developer for a new startup called <em>WeLoveMovies!</em> As another developer works on the design and front end experience, you have been tasked with setting up a database and building out specific routes so that users can gain access to data about movies, theaters, and reviews.</p>
</blockquote>
<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded"><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/06596df6b4c59b453c69d84d2bc854b3-home.png" alt="home.png"></div></zoomable-image></p>
<p>This project is designed to test your ability to both build complex servers and access data through a database. To succeed at this project, you'll need to demonstrate you can do the following:</p>
<ul>
<li>Install and use common middleware packages.</li>
<li>Receive requests through routes.</li>
<li>Running tests from the command line.</li>
<li>Access relevant information through route and query parameters.</li>
<li>Create an error handler for the case where a route does not exist.</li>
<li>Build an API following RESTful design principles.</li>
<li>Create and customize a knexfile.js file.</li>
<li>Create a connection to your database with knex.</li>
<li>Write database queries to complete CRUD routes in an Express server.</li>
<li>Return joined and nested data with Knex.</li>
<li>Write database migrations using Knex's migration tools.</li>
<li>Deploy your back end server to a cloud service.</li>
</ul>
<p>You will not need to make any edits to HTML or CSS for this project.</p>
<h2>Project setup</h2><p>Follow the instructions below to get this project up and running on your own machine:</p>
<ul>
<li>Download the Qualified assignment files to your computer.</li>
<li>Run <code>npm install</code> to install the project.</li>
</ul>
<p>Some helper scripts have been added to the <code>package.json</code> file. You are welcome to modify these as you wish.</p>
<p>Visit the following repository if you would like to see your project connected to a Front End Application:</p>
<ul>
<li><a href="https://github.com/Thinkful-Ed/starter-movie-front-end" target="_blank" rel="noopener">Starter Code: WeLoveMovies</a></li>
</ul>
<p>Instructions are included there on how to get the project up and running.</p>
<h2>Running tests</h2><p>To run the tests, you can run the following command:</p>
<div class="language-tabset"><div class="language-tab language-bash"><pre><code class="lang-bash">npm test
</code></pre>
</div></div><p>Note that the tests make use of an in-memory SQLite database.</p>
<blockquote>
<p><strong>NOTE</strong> When updating a record in an in-memory SQLite database, the server does not automatically respond with an array of updated records like PostgreSQL does. As a result, when updating a record you will need to query the database again to return updated record.</p>
</blockquote>
<h2>Instructions</h2><p>You are tasked with both setting up the database and building a number of routes that will be used by the front end application.  For this project, you will start by making the necessary changes to the data tier and then proceed to make changes to the application tier following an inside-out development workflow. Each table is detailed below as is each route.</p>
<h3>General tasks</h3><p>You will also need to make sure the following tasks are complete.</p>
<ul>
<li>Your <code>app.js</code> file and <code>server.js</code> file are correctly configured, with your <code>app.js</code> file exporting the application created from Express.</li>
<li>You make use of the <code>cors</code> package so that requests from the front end can correctly reach the back end.</li>
<li>If a request is made to a route that does not exist, the server returns a <code>404</code> error.</li>
<li>If a request is made to a route that exists, but the HTTP method is wrong, a <code>405</code> error is returned.</li>
<li>All of your routes should respond with the appropriate status code and should use a <code>data</code> key in the response.</li>
</ul>
<h3>Database Tables</h3><p>You will create five tables for this project. View the <code>docs/tables/</code> folder in this project to get more detailed information on each table.</p>
<p>You will need to create migrations for each of these tables and run those migrations.</p>
<p>Seed data is included in this project in the <a href="./src/db/seeds" target="_blank" rel="noopener"><code>./src/db/seeds</code></a> folder. The seeds will run correctly if and only if the tables are setup as described in the previous documents.</p>
<h3>Routes</h3><p>You will create five routes for this project. View the <code>docs/routes/</code> folder in this project to get more detailed information on each table.</p>
<p>Note that some routes return data dependent on query parameters.</p>
<p><strong>Note:</strong> In addition to needing to pass the tests and requirements in the instructions here, please review the Rubric Requirements for the human-graded part of this project in your Thinkful curriculum page.</p>
</div>