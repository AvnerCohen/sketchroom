###SketchBoard

A Demonstration of P2P communication over WebRTC DataChannels and over Websockets.
***Supports on Chrome only.***

This demo shows the difference in behavior of the broadcasting of mouse movments over web sockets (a client-server style of communication) and WebRTC DataChannels ,using the PeerJS servers for signaling (which is a Peer-to-Peer style of communication).

Locally there is little to no difference, however, when working with remote server (deployed to the European region of Heroku) the difference is quite obvious, WebRTC is faster.
However, it is seems that in some scenarios the DataChannel solution is somewhat less reliable, I haven't yet been able to pin point when and why.


###### Instruction for local installation
clone the repo

```
npm install
node server.js
open http://localhot:2013
```

Or Go to the live demo at:

http://sketchroom.herokuapp.com




