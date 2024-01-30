import { ChartWait } from "~/core/tools";

export default () => {
  const wait = new ChartWait({
    el: document.getElementById('container'),
    percentage: 30,
    size: 300,
  })
  
  setInterval(() => {
    const num = Math.random() * 100;
    wait.option.percentage = num;
    wait.option.color = num > 60 ? '#ffaa00' : '#0080ff';
  }, 2000)
}
