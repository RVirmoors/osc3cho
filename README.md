# osc3cho
echo OSC (or other) messages to all connected clients

### usage

edit the line in public/index.html : 
`const socket = io.connect('https://your.URL.here.com/') // ('localhost:5000');`

you can uncomment the localhost URL to try it out locally, or use your own URL (e.g. if you deploy on [Heroku](https://www.heroku.com/) or [Google Cloud](https://cloud.google.com))

use the patches in max/ to test sending & receiving. Obviously a similar setup should work with other Node clients.
