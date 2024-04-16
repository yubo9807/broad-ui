import { PropsType, watch, h, onMounted, ref, RefImpl, isRef } from "pl-vue"
import { ChildMount, Mount } from "../../utils";
import './index.scss';

export type BasicDialogProps = PropsType<{
  model:         boolean | RefImpl<boolean>
  className?:    string | string[]
  isModalClose?: boolean  // 点击蒙层关闭，默认为 true
  children?:     ChildMount
}>
export default function(props: BasicDialogProps) {

  const dialogRef = ref<HTMLDialogElement>(null);
  const model = isRef(props.model) ? props.model : ref(props.model);

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

  return <dialog ref={dialogRef} className={['br-basic-dialog', props.className]} onmousedown={mouseDown} onclose={close}>
    <div className='br-basic-dialog-wrap' created={props.children as Mount}>
      {props.children}
    </div>
  </dialog>
}
