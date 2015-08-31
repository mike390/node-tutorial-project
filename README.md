# node-tutorial-project
nodejs outline project

<h3>So we start with trying to to make a server<h3>

Task 1 - making it run:

    - npm install
    - node http-server

Tast 2 - check to make sure it's giving you something back in a browser

Tast 3 - update to make the test pass

Task 4 - make it produce some json
    - set the response object using the send method to return some random JSON

Task 5 - write a test that asserts the json is produced
    - use jasmine to make an assertion that the json outputted is as you expect



<h3>Next we'll try to make it take a POST request<h3>

Task 6:

    - write a test
    
Task 7:

    - make the http server take a POST request


<h3>Now we'll make it store something<h3>

Task 8:

    - download and install Redis
    - start up your redis server (npm install -> ./src/redis-server)

Task 9:

    - use npm to get the io-redis node module

Task 10:

    - write a test that asserts we call io-redis

Task 11:

    - use io-redis to connect to your locally running version of redis

Task 12:

    - write a test that asserts what is stored in Redis is the content of a POST request

Task 13:

    - make it store the value of anything in the POST to redis
