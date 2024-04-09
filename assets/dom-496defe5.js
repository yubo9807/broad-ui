const n=`import { LoadingLiving } from "~/core/comp/Loading"

export default () => {

  const container = document.getElementById("container");
  container.style.position = "relative";
  container.style.height = "300px";

  const loading = new LoadingLiving({
    wrapEl: container,
    childTips(el) {
      console.log(el)
      const span = document.createElement("span");
      span.innerText = "隐藏";
      span.addEventListener('click', () => {
        loading.close();
      })
      el.appendChild(span);
    }
  });

  const button = document.createElement("button");
  button.innerText = "显示";
  button.addEventListener('click', () => {
    loading.open();
  })

  container.appendChild(button);
}
`;export{n as default};
