# osc3cho
echo OSC (or other) messages to all connected clients

## try locally

edit the line in public/index.html: (uncomment localhost)
`const socket = io.connect('https://your.URL.here.com/') // ('localhost:5000');`

then run:
```
  npm install
  node server.js
```

access localhost:5000 in your browser and run the Max patches.

## run online

deploy e.g. on [Heroku](https://www.heroku.com/) or [Google Cloud](https://cloud.google.com)

edit the line in public/index.html with your online, live URL

again, use the patches in max/ to test sending & receiving. Obviously a similar setup should work with other Node clients.

![](https://rvirmoors.github.io/ccia/attachments/node-osc.gif)
