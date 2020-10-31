# Ayame Web SDK サンプル

[OpenAyame/ayame-web-sdk](https://github.com/OpenAyame/ayame-web-sdk) のサンプル集です。

## 時雨堂のオープンソースソフトウェアについて

利用前に https://github.com/shiguredo/oss をお読みください。

## オンラインサンプル

https://openayame.github.io/ayame-web-sdk-samples/index.html

## yarn install でセットアップ

```
yarn install
```

## yarn で起動

```
yarn serve
```

localhost:5000 で閲覧可能です。

## clientId, roomId  を指定したい

query string で指定可能です。

```
http://localhost:5000/recvonly.html?clientId=hoge&roomId=fuga
```

## シグナリングキーを指定したい

query string で指定可能です。

```
http://localhost:5000/recvonly.html?signalingKey=xxxxxxxxxxxxx
```


## シグナリング URL を変更したい

`./main.js`

の

```javascript
const signalingUrl = 'wss://ayame-labo.shiguredo.jp/signaling';
```

を適宜書き換えることで、変更可能です。

## サンプル

- [sendrecv(双方向送受信)](./sendrecv.html)
- [recvonly(受信のみ)](./recvonly.html)
- [sendonly(送信のみ)](./sendonly.html)
- [getDisplayMedia(画面共有)](./displaymedia.html)
- [DataChannel](./datachannel.html)

### 映像コーデック の指定について

sendrecv.html、recvonly.html、sendonly.html の映像コーデックの指定は、Google Chrome、Microsoft Edge でのみ有効です。

## ライセンス

Apache License 2.0

```
Copyright 2019, Kyoko Kadowaki aka kdxu (Original Author)
Copyright 2019-2020, Shiguredo Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
