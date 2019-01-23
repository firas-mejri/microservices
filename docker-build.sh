cp ws-cnam-api/Dockerfile ws-cnam-api/terget
docker build ./ws-cnam-api/target -t ws-cnam

cp ws-mi-api/Dockerfile ws-mi-api/target
docker build ./ws-mi-api/target -t ws-mi

cp ws-rf-api/Dockerfile ws-rf-api/target
docker build ./ws-rf-api/target -t ws-rf

docker build ./reactapp -t react
