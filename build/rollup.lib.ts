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
copyFileSync('package.lib.json', 'lib/package.json');
copyFileSync('readme.md', 'lib/readme.md');

const utils = readdirSync('core/utils');
utils.forEach(async val => {
  const filename = val.split('.')[0];

  const bundle = await rollup({
    input: `core/utils/${val}`,
    external(source, importer, isResolved) {
      return true;
    },
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

  // const result = generateDtsBundle([{
  //   filePath: `core/utils/${val}`,
  // }])
  // mkdir(`lib/utils`);
  // writeFileSync(`lib/utils/${filename}.d.ts`, result[0]);
})


const components = readdirSync('core/comp');
components.forEach(async val => {
  const bundle = await rollup({
    input: `core/comp/${val}/index.tsx`,
    external(source, importer, isResolved) {
      return true;
    },
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
      //     src: `core/comp/${val}/index.scss`, dest: `lib/comp/${val}`,
      //   }]
      // })
    ],
  })
  await bundle.write({
    format: 'es',
    file: `lib/comp/${val}/index.js`,
  });
  await bundle.close();

  // const result = generateDtsBundle([{
  //   filePath: `core/comp/${val}/index.tsx`,
  // }])
  // mkdir(`lib/comp/${val}`);
  // writeFileSync(`lib/comp/${val}/index.d.ts`, result[0]);
})

const tools = readdirSync('core/tools');
tools.forEach(async val => {
  if (!val.endsWith('.ts')) return;
  const filename = val.split('.')[0];

  const bundle = await rollup({
    input: `core/tools/${val}`,
    external(source, importer, isResolved) {
      return true;
    },
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

  // const result = generateDtsBundle([{
  //   filePath: `core/tools/${val}`,
  // }])
  // mkdir('lib/tools');
  // writeFileSync(`lib/tools/${filename}.d.ts`, result[0]);
})


