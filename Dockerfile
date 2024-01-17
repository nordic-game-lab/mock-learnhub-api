FROM node:lts
ENV API_TOKEN $API_TOKEN
LABEL "org.nordicgamelab.vendor"="Nordic Game Lab LLC"
LABEL org.opencontainers.image.source="https://github.com/nordic-game-lab/mock-learnhub-api"
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
CMD [ "npm", "start" ]
EXPOSE 3000 
