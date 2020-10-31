const signalingUrl = 'wss://ayame-labo.shiguredo.jp/signaling';
// let roomId = 'ayame-sdk-test-shiguredo';
let roomId = 'shiguredo@ayame-labo';
let clientId = null;
let videoCodec = null;
let audioCodec = null;
let signalingKey = "XGY_T0_IyONaQukQUmRVVnDQc9PHIKHW2dfN9GGVq9e9IZBL";
// let signalingKey = null;

function onChangeVideoCodec() {
  videoCodec = document.getElementById("video-codec").value;
  if (videoCodec == 'none') {
    videoCodec = null;
  }
}
// query string から roomId, clientId を取得するヘルパー
function parseQueryString() {
  const qs = window.Qs;
  if (window.location.search.length > 0) {
    var params = qs.parse(window.location.search.substr(1));
    if (params.roomId) {
      roomId = params.roomId;
    }
    if (params.clientId) {
      clientId = params.clientId;
    }
    if (params.signalingKey) {
      signalingKey = params.signalingKey;
    }
  }
}


parseQueryString();

const roomIdInput = document.getElementById("roomIdInput");
roomIdInput.addEventListener('change', (event) => {
  console.log(event);
  roomId = event.target.value;
});

