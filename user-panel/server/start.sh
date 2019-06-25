# if first time you are starting the app
#docker pull mongo-express
#docker pull mongo
 docker stop userpanelDB
docker stop mongo-express
docker container prune
docker run --name userpanelDB -d mongo:latest
docker run -p 8081:8081 --link userpanelDB:mongo mongo-express
# For removing container after stopping
docker run -it --rm -p 8081:8081 --link userpanelDB:mongo mongo-express
export ipAddr="$(docker inspect userpanelDB | grep -w "IPAddress" | awk '{ print $2 }' | head -n 1 | cut -d "," -f1)"
echo $ipAddr
npm start

#mongo-express will be on localhost:8081
#server will be on 8080
#frontend will be 4200