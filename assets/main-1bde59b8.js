const t=`import { h, Fragment, reactive, ref, onMounted } from "pl-vue";
import { EventEmitter } from "~/core/tools";

export default () => {

  const em = new EventEmitter();

  // 订阅发布事件
  const arr = reactive([]);
  em.on('send', e => {
    arr.push(e.detail);
  });

  // 等待事件触发
  const btnRef = ref<HTMLButtonElement>();
  onMounted(async () => {
    const btn = EventEmitter.wait(btnRef.value);
    const e = await btn.waitClick;  // 这里只能触发一次，若想多次触发请包装在死循环内
    console.log(e);
  })

  return <>
    <button onclick={() => em.emit('send', 'hello world!')}>send</button>
    <ul>{() => arr.map(val => <li>{val}</li>)}</ul>

    <button ref={btnRef}>wait event</button>
  </>
}`;export{t as default};
