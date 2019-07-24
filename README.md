## ayame-web-sdk-samples


[OpenAyame/ayame-web-sdk](https://github.com/OpenAyame/ayame-web-sdk) のサンプル集です。

## yarn で起動

```
yarn serve
```

localhost:3000 で閲覧可能です。

## clientId, roomId を指定したい

query string で指定可能です。

```
http://localhost:3000/recvonly.html?clientId=hoge&roomId=fuga
```


## シグナリング URL を変更したい

`./main.js`
の 
```javascript
const signalingUrl = 'wss://ayame.shiguredo.jp/ws';
```

を適宜書き換えることで、変更可能です。

## サンプル

- [sendrecv(双方向送受信)](./sendrecv.html)
- [recvonly(受信のみ)](./recvonly.html)
- [sendonly(送信のみ)](./sendonly.html)
- [getDisplayMedia(画面共有)](./displaymedia.html)



