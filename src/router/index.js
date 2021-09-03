import Home from "../pages/home";
import Card from "../pages/card";
import Order from "../pages/order";
import Mine from "../pages/mine";

import Contact from "../pages/contact";
import Detail from "../pages/card/detail";
import OrderDetail from "../pages/order/order-detail";
import History from "../pages/mine/history";

const routes = [
    {
        path: 'home',
        name: '主页',
        component: Home,
    },
    {
        path: 'card',
        name: '购物车',
        component: Card,
        children:{
            path: 'detail',
            name: '订单详情',
            component: Detail,
        }
    },
    {
        path: 'order',
        name: '订单',
        component: Order,
        children:{
            path: 'orderDetail',
            name: '详情',
            component: OrderDetail,
        }
    },
    {
        path: 'mine',
        name: '我的',
        component: Mine,
        children:{
            path: 'history',
            name: '历史收藏',
            component: History,
        }
    }
]

export default {
    routes: routes,
    defaultPath: 'home'
}