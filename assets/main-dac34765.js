const n=`import { h, ref } from "pl-vue"
import Modal from "~/core/comp/Modal";

export default () => {

  const visible = ref(false);

  return <div>
    <button onclick={() => visible.value = true}>显示确认框</button>
    <Modal model={visible} title="提示" onOk={() => visible.value = false}>
      <p>hello</p>
      <p>world</p>
    </Modal>
  </div>
}`;export{n as default};
