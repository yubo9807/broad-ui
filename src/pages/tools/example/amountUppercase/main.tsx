import { computed, h, ref } from "pl-vue"
import { amountUppercase } from "~/core/tools";

export default function() {

  const money = ref('1234');
  const result = computed(() => {
    let str = '';
    try {
      str = amountUppercase(money.value)
    } catch (err) {
      alert(err.message);
    }
    return str;
  })

  return <div>
    <input value={money.value} style="width: 300px" oninput={e => money.value = e.target.value} />
    <p>{() => result.value}</p>
  </div>
}
