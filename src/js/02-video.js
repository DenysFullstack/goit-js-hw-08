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
