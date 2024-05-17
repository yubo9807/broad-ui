import { PublishSubscribe } from "~/core/tools"

export default () => {
  const pubSub = new PublishSubscribe();

  pubSub.on('test', (data) => {
    console.log(data);
  })

  const container = document.getElementById('container');
  const button = document.createElement('button');
  button.innerText = '发送事件';
  button.addEventListener('click', () => {
    pubSub.emit('test', 'hello world');
  });
  container.appendChild(button);
}