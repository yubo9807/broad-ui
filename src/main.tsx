import { h, Fragment, render } from "pl-vue";
import { Router, Route, initRouter, Link } from "pl-vue/lib/router";
import "./styles/index.scss";
import style from './style.module.scss';
import env from "~/config/env";
import Home from './pages/home';
import Tools from './pages/tools';
import Comp from './pages/comp';

function App() {
  initRouter({
    mode: 'hash',
  });

  return <>
    <header className={style.header}>
      <Link to='/'>{env.PROJECT_NAME}</Link>
      <nav>
        <Link to='/'>首页</Link>
        <Link to='/comp'>组件</Link>
        <Link to='/tools'>工具</Link>
        <a href='https://github.com/yubo9807/broad-ui' target='_blank'>GitHub</a>
      </nav>
    </header>
    <main className={['leayer', style.main]}>
      <Router>
        <Route path="/comp" component={Comp} exact={false} />
        <Route path="/tools" component={Tools} exact={false} />
        <Route path="/" component={Home} />
      </Router>
    </main>
    <footer className={style.footer}>
      <div className="leayer">
        技术支持：
        <a href='http://plvue.hpyyb.cn' target='_blank'>Pl Vue</a>
      </div>
    </footer>
  </>
}

document.body.appendChild(render(<App />));
