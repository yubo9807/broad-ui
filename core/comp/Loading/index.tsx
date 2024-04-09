import { PropsType, RefImpl, defineExpose, h, isRef, ref, useComponent } from "pl-vue"
import { ChildMount, ExcludeKey, Mount } from "~/core/utils"
import './index.scss'

export type LoadingProps = PropsType<{
  model:      boolean | RefImpl<boolean>
  className?: string
  childIcon?: ChildMount
  childTips?: ChildMount
}>
export type LoadingExpose = {
  updateModel: (bool: boolean) => void
}
export default function Loading(props: LoadingProps) {

  const model = isRef(props.model) ? props.model : ref(props.model);

  defineExpose<LoadingExpose>({
    updateModel: (bool: boolean) => {
      model.value = bool;
    }
  })

  return <div className={['br-loading', props.className]} style={{
    display: () => model.value ? 'block' : 'none',
  }}>
    <div className="wrap">
      <div className="box" created={props.childIcon as Mount}>{props.childIcon}</div>
      <div className='tips' created={props.childTips as Mount}>{props.childTips}</div>
    </div>
  </div>
}

interface LoadingLivingOption extends ExcludeKey<LoadingProps, 'model'> {
  wrapEl: HTMLElement
}
export class LoadingLiving {
  visible = ref(false);
  constructor(option: LoadingLivingOption) {
    const { wrapEl, ...props } = option;
    const node = useComponent(Loading, {
      ...props,
      model: this.visible,
    })
    wrapEl.appendChild(node);
  }

  /**
   * 打开
   */
  open() {
    this.visible.value = true;
  }

  /**
   * 关闭
   */
  close() {
    this.visible.value = false;
  }
}
