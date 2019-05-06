FROM ubuntu:latest
# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN apt-get update && apt-get install -y golang git && apt-get clean
RUN go get -v -u github.com/hyperledger/fabric/core/chaincode/shim
RUN go get -v -u github.com/hyperledger/fabric/protos/peer
RUN go get -v -u github.com/pkg/errors
RUN go get -v -u github.com/stretchr/testify/assert
RUN go get -v -u github.com/tebeka/go2xunit
ENV PATH="/root/go/bin:${PATH}"
#Go env
RUN go env
RUN apt-get install build-essential libssl-dev
RUN apt-get install -y nodejs npm
#npm version
RUN npm --version
#nodejs version
RUN node --version
RUN apt-get install -y curl
#installing nvm
ENV NVM_DIR /usr/local/nvm
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
ENV NODE_VERSION v8.15.1
RUN /bin/bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION && nvm use --delete-prefix $NODE_VERSION"
ENV NODE_PATH $NVM_DIR/versions/node/$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/$NODE_VERSION/bin:$PATH
RUN node --version
#installing neccessary packages
RUN apt-get install gcc g++ make

WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install -g nodemon
COPY . /app
EXPOSE 4000
#RUN chmod 777 ./bootstrap_app.sh
CMD [ "npm", "start" ]


