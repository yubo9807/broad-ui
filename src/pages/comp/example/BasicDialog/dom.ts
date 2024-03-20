import { ref, useComponent } from "pl-vue"
import BasicDialog from "~/core/comp/BasicDialog"

export default () => {
  const visible = ref(false);
  const node = useComponent(BasicDialog, {
    model: visible,
    mounted(el) {
      el.innerText = `hello`
    }
  });
  const button = document.createElement("button");
  button.innerText = "显示弹窗";
  button.addEventListener("click", () => {
    visible.value = true;
  })
  const container = document.getElementById("container");
  container.appendChild(button);
  container.appendChild(node);
}