import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
player.on('timeupdate', throttle(OnPlayer, 1000))
const STORAGE_KEY = localStorage.getItem('videoplayer-current-time');

function OnPlayer(data){
    localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.setCurrentTime(Number(STORAGE_KEY));

// let timeStoped = localStorage.getItem('videoplayer-current-time');
// if (timeStoped === null) {
//   timeStoped = 0;
// }


// let timeStoped = localStorage.getItem('videoplayer-current-time');
// if (timeStoped === null) {
//   timeStoped = 0;
// }
// const onPlay = e => {
//   localStorage.setItem('videoplayer-current-time', `${e.seconds}`);
// };
// player.on('timeupdate', throttle(onPlay, 1000));


console.dir(player)