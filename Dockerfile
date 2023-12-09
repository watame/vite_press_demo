FROM node:18-alpine

# docs:dev, docs:preview のポートを開放
EXPOSE 5173 4173

# 作業ディレクトリ設定
ENV APP_ROOT /app

# WORKDIRの設定、及びパッケージインストール
# WORKDIRを指定しないと、ルートディレクトリでのインストールとなり `npm ERR! Tracker "idealTree" already exists` が発生して死ぬ
# see: https://stackoverflow.com/a/65443098
WORKDIR $APP_ROOT
COPY package.json $APP_ROOT
COPY package-lock.json $APP_ROOT
RUN npm install
