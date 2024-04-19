import { BloomFilter } from "~/core/tools";

export default () => {

  const bloom = new BloomFilter(1024 * 8, 32);
  bloom.add('foo');
  bloom.add("bar");

  console.log(bloom.has('foo'));
  console.log(bloom.has('bar'));
  console.log(bloom.has('baz'));

}