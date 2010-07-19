self.onmessage = function (event)
{
	postMessage("[" + location + "] mi hai detto " + event.data);
};
