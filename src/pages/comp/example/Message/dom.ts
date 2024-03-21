import Message from "~/core/comp/Message";

export default () => {
  const arr = [
    { name: 'Success', type: 'success', },
    { name: 'Info', type: 'info', },
    { name: 'Close', type: 'closeAll', },
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