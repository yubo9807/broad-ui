import { h, reactive } from "pl-vue";
import { PublishSubscribe } from "~/core/tools"

export default () => {
  type EventMap = {
    'test': string[]
  }
  const list = reactive([]);
  const pubSub = new PublishSubscribe<EventMap>();

  pubSub.on('test', (data) => {
    list.push(data);
  })

  function handleClick() {
    pubSub.emit('test', 'hello world')
  }

  return <div>
    <button onclick={handleClick}>发送事件</button>
    {() => list.map(val => <p>{val}</p>)}
  </div>
}