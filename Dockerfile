FROM node:lts
EXPOSE 3000 

ENV API_TOKEN $API_TOKEN

LABEL "org.nordicgamelab.vendor"="Nordic Game Lab LLC"

WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

CMD [ "npm", "start" ]
