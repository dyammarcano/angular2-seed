import { provideRouter, RouterConfig } from '@angular/router';
import { About } from './about';
import { Home } from './home';
import { RepoBrowser, RepoList, RepoDetail } from './github';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: 'home',
    terminal: true
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'github',
    component: RepoBrowser,
    children: [
      {
        path: ':org',
        component: RepoList,
        children: [
          {
            path: ':repo',
            component: RepoDetail
          },
          {
            path: '',
            component: RepoDetail
          }
        ]
      },
      {
        path: '',
        component: RepoList
      }
    ]
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
