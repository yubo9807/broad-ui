const t=`import { h, onMounted, ref } from "pl-vue";
import { ChartWait } from "~/core/tools";

export default function() {
  const el = ref<HTMLElement>();

  onMounted(() => {
    const wait = new ChartWait({
      el: el.value,
      percentage: 30,
    })

    setInterval(() => {
      wait.option.percentage = Math.random() * 100;
      wait.option.color = wait.option.percentage > 60 ? '#ffaa00' : '#0080ff';
    }, 2000)
  })

  return <div ref={el} style='width: 300px;'></div>
}
`;export{t as default};
