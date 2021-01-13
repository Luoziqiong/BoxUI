module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        name: '首页',
        path: 'README'
      },
      {
        name: '组件',
        path: '/components',
        children: [
          {
            name: '首页',
            path: '/components/button'
          },
        ],
      }
    ],
  }
}