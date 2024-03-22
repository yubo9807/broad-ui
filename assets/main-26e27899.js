const o=`import { h, ref } from "pl-vue"
import Dialog from "~/core/comp/BasicDialog"

export default () => {

  const visible = ref(false);
  return <div>
    <button onclick={() => visible.value = true}>显示弹窗</button>
    <Dialog model={visible}>hello</Dialog>
  </div>
}`;export{o as default};
