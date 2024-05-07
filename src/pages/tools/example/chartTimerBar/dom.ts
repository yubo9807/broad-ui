import { ChartTimerBar } from "~/core/tools";

export default () => {
  const container = document.getElementById('container') as HTMLDivElement;
  const timerBar = new ChartTimerBar({
    el: container,
    height: 200,
    xAxis: {
      data: ['2021', '2022', '2023', '2024', '2025', '2026'],
    },
    series: [
      {
        data: [120, 230, 220, 907, 150, 101],
      }
    ],
    onSliderIndexChange(start, end) {
      console.log(start, end)
    }
  })
}