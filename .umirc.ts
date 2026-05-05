import { defineConfig } from '@umijs/max';
import antdDayjs from 'antd-dayjs-webpack-plugin';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: false,
  routes: [
    {
      path: '/',
      redirect: '/salon',
    },
    {
      name: 'Toni Salon',
      path: '/salon',
      component: './Salon',
    },
  ],
  npmClient: 'pnpm',
  chainWebpack(config) {
    config.plugin('antd-dayjs').use(antdDayjs);
  },
});
