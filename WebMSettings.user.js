// ==UserScript==
// @name        Webm Settings
// @namespace   WebmSettings
// @author      Failbike
// @description Webm default settings
// @include       *.webm
// @run-at      document-start
// @version     1.0
// @grant       none
// @downloadURL https://github.com/Failbike/WebM-Mute-Userscript/raw/master/WebMSettings.user.js
// @updateURL https://github.com/Failbike/WebM-Mute-Userscript/raw/master/WebMSettings.user.js
// ==/UserScript==
// Test URL http://video.webmfiles.org/big-buck-bunny_trailer.webm

//Set volume                                  (1 is full volume)
document.getElementsByTagName('video')[0].volume = 0.01;

//Set loop                                    (true/false)
document.getElementsByTagName("video")[0].loop = true;

//Set autoplay                                    (true/false)
// document.getElementsByTagName("video")[0].autoplay = false;

