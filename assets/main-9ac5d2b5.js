const t=`import { h, reactive } from "pl-vue";
import { StreamSplit } from "~/core/tools";
import { delay } from "~/core/utils";

export default () => {
  
  const msgs = reactive([]);

  const stream = new StreamSplit({
    onMessage(msg) {
      const json = JSON.parse(msg);
      msgs.push(json.data);
    }
  });

  // 模拟 EventSource 流数据
  (async function () {
    const arr = ['hello', ', ', 'world', '!'];
    for (const val of arr) {
      const data = {
        data: val,
        time: Date.now(),
      }
      stream.add(\`data:\${JSON.stringify(data)}\\n\\n\`);
      await delay(500);
    }
  })()

  return <div>{() => msgs}</div>
}`;export{t as default};
