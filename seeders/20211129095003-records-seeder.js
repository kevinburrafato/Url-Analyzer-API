'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Records', [
      {
        status: 200,
        error: 'No error',
        data: JSON.stringify({
          'url': 
            { 
            'domain': 'www.yoursite.com',
            'scheme': 'HTTP',
            'path': 'home',
            }, 
          'request': 
            {
            'method': 'get'
            },  
          'response': 
            {
            'http': '200',
            'date': 'Mon, 27 Jul 2009',
            'server': 'Apache/2.2.14 (Win32)',
            'page-load': '0.4',
            'first-interaction': '0.9'
            },
        }),  
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 404,
        error: 'Page not found',
        data: JSON.stringify({
          'url': 
            {
            'domain': 'www.mysite.com',
            'scheme': 'HTTP',
            'path': 'contact'
            },  
          'request': 
            {
            'method': 'get'
            },  
          'response': 
            {
            'http': '404',
            'date': 'Fri, 28 Sept 2009',
            'server': 'Apache/2.2.14 (Win32)',
            'page-load': '0.5',
            'first-interaction': '0.8'
            },
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 200,
        error: 'No errror',
        data: JSON.stringify({
          'url': 
            {
            'domain': 'www.othersite.com',
            'scheme': 'HTTP',
            'path': 'about'
            },  
          'request': 
            {
            'method': 'post'
            },
          'response': 
            {
            'http': '200',
            'date': 'Sun, 13 Sept 2009',
            'server': 'Apache/2.2.14 (Win32)',
            'page-load': '0.3',
            'first-interaction': '0.5'
            }, 
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Records', {}, null)
  }
};
