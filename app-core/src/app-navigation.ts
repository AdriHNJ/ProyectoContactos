import DataSource from "devextreme/data/data_source";

export const navigation = [
  {
    text: 'Aplicaciones',
    //path: '/',
    //icon: 'home'
  },
  {
    text: 'Calculadora',
    url: '',
    icon: 'home'
  },
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },

  {
    text: 'Examples',
    icon: 'folder',
    items: [
      {
        text: 'Profile',
        path: '/profile'
      },
      {
        text: 'Tasks',
        path: '/tasks'
      }
    ]
  }
];
