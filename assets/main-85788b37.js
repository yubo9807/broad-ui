const e=`import { h, onMounted, ref } from "pl-vue";
import { ChartWait } from "~/core/tools";

export default function() {
  const wrapRef = ref<HTMLElement>();

  onMounted(() => {
    const wait = new ChartWait({
      el: wrapRef.value,
      size: [wrapRef.value.clientWidth, 300],
      percentage: 30,
    })

    setInterval(() => {
      wait.option.percentage = Math.random() * 100;
      wait.option.color = wait.option.percentage > 60 ? '#ffaa00' : '#0080ff';
    }, 2000)
  })

  return <div ref={wrapRef}></div>
}
`;export{e as default};
