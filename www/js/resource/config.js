angular.module('resource.config', [])
.constant('database', {
  name: 'catalystDB',
  tables: [
    {
      // This config table is necessary!
      name: 'config',
      columns: [
        {name: 'id', type: 'integer primary key'},
        {name: 'key', type: 'text'},
        {name: 'value', type: 'text'},
        {name: 'builder', type: 'text'},
      ]
    },
    {
      name: 'news',
      columns: [
        {name: 'id', type: 'text'},
        {name: 'name', type: 'text'},
        {name: 'language', type: 'text'},
        {name: 'category', type: 'text'},
        {name: 'title', type: 'text'},
        {name: 'img', type: 'text'},
        {name: 'url', type: 'text'},
        {name: 'createdate', type: 'datetime'},
      ]
    },
    {
      name: 'channel',
      columns: [
        {name: 'id', type: 'text'},
        {name: 'name', type: 'text'},
        {name: 'checked', type: 'text'},
      ]
    },
    {
      name: 'category',
      columns: [
        {name: 'id', type: 'text'},
        {name: 'name', type: 'text'},
        {name: 'checked', type: 'text'},
      ]
    },
    {
      name: 'source',
      columns: [
        {name: 'id', type: 'text'},
        {name: 'name', type: 'text'},
        {name: 'language', type: 'text'},
        {name: 'category', type: 'text'},
        {name: 'url', type: 'text'},
      ]
    },
  ]
})

.constant('migration', [
//  {
//    migration: 1,
//    name: 'catalystDB',
//    tables: [
//      {
//        name: 'AddOns',
//        columns: [
//          {name: 'id', type: 'text'},
//          {name: 'data', type: 'text'}
//        ]
//      },
//    ]
//  },
])
