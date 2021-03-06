/**
 *创建时间:  2017/11/4
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能:我们为了统一方便的管理路由和页面的关系，将配置信息统一抽离到 common/nav.js 下，同时应用动态路由
 */

import dynamic from 'dva/dynamic';

// dynamic包装 函数
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component,
});

// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, ['user', 'login', 'home', 'home_news'], () => import('../layouts/BasicLayout')),
    layout: 'BasicLayout',
    name: '首页',
    path: '/',
    children: [
      {
        name: 'Main',
        icon: 'main',
        path: 'main',
        children: [
          {
            name: '主页',
            path: 'home',
            component: dynamicWrapper(app, [], () => import('../routes/Main/Home')),
          },
          {
            name: '登录',
            path: 'login',
            component: dynamicWrapper(app, [], () => import('../routes/HomeLogin/Index')),
          },
          {
            name: '注册',
            path: 'register',
            component: dynamicWrapper(app, [], () => import('../routes/Register/Index')),
          },
          {
            name: '新闻详情',
            path: 'newsDetail',
            component: dynamicWrapper(app, [], () => import('../routes/NewsDetail/Index')),
          },
        ],
      },
    ],
  },
  {
    component: dynamicWrapper(app, [], () => import('../layouts/AppDownloadLayout')),
    path: '/appDown',
    layout: 'AppDownloadLayout',
  },
  {
    component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
    path: '/user',
    layout: 'UserLayout',
    children: [
      {
        name: '账户',
        icon: 'user',
        path: 'user',
        children: [
          {
            name: '登录',
            path: 'login',
            component: dynamicWrapper(app, ['login'], () => import('../routes/User/Login')),
          },
        ],
      },
    ],
  },
  {
    component: dynamicWrapper(app, ['personal_centered'], () => import('../layouts/PersonalLayout')),
    path: '/personal',
    layout: 'PersonalLayout',
    children: [
      {
        name: '用户',
        icon: 'personal',
        path: 'personal',
        children: [
          {
            name: '用户信息',
            path: 'userinfo',
            component: dynamicWrapper(app, [], () => import('../routes/PersonalCentered/Index')),
          },
          {
            name: '用户头像',
            path: 'avatarEditor',
            component: dynamicWrapper(app, [], () => import('../routes/AvatarEditors/Index')),
          },
        ],
      },
    ],
  },
  {
    component: dynamicWrapper(app, ['blog', 'blog_list'], () => import('../layouts/BlogLayout')),
    path: '/blog',
    layout: 'BlogLayout',
    children: [
      {
        name: '博客',
        icon: 'blog',
        path: 'blog',
        children: [
          {
            name: '主页',
            path: 'index',
            component: dynamicWrapper(app, [], () => import('../routes/BlogList/Index')),
          },
          {
            name: '写博',
            path: 'editor',
            component: dynamicWrapper(app, [], () => import('../routes/BlogEditor/Index')),
          },
          {
            name: '归档',
            path: 'archives',
            component: dynamicWrapper(app, [], () => import('../routes/BlogArchives/Index')),
          },
          {
            name: '标签',
            path: 'tags',
            component: dynamicWrapper(app, [], () => import('../routes/BlogTags/Index')),
          },
          {
            name: '链接',
            path: 'links',
            component: dynamicWrapper(app, [], () => import('../routes/BlogLinks/Index')),
          },
          {
            name: '留言',
            path: 'leaveMsg',
            component: dynamicWrapper(app, ['blog_leave_msg'], () => import('../routes/BlogLeaveMsg/Index')),
          },
          {
            name: '关于',
            path: 'abouts',
            component: dynamicWrapper(app, [], () => import('../routes/BlogAbouts/Index')),
          },
          {
            name: '博客详情',
            path: 'acticle_detail',
            component: dynamicWrapper(app, [], () => import('../routes/BlogActicleDetail/Index')),
          },
        ],
      },
    ],
  },
];
