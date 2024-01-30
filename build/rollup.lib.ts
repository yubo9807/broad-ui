import { rollup } from 'rollup';
import typescript2 from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import addImport from './plugins/add-import';
import copy from 'rollup-plugin-copy';
import { generateDtsBundle } from 'dts-bundle-generator';
import { readdirSync, existsSync, copyFileSync, mkdirSync, writeFileSync } from 'fs';

function mkdir(path: string) {
  !existsSync(path) && mkdirSync(path, { recursive: true });
}

mkdir('lib');
copyFileSync('core/package.json', 'lib/package.json');

const utils = readdirSync('core/utils');
utils.forEach(async val => {
  const filename = val.split('.')[0];

  const bundle = await rollup({
    input: `core/utils/${val}`,
    plugins: [
      typescript2({
        tsconfig: 'tsconfig.json',
      }),
    ],
  })
  await bundle.write({
    format: 'es',
    file: `lib/utils/${filename}.js`,
  });
  await bundle.close();

  const result = generateDtsBundle([{
    filePath: `core/utils/${val}`,
  }])
  mkdir(`lib/utils`);
  writeFileSync(`lib/utils/${filename}.d.ts`, result[0]);
})


const components = readdirSync('core/comp');
components.forEach(async val => {
  buildComp(val);
  const result = generateDtsBundle([{
    filePath: `core/comp/${val}/index.tsx`,
  }])
  mkdir(`lib/comp/${val}`);
  writeFileSync(`lib/comp/${val}/index.d.ts`, result[0]);
})

/**
 * 打包组件
 * @param filename 
 */
async function buildComp(filename: string) {
  const bundle = await rollup({
    input: `core/comp/${filename}/index.tsx`,
    external: ['../../utils'],
    plugins: [
      typescript2({
        tsconfig: 'tsconfig.json',
      }),
      scss({
        fileName: 'index.css',
      }),
      addImport("import './index.css';"),
      // copy({
      //   targets: [{
      //     src: `core/comp/${filename}/index.scss`, dest: `lib/comp/${filename}`,
      //   }]
      // })
    ],
  })
  await bundle.write({
    format: 'es',
    file: `lib/comp/${filename}/index.js`,
  });
  await bundle.close();
}

const tools = readdirSync('core/tools');
tools.forEach(async val => {
  const filename = val.split('.')[0];

  const bundle = await rollup({
    input: `core/tools/${val}`,
    external: ['../../utils'],
    plugins: [
      typescript2({
        tsconfig: 'tsconfig.json',
      }),
    ],
  })
  await bundle.write({
    format: 'es',
    file: `lib/tools/${filename}.js`,
  });
  await bundle.close();

  const result = generateDtsBundle([{
    filePath: `core/tools/${val}`,
  }])
  mkdir('lib/tools');
  writeFileSync(`lib/tools/${filename}.d.ts`, result[0]);
})


