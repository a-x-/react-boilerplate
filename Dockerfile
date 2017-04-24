FROM nginx:alpine
MAINTAINER Alex Mextner <invntrm@gmail.com>

COPY nginx.conf /etc/nginx/nginx.conf
COPY prod.nginx.conf /etc/nginx/conf.d

COPY build/ /var/www/public

EXPOSE 3000
