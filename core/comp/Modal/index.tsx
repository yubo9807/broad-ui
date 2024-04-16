import { PropsType, RefImpl, h, Fragment, isRef, ref, useComponent } from "pl-vue";
import { ChildMount, Mount } from "~/core/utils";
import BasicDialog from "../BasicDialog";
import './index.scss';

type Props = PropsType<{
  model:        boolean | RefImpl<boolean>
  title:        string
  className?:   string
  children?:    ChildMount
  childFooter?: ChildMount
  onOk?:        () => void
  onCancel?:    () => void
}>
export default function Modal(props: Props) {

  const model = isRef(props.model) ? props.model : ref(props.model);

  function close() {
    model.value = false;
    if (props.onCancel) props.onCancel();
  }

  return <BasicDialog model={props.model} className={['br-modal', props.className]} isModalClose={false}>
    <header>
      <h2 className="title">{props.title}</h2>
      <span className='icon-close' onclick={close}>×</span>
    </header>
    <main created={props.children as Mount}>
      {props.children}
    </main>
    {<footer created={props.childFooter as Mount}>
      {props.childFooter || <>
        <button className='btn-cancel' onclick={close}>取消</button>
        <button className='btn-ok' onclick={props.onOk}>确定</button>
      </>}
    </footer>}
  </BasicDialog>
}

type AffirmOption = {
  title:   string
  content: string
}
export function ModalAffirm(option: AffirmOption) {
  return new Promise((resolve, reject) => {
    const model = ref(true);
    const node = useComponent(Modal, {
      model,
      title:    option.title,
      children: option.content,
      onOk() {
        resolve(true);
        node.remove();
      },
      onCancel() {
        reject(false);
        node.remove();
      }
    });
    document.body.appendChild(node);
  })
}
