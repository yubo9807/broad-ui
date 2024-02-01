import { Component, h, nextTick, ref, render } from "pl-vue";
import CodeEdit from "~/core/comp/CodeEdit";
import style from './style.module.scss';
import { CodeConversion } from "~/core/tools";
import '~/core/styles/custom-code-highlight.scss';
import { highlightOption } from "@/utils/string";
import { marked } from "marked";
import env from '~/config/env';
import { Item } from ".";

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

      if (row.main) {
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
            const node = render(<CodeEdit defaultValue={el.innerText.trim()} isEdit={false} isCopy={true} toHtml={val => conversion.output(val)} />);
            markdownRef.value.replaceChild(node, el.parentElement);
          })
        })
      })

      return <div>
        <h2 className={style.title}>Preview</h2>
        <div id='container' className={style.preview}>
          {() => Comp.value && <Comp.value />}
        </div>
        <div className={style.code}>
          <h2 className={style.title}>Code</h2>
          {() => code.value && <CodeEdit defaultValue={code.value} isEdit={false} isCopy={true} toHtml={val => conversion.output(val)} />}
        </div>
        <div ref={markdownRef} className='markdown' innerHTML={() => readmeHtml.value}></div>
      </div>
    }

    resolve({ default: Fun })
  })
}
