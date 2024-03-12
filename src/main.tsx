import { h, Fragment, render, ref, watch, onMounted } from "pl-vue";
import { Router, Route, initRouter, Link, useRoute } from "pl-vue/lib/router";
import "./styles/index.scss";
import style from './style.module.scss';
import env from "~/config/env";
import Home from './pages/home';
import Tools from './pages/tools';
import Comp from './pages/comp';
import { isPhone } from "./utils/judge";
import Select from "~/core/comp/Select";
import Option from "~/core/comp/Select/option";
import useScreenStore from '@/store/screen';

function App() {
  initRouter({
    mode: 'hash',
  });

  const open = ref(false);
  const route = useRoute();
  watch(() => route.path, () => {
    open.value = false;
  })

  const navRef = ref<HTMLElement>();
  onMounted(() => {
    navRef.value.addEventListener('click', () => {
      open.value = false;
    }, true)
  })

  const screenStore = useScreenStore();

  return <>
    <header className={style.header}>
      <div>
        <span className={() => [style.iconMenu, open.value && style.active]} onclick={() => open.value = !open.value}>
          <span></span>
        </span>
        <Link className={style.title} to='/'>{env.PROJECT_NAME}</Link>
      </div>
      {isPhone && <Select model={screenStore.isPlVue} onChange={screenStore.setIsPlVue}>
        <Option label="原生" value={false} />
        <Option label="PlVue" value={true} />
      </Select>}

      <nav ref={navRef} className={() => open.value && style.active}>
        {!isPhone && <Select model={screenStore.isPlVue} onChange={screenStore.setIsPlVue}>
          <Option label="原生" value={false} />
          <Option label="PlVue" value={true} />
        </Select>}
        {!isPhone && <Link to='/'>简介</Link>}
        <Link id='nav-comp' to='/comp'>组件</Link>
        <Link id='nav-tools' to='/tools'>工具</Link>
        <a href='https://github.com/yubo9807/broad-ui' target='_blank'>GitHub</a>
      </nav>
    </header>
    <main className={['leayer', style.main]}>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/comp" component={Comp} exact={false} />
        <Route path="/tools" component={Tools} exact={false} />
      </Router>
    </main>
    <footer className={style.footer}>
      <div className="leayer">
        <p style='color: #999'>暂未发布正式版本，敬请期待！</p>
        <p>
          技术支持：
          <a href='http://plvue.hpyyb.cn' target='_blank'>Pl Vue</a>
        </p>
      </div>
    </footer>
  </>
}

document.body.appendChild(render(<App />));
