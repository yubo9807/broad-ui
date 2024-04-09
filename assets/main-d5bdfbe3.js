const i=`import { h, ref } from "pl-vue"
import Loading from "~/core/comp/Loading"

export default () => {
  const visible = ref(false);

  return <div style='position: relative; height: 300px;'>
    <Loading model={visible} childTips={<span onclick={() => visible.value = false}>隐藏</span>} />
    <button onclick={() => visible.value = true}>显示</button>
  </div>
}
`;export{i as default};
