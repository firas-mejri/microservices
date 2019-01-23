# microservices

This is a simple microservices app that containes 3 microservices ws-cnam, ws-mi et ws-rf. each of them is connected to a mysql db.

        ws-cnam: enables people to get the status of their social security refundings.
        ws-mi:   enables people to get a copy of their creminal record.
        ws-rf:   enables people to declare their annual revenues.

the front-end is a react application.
the services are spring boot apps.
the api-gateway is nginx.

to run this project on your machine you will need to:
         - install docker
         - import mysql:5.6 image from docker hub
         - execute the following from the top dir as root : ./docker-build.sh
         - then, go to the /composeFiles and execute the following as root: docker-compose up -d
