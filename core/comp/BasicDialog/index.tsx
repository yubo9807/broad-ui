import { PropsType, watch, h, onMounted, ref, RefImpl } from "pl-vue"
import { isObject } from "../../utils";
import './index.scss';

type Props = PropsType<{
  model:         boolean | RefImpl<boolean>
  className?:    string
  isModalClose?: boolean  // 点击蒙层关闭，默认为 true
  mounted?:      (el: HTMLElement) => void
}>
export default function(props: Props) {

  const dialogRef = ref<HTMLDialogElement>(null);
  const model = (isObject(props.model) ? props.model : ref(props.model)) as RefImpl<boolean>;

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

  return <dialog ref={dialogRef} className='br-basic-dialog' onmousedown={mouseDown} onclose={close}>
    <div className={['br-basic-dialog-wrap', props.className]} created={props.mounted}>
      {props.children}
    </div>
  </dialog>
}
