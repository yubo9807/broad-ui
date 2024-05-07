const a=`import { h, reactive } from "pl-vue"
import { TaskScheduling } from "~/core/tools"
import { delay } from "~/core/utils";

export default () => {

  const task = new TaskScheduling(3);  // 并发控制，一次性只能执行 3 个异步任务
  console.time('task');
  task.add(func(1000));
  task.add(func(2000));
  task.add(func(1500));
  task.add(func(2500)).then(() => console.timeEnd('task'));
  task.add(func(1800));
  task.add(func(200));
  task.add(func(300)).then(() => {
    task.add(func(1234)).then(res => console.log(res));
  })

  const arr = reactive([]);
  function func(num: number) {
    return async () => {
      await delay(num);
      arr.push('delay: ' + num);
      return num;
    }
  }

  return <ul>{() => arr.map(val => <li>{val}</li>)}</ul>
}`;export{a as default};
