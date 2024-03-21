export class Inlay {
  #map = new Map();
  [k: string | symbol]: Function

  /**
   * 字符镶嵌
   * @call1 const style = new Inlay()
   * @call2 style.a`color: red;`
   * @call3 后续访问属性 style.a  ==> color: red;
   */
  constructor() {
    const map = this.#map; 

    return new Proxy(this, {
      get(target, key) {
        if (map.has(key)) return map.get(key);

        Reflect.set(target, key, function (first: string[], ...args: string[]) {
          if (!first) {
            console.warn(`[${key.toString()}] is empty`);
            return;
          }
          let str = '';
          for (let i = 0; i < args.length; i++) {
            str += first[i];
            str += args[i];
          }
          str += first[first.length - 1];
          map.set(key, str.trim());
          return first[0];
        })
        return target[key as string];
      }
    })

  }
}
