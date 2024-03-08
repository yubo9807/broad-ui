const e=`import { h, ref } from 'pl-vue';
import { imageCompress, fileToBase64 } from '~/core/tools/file';

export default function() {
  const inputRef = ref<HTMLInputElement>();
  async function onInput() {
    const file = inputRef.value.files[0];
    const base64 = await fileToBase64(file);
    const newBase64 = await imageCompress(base64, {
      ratio: .6,
      sizeLimit: {
        width: 20,
        height: 20,
      },
    })
    alert("压缩前：" + base64.length + "\\n压缩后：" + newBase64.length);
  }

  return <input ref={inputRef} type="file" oninput={onInput} accept="image/*" />
}`;export{e as default};
