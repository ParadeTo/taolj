import {Image, List, NavBar, TabBar} from 'antd-mobile'
import {gql, useQuery} from '@apollo/client'
import {AppOutline, UserOutline} from 'antd-mobile-icons'
import style from './app.module.css'
import {Outlet, useLocation} from 'react-router-dom'

const tabs = [
  {
    key: 'home',
    title: '首页',
    path: '/',
    icon: <AppOutline />,
  },
  {
    key: 'my',
    title: '我的',
    path: '/login',
    icon: <UserOutline />,
  },
]

function App() {
  const location = useLocation()

  return (
    <div className={style.app}>
      <div className={style.nav}>
        <NavBar>配合路由使用</NavBar>
      </div>
      <div className={style.body}>
        <Outlet />
      </div>
      <div className={style.tabBar}>
        <TabBar
          safeArea
          activeKey={tabs.find((tab) => tab.path === location.pathname)?.key}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  )
}

export default App
