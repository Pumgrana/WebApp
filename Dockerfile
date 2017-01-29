FROM node:6-slim

# Install Yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

ENV PATH /root/.yarn/bin:$PATH

ADD package.json .
RUN yarn install

ADD src src
ADD docker-entrypoint.sh .
ADD public public
ADD style.css .
RUN yarn run build

ENV NODE_ENV production
# RUN yarn global add pushstate-server

EXPOSE 3000
ENTRYPOINT ["./docker-entrypoint.sh"]
