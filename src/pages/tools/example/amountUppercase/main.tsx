import { h, ref } from "pl-vue"
import { amountUppercase } from "~/core/tools";

export default function() {

  const money = ref('1234');

  return <div>
    <input value={money.value} type="number" style="width: 300px" oninput={e => money.value = e.target.value} />
    <p>{() => amountUppercase(money.value)}</p>
  </div>
}
