# node-tutorial-project
nodejs outline project

So we start with trying to to make a server:

Task 1 - making it run:

    - npm install
    - node http-server

Tast 2 - check to make sure it's giving you something back in a browser

Tast 3 - update to make the test pass

Task 4 - make it produce some json
    - set the response object using the send method to return some random JSON

Task 5 - write a test that asserts the json is produced
    - use jasmine to make an assertion that the json outputted is as you expect



Next we'll try to make it take a POST request

Task 1:

    - write a test
Task 2:

    - make the http server take a POST request



Now we'll make it store something

Task 1:

    - download and install Redis
    - start up your redis server (npm install -> ./src/redis-server)

Task 2:

    - use npm to get the io-redis node module

Task 3:

    - write a test that asserts we call io-redis

Task 4:

    - use io-redis to connect to your locally running version of redis

Task 5:

    - write a test that asserts what is stored in Redis is the content of a POST request

Task 6:

    - make it store the value of anything in the POST to redis
