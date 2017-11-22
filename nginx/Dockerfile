FROM nginx:1.12.2-alpine

RUN apk add --update curl \
	&& rm -f /etc/nginx/conf.d/*.conf \
	&& rm -f /etc/nginx/nginx.conf

COPY default.conf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx