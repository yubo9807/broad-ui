const e=`import { imageCompress, fileToBase64 } from '~/core/tools/file';

export default () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.addEventListener('input', async () => {
    const file = input.files[0];
    const base64 = await fileToBase64(file);
    const newBase64 = await imageCompress(base64, {
      ratio: .6,
      sizeLimit: {
        width: 20,
        height: 20,
      },
    })
    alert("压缩前：" + base64.length + "\\n压缩后：" + newBase64.length);
  })

  document.getElementById('container').appendChild(input);
}`;export{e as default};
