FROM ruby:3.0.2-alpine3.14

ENV RUNTIME_PACKAGES="linux-headers libxml2-dev make gcc g++ \
    libc-dev libffi-dev tzdata git yarn mariadb-dev nodejs" \
    DEV_PACKAGES="build-base curl-dev" \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo
    
RUN apk update && \
    apk upgrade && \
    apk add --no-cache ${RUNTIME_PACKAGES} && \
    apk add --virtual build-dependencies --no-cache ${DEV_PACKAGES} && \
    apk del build-dependencies

RUN ln -s /usr/lib/libffi.so.7.1.0 /usr/lib/libffi.so.6

RUN gem install bundler

WORKDIR /tmp
ADD src/Gemfile Gemfile
ADD src/Gemfile.lock Gemfile.lock
RUN bundle install

ENV APP_HOME /app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
ADD . $APP_HOME
