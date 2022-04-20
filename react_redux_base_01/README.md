# simple React app with Redux and react-router

## version
### alpine 3.12.0
### node 14.5.0
### yarn 1.22.5
### react
## @trendmicro/react-sidenav

* web React :4002

--------------------
- First before install create-react-app
# It has been Done
1.docker-compose build
# It has been Done
2.install create-react-app by yarn  (if it has applications created by create-react-app , skip this command)
`docker-compose run web ash -c "yarn global add create-react-app"`
# It has been Done
3.create application by create-react-app (using ash for alpine linux)
 * change project(application) name. the following application name is react-sample or react-sample2
 sample-code1. `docker-compose run web ash -c "npx create-react-app react-redux-basic"`
# It has been Done
4.change owner and group
`sudo chown -R [username] src`
`sudo chgrp -R [username] src`
`sudo chmod -R 755 src`

# please start from the following
1.copy all the filds into new application folder
2.rename container name in the docker-compose.yml
3.copy .env.sample file to .env. And then change the PORT as you needed.
4.start app by docker-compose
 add following line (change application name)
`command: sh -c "cd react-react-basic && yarn install && yarn start"`
