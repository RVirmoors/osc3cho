//<script src="/socket.io/socket.io.js"></script>
const maxApi = require('max-api');
const io = require('socket.io-client');

let socket;

maxApi.addHandler('connect', (url) => {
	socket = io.connect(url);

	socket.on('get', (data) => {
		maxApi.outlet(data.x);
	})
})

maxApi.addHandler('disconnect', () => {
	socket.close();
})

maxApi.addHandler('send', (arg1) => {
//	maxApi.post(`Got ${arg1} ${arg2}`);
	var sendData = {
	    x: arg1,
	};
	socket.emit('send', sendData);
})
