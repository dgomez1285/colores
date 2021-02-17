FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY default.conf /etc/nginx/conf.d/
COPY dist/ /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
