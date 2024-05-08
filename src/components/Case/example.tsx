import { Component, h, nextTick, ref, render, watch } from "pl-vue";
import CodeEdit from "~/core/comp/CodeEdit";
import Dialog from "~/core/comp/BasicDialog";
import style from './style.module.scss';
import { CodeConversion } from "~/core/tools";
import '~/core/styles/custom-code-highlight.scss';
import { highlightOption } from "@/utils/string";
import { marked } from "marked";
import env from '~/config/env';
import { Item } from ".";
import { isPhone } from "@/utils/judge";
import useScreenStore from '@/store/screen';
import Message from "~/core/comp/Message";

class CodeConversion2 extends CodeConversion {
  constructor() {
    super(highlightOption);
  }
  output(text: string): string {
    this._textList = [{ content: text.replace(/</g, '&lt;').replace(/>/g, '&gt;') }];
    const option = this._option;

    return this
      ._commonDealWith(/`[^`]*`/g, 'string')
      ._commonDealWith(option.multiRowComment, 'block-comment')
      ._commonDealWith(option.singleLineComment, 'line-comment')
      ._commonDealWith(option.string, 'string')
      ._commonDealWith(option.number, 'number')
      ._commonDealWith(option.constant, 'constant')
      ._keyword(option.keywords)
      ._commonDealWith(option.methods, 'methods')
      ._commonDealWith(option.object, 'object')
      ._merge();
  }
}
const conversion = new CodeConversion2();

export default function(row: Item) {
  return new Promise(async resolve => {
    function Fun() {
      const code = ref('');
      function formatCode(text: string) {
        return text.replace(/~\/core/g, env.PROJECT_NAME.toLocaleLowerCase());
      }

      const Comp = ref<Component>();

      const screenStore = useScreenStore();
      if (screenStore.isPlVue) {
        // pl-vue
        row.mainRaw.then(res => {
          code.value = formatCode(res.default.trim());
        })
        row.main.then(res => {
          Comp.value = res.default;
        })
      } else {
        // 原生
        row.domRaw.then(res => {
          code.value = formatCode(res.default.trim());
        })
        row.dom.then(res => {
          res.default();
        })
      }


      // 说明文件
      const readmeHtml = ref('');
      const markdownRef = ref<HTMLElement>();
      row.readme.then(async res => {
        readmeHtml.value = await marked.parse(res.default);
        nextTick(() => {
          const nodes = markdownRef.value.querySelectorAll('pre code');
          [...nodes].forEach((el: HTMLElement) => {
            const node = render(<HignOrderCodeEdit model={el.innerText.trim()} />);
            markdownRef.value.replaceChild(node, el.parentElement);
          })
        })
      })

      const visible = ref(false);
      const originCode = ref('');
      watch(() => visible.value, value => {
        if (value) {
          row.code.then(async res => {
            originCode.value = res.default.trim();
          })
        } else {
          originCode.value = '';
        }
      })
      

      return <div className={style.case}>
        {isPhone && <h1 className={style.title}>{row.name}</h1>}
        <h2>Preview</h2>
        <div id='container' className={style.preview}>
          {() => Comp.value && <Comp.value />}
        </div>
        <div className={style.code}>
          <h2>Code</h2>
          {() => code.value && <HignOrderCodeEdit model={code.value} />}
          <a className={style.originCodeBtn} onclick={() => visible.value = true}>源码</a>
        </div>
        <div ref={markdownRef} className='markdown' innerHTML={() => readmeHtml.value}></div>

        <Dialog model={visible} className={style.dialogOriginCode}>
          <header>
            <h3>源码</h3>
          </header>
          <main>
            {() => originCode.value && <HignOrderCodeEdit model={originCode.value} />}
          </main>
          <span className={style.close} onclick={() => visible.value = false}>×</span>
        </Dialog>
      </div>
    }

    resolve({ default: Fun })
  })
}

type CodeEditProps = {
  model: string
}
function HignOrderCodeEdit(props: CodeEditProps) {
  return <CodeEdit
    model={props.model}
    isEdit={false}
    isCopy={true}
    toHtml={val => conversion.output(val)}
    onCopy={() => Message.success('复制成功')}
  />
}