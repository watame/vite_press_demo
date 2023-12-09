# これ何
VitePressのGitHubPagesデモ用レポジトリです。
仕様書管理に使えるかなって試したくて作りました。

# 試したいこと
- VitePressで仕様書が簡単に編集できるか
- GitHubPagesで仕様書が確認できるか

# 動作環境
Dockerかローカルマシンのnodeで動作させてください。
- node
    - `node 18.7.0`
        - `.node-version` に記載されたバージョン動作します
        - `nodenv` がインストールされていればバージョン見てくるハズ
- docker
    - DockerDesktopとか入れておけばOKです

# 起動方法
## ローカルのnodeで動かすとき
下記のコマンドを順に入力してください。
```
npm install
npm run docs:dev
```

正常に起動したら↓のようなログが表示されます。
```
vitepress v1.0.0-rc.31
➜  Local:   http://localhost:5173/vite_press_demo/
```


## Dockerで動かすとき
下記のコマンドを順に入力してください。
```
docker-compose up
```

正常に起動したら↓のようなログが表示されます。
```
vite_press_demo-docs-1  |   vitepress v1.0.0-rc.31
vite_press_demo-docs-1  |
vite_press_demo-docs-1  |   ➜  Local:   http://localhost:5173/vite_press_demo/
vite_press_demo-docs-1  |   ➜  Network: http://172.20.0.2:5173/vite_press_demo/
```

# 開発環境へのアクセス先
下記URLにアクセスしてみてください👇 結構キレイなサイトが表示されます😄
- http://localhost:5173/vite_press_demo/
![image](https://github.com/watame/vite_press_demo/assets/16306537/2cd2c2fc-0149-46b1-8f65-b1146d3122c9)



# ドキュメントの作り方
公式サイトを見てね！
- https://vitepress.dev/guide/markdown
