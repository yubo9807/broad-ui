import { PropsType, watch, h, onMounted, ref, RefImpl, isRef, ClassNameType } from "pl-vue"
import { ChildMount, Mount } from "../../utils";
import './index.scss';

export type BasicDialogProps = PropsType<{
  model:         boolean | RefImpl<boolean>
  className?:    ClassNameType
  children?:     ChildMount
  isModalClose?: boolean  // 点击蒙层关闭，默认为 true
  onModal?:      (e: MouseEvent) => void
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
    if (e.target === dialogRef.value) {
      props.onModal && props.onModal(e);
      !(props.isModalClose === false) && close();
    }
  }

  return <dialog ref={dialogRef}
    className={['br-basic-dialog', ...[props.className].flat()]}
    onmousedown={mouseDown}
    onclose={close}
  >
    <div className='br-basic-dialog-wrap' created={props.children as Mount}>
      {props.children}
    </div>
  </dialog>
}
