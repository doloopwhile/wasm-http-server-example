# WASM(AssemblyScript) でWSGI的なことをしてみる

- run.js: node.jsで動くHTTPサーバー・WASM を読み込んで実行する
- handler.ts: AssemblyScriptで書いたWASMのエントリーポイント

コンパイル・実行:

```shell
npx asc handler.ts && node run.js
```

=> 8080ポートでhttpサーバーが起動される

```shell
curl -X POST http://localhost:8080/
Hello POST!
```

```shell
curl -X GET http://localhost:8080/
Hello GET!
```
