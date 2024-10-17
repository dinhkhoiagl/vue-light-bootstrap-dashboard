import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import UserList from 'src/pages/UserList.vue'
import CategoryList from 'src/pages/CategoryList.vue'
import ArticleList from 'src/pages/ArticleList.vue'

import UserAdd from '../pages/User/UserAdd.vue'
import UserEdit from '../pages/User/UserEdit.vue'

import CategoryAdd from '../pages/Category/CategoryAdd.vue'
import CategoryEdit from '../pages/Category/CategoryEdit.vue'

import ArticleEdit from '../pages/Article/ArticleEdit.vue'
import ArticleAdd from '../pages/Article/ArticleAdd.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'users',
        name: 'UserList',
        component: UserList
      },
      {
        path: 'users/edit/:id',
        name: 'UsersEdit',
        component: UserEdit
      },
      {
        path: 'users/add',
        name: 'UsersAdd',
        component: UserAdd
      },
      {
        path: 'articles',
        name: 'ArticleList',
        component: ArticleList
      },
      {
        path: 'articles/edit/:id',
        name: 'ArticleEdit',
        component: ArticleEdit
      },
      {
        path: 'articles/add',
        name: 'ArticleAdd',
        component: ArticleAdd
      },
      {
        path: 'categories',
        name: 'CategoryList',
        component: CategoryList
      },
      {
        path: 'categories/edit/:id',
        name: 'CategoryEdit',
        component: CategoryEdit
      },
      {
        path: 'categories/add',
        name: 'CategoryAdd',
        component: CategoryAdd
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
