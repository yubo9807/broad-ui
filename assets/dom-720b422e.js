const e=`import { amountUppercase } from "~/core/tools";

export default () => {
  const p = document.createElement('p');
  const input = document.createElement('input');
  const defaultValue = '1234';
  input.value = defaultValue;
  p.innerText = amountUppercase(defaultValue);
  input.style.width = '300px';
  input.addEventListener('input', e => {
    const value = (e.target as HTMLInputElement).value;
    try {
      p.innerText = amountUppercase(value);
    } catch (err) {
      alert(err.message);
    }
  })
  document.getElementById('container').append(input, p);
}`;export{e as default};
