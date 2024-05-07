const t=`import { h, onMounted, ref } from "pl-vue";
import { ChartTimerBar } from "~/core/tools";

export default () => {
  const wrapEl = ref<HTMLDivElement>();

  let timerBar: ChartTimerBar
  onMounted(() => {
    timerBar = new ChartTimerBar({
      el: wrapEl.value,
      xAxis: {
        show: true,
        data: ['        2021', '2022', '2023', '2024', '2025', '2026        '],
      },
      series: [
        {
          smooth: true,
          data: [120, 230, 220, 907, 150, 101]
        },
      ],
      isPoint: false,
      onSliderIndexChange(start, end) {
        console.log(start, end)
      }
    });
  })

  return <div>
    <div ref={wrapEl} style={{height: '160px'}}></div>
    <button onclick={() => timerBar.play()}>播放</button>
    <button onclick={() => timerBar.pause()}>暂停</button>
  </div>
}`;export{t as default};
