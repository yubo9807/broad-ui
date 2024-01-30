import { amountUppercase } from "~/core/tools";

export default () => {
  const p = document.createElement('p');
  const input = document.createElement('input');
  const defaultValue = '1234';
  input.value = defaultValue;
  p.innerText = amountUppercase(defaultValue);
  input.type = 'number';
  input.style.width = '300px';
  input.addEventListener('input', e => {
    const value = (e.target as HTMLInputElement).value;
    p.innerText = amountUppercase(value);
  })
  document.getElementById('container').append(input, p);
}