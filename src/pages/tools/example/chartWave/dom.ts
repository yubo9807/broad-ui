import { ChartWait } from "~/core/tools";

export default () => {
  const wrapEl = document.getElementById('container')
  const wait = new ChartWait({
    el: wrapEl,
    percentage: 30,
    size: [wrapEl.clientWidth, 300],
  })

  setInterval(() => {
    const num = Math.random() * 100;
    wait.option.percentage = num;
    wait.option.color = num > 60 ? '#ffaa00' : '#0080ff';
  }, 2000)
}
