FROM node:22.0

WORKDIR /app

COPY . /app

RUN npm install

#RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel
#
#USER laravel

RUN chmod -R 777 /app

EXPOSE 1234

CMD ["npm run dev"]