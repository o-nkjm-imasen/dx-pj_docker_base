# simple React app

## version
### alpine 3.12.0
### node 14.5.0
### yarn 1.22.5
### react

* web React :4001

--------------------
First before install create-react-app
1.docker-compose build

2.install create-react-app by yarn  (if it has applications created by create-react-app , skip this command)
docker-compose run react ash -c "yarn global add create-react-app"

3.create application by create-react-app (using ash for alpine linux)
 sample-code1. docker-compose run react ash -c "yarn create react-app react-sample"
 sample-code2. docker-compose run react ash -c "yarn create react-app react-sample2 --template typescript"

4.change owner and group
sudo chown -R [username] src
sudo chgrp -R [username] src
sudo chmod -R 755 src

5.start app -> it can not access NOT WORK WELL
docker-compose run react ash -c "cd react-sample && yarn start"
5.start app by docker-compose
  add following line (change application name)
command: sh -c "cd react-sample && yarn install && yarn start"
