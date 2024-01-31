import { h, nextTick, PropsType, ref, render, watch } from "pl-vue";
import { CodeConversion } from '~/core/tools';
import '~/core/styles/markdown.scss';
import '~/core/styles/custom-code-highlight.scss';
import { highlightOption } from "@/utils/string";
import CodeEdit from "~/core/comp/CodeEdit";

type Props = PropsType<{
  text:       string
  className?: string
}>
export default function(props: Props) {
  const html = ref('');
  const wrapRef = ref<HTMLDivElement>();

  import ('marked').then(async res => {
    html.value = await res.marked.parse(props.text);
    nextTick(() => {
      const nodes = wrapRef.value.querySelectorAll('pre code');
      [...nodes].forEach((el: HTMLElement) => {
        const node = render(<CodeEdit defaultValue={el.innerText} isEdit={false} isCopy={true} toHtml={val => conversion.output(el.innerText)} />);
        wrapRef.value.replaceChild(node, el.parentElement);
      })
    })
  })

  const conversion = new CodeConversion(highlightOption);

  watch(() => html.value, () => {
    nextTick(() => {
      const child = wrapRef.value.querySelectorAll('pre code');
      [...child].forEach((val: HTMLElement) => {
        val.innerHTML = conversion.output(val.innerText);
      })
    })
  })

  return <div ref={wrapRef} className={['markdown', props.className]} innerHTML={() => html.value}></div>
}
