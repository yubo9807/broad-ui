import Message from "~/core/comp/Message";

export default () => {
  const arr = [
    { name: '成功', type: 'success', },
    { name: '信息', type: 'info', },
    { name: '关闭', type: 'closeAll', },
  ]
  const container = document.getElementById('container');
  arr.forEach(val => {
    const botton = document.createElement('button');
    botton.innerText = val.name;
    botton.addEventListener('click', () => {
      Message[val.type](val.name);
    })
    container.appendChild(botton);
  })
}