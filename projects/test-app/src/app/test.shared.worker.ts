/// <reference lib="webworker" />
const connections: MessagePort[] = [];

self.onconnect = (connectEvent: MessageEvent) => {
  const port = connectEvent.ports[0];
  connections.push(port);
  port.onmessage = (messageEvent) => {
    console.log('worker got message: ', messageEvent);
    if (messageEvent.data.action === 'test') {
      console.log('test');
    } else if (messageEvent.data.action === 'terminate') {
      self.close();
    }
  };
};
