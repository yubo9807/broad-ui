
export default function(...args: string[]) {
  return {
    name: 'add-import',

    renderChunk(code: string) {
      return `${args.join('\n')}\n${code}`;
    }

  }
}