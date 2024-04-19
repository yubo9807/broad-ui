const t=`import { ModalAffirm } from "~/core/comp/Modal";

export default () => {
  const container = document.getElementById('container');
  const button = document.createElement('button');
  button.innerText = '显示 Modal';
  button.addEventListener('click', () => {
    ModalAffirm({
      title:   '提示',
      content: '提示信息？'
    }).then(() => {
      console.log('确定回调');
    }).catch(() => {
      console.log('取消回调');
    })
  })
  container.appendChild(button);
}
`;export{t as default};
