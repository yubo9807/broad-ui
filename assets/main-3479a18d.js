const o=`import { h } from "pl-vue"
import { BloomFilter } from "~/core/tools";

export default () => {

  const bloom = new BloomFilter(1024 * 8, 32);
  bloom.add('foo');
  bloom.add("bar");

  return <div>
    <p>{bloom.has('foo')+''}</p>
    <p>{bloom.has('bar')+''}</p>
    <p>{bloom.has('baz')+''}</p>
  </div>
}`;export{o as default};
