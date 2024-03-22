const e=`import { h, onMounted, ref, render, PropsType, recycleDepend } from "pl-vue";
import { isBrowser } from "pl-vue/lib/utils";
import { delay } from "../../utils/async";
import './index.scss';

const queue    = new Set();
const ANI_TIME = 400;
let   topCount = 0;

type Props = PropsType<{
  message:   string
  type:      'info' | 'success' | 'error' | 'warning'
  duration?: number | null
}>
function Comp(props: Props) {

  const visible = ref(true);
  const elRef   = ref<HTMLElement>();
  let   timer   = null;

  const id = Symbol('id');
  queue.add(id);

  onMounted(async () => {
    elRef.value.style.top = topCount + 'px';
    const height = elRef.value.offsetHeight;
    topCount += height + 10;
    await delay(100);
    visible.value = false;
    anewClose();
  })

  async function close() {
    // 队列为空，直接删除容器
    if (queue.size === 0) {
      topCount = 0;
      wrapEl.remove();
      return;
    }

    // 元素可能被提前移除
    const height = elRef.value.offsetHeight;
    if (height === 0) {
      recycleDepend(visible, elRef);  // 回收内存
      return;
    }

    visible.value = true;
    await delay(ANI_TIME);
    queue.delete(id);

    const sort = Number(elRef.value.dataset.sort);  // 在删除前记录排序
    topCount -= height + 10;
    if (topCount < 0) topCount = 0;
    elRef.value.remove();

    // 移动剩余的元素
    [...wrapEl.children].forEach((val: HTMLElement, index) => {
      if (index < sort) return;
      if (val.dataset.lock === 'true') return;
      const top = parseInt(val.style.top);
      val.style.top = top - height - 10 + 'px';
      val.dataset.sort = index + '';
    })
  }

  function cancelClose() {
    elRef.value.dataset.lock = 'true';
    clearTimeout(timer);
    visible.value = false;
  }
  
  function anewClose() {
    elRef.value.dataset.lock = 'false';
    if (props.duration === null) return;
    timer = setTimeout(close, props.duration || 4000);
  }

  return <div
    ref={elRef}
    className={() => ['br-message', props.type, visible.value && 'hidden']}
    data-sort={queue.size - 1 + ''}
    style={\`--time: \${ANI_TIME / 1000}s\`}
    onmouseenter={cancelClose}
    onmouseout={anewClose}
  >
    {props.message}
    <span className='icon-close' onclick={close}>×</span>
  </div>
}

let wrapEl: HTMLElement = null;
let parent: Element = null;
let backupParent: Element = null;

function Message(config: Props) {
  if (!isBrowser()) return;
  const el = render(<Comp {...config} />);
  const dialogs = document.querySelectorAll('dialog[open]');
  const dialog = dialogs[dialogs.length - 1];
  if (dialog) {
    parent = dialog;
  } else {
    parent = document.body;
  }
  if (!wrapEl) {
    wrapEl = render(<div className='br-message-wrap'></div>);
    parent.appendChild(wrapEl);
    backupParent = parent;
  } else {
    if (parent !== backupParent) {
      Message.closeAll();
      backupParent = parent;
    }
    parent.appendChild(wrapEl);
  }
  wrapEl.appendChild(el);
}

Message.info = (message: string) => Message({ message, type: 'info' });
Message.success = (message: string) => Message({ message, type: 'success' });
Message.error = (message: string) => Message({ message, type: 'error' });
Message.warning = (message: string) => Message({ message, type: 'warning' });
Message.closeAll = async () => {
  if (!isBrowser() || !wrapEl) return;
  [...wrapEl.children].forEach(val => {
    val.classList.add('hidden');
    val.remove();
  })
  queue.clear();
  topCount = 0;
  wrapEl.remove();
}

export default Message;
`;export{e as default};
