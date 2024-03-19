import { PropsType, watch, h, onMounted, ref } from "pl-vue"
import { isObject } from "../../utils";
import './index.scss';

type Props = PropsType<{
  model:         boolean | { value: boolean }
  className?:    string
  isModalClose?: boolean  // 点击蒙层关闭，默认为 true
}>
export default function(props: Props) {

  const dialogRef = ref<HTMLDialogElement>(null);
  const model = (isObject(props.model) ? props.model : ref(props.model)) as { value: boolean };

  onMounted(() => {
    watch(() => model.value, value => {
      if (value) {
        dialogRef.value.showModal();
      } else {
        dialogRef.value.close();
      }
    }, { immediate: true })
  })

  /**
   * 关闭弹窗
   */
  function close() {
    model.value = false;
  }

  /**
   * 点击蒙层关闭
   * @param e 
   */
  function mouseDown(e: MouseEvent) {
    if (props.isModalClose === false) return; 
    if (e.target === dialogRef.value) {
      close();
    }
  }

  return <dialog ref={dialogRef} className='dialog' onmousedown={mouseDown} onclose={close}>
    <div className={['wrap', props.className]}>
      {props.children}
    </div>
  </dialog>
}
