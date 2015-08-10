angular.module('services.source', [])
.constant('channel', [
//  {name: 'Milliyet', checked: 'false'},
  {name: 'Hürriyet', checked: 'true'},
])

.constant('category', [
//  {name: 'Dünya', checked: 'false'},
  {name: 'Ekonomi', checked: 'false'},
//  {name: 'Siyaset', checked: 'false'},
//  {name: 'Yaşam', checked: 'false'},
  {name: 'Spor', checked: 'false'},
//  {name: 'Finans', checked: 'false'},
  {name: 'Magazin', checked: 'false'},
  {name: 'Gündem', checked: 'false'},
//  {name: 'Kitap', checked: 'false'},
//  {name: 'Eğitim', checked: 'false'},
//  {name: 'Otomobil', checked: 'false'},
  {name: 'Teknoloji', checked: 'true'},
//  {name: 'Milliyet Tatil', checked: 'false'},
//  {name: 'Konut Emlak', checked: 'false'},
//  {name: 'Aile', checked: 'false'},
  {name: 'Sağlık', checked: 'false'},
//  {name: 'Yemek', checked: 'false'},
//  {name: 'Diyet', checked: 'false'},
//  {name: 'İlişkiler', checked: 'false'},
//  {name: 'Dekorasyon', checked: 'false'},
//  {name: 'Yaşam', checked: 'false'},
//  {name: 'Moda', checked: 'false'},
//  {name: 'Güzellik', checked: 'false'},
//  {name: 'Astroloji', checked: 'false'},
//  {name: 'Maya Takvimi', checked: 'false'},
//  {name: 'Pembenar', checked: 'false'},
//  {name: 'Son Dakika', checked: 'false'},
//  {name: 'Yazarlar', checked: 'false'},
//  {name: 'Otomobil', checked: 'false'},
//  {name: 'Kadın', checked: 'false'},
//  {name: 'Müzik', checked: 'false'},
  {name: 'Anasayfa', checked: 'false'},
  {name: 'Planet', checked: 'false'},
  {name: 'WebTv', checked: 'false'},
  {name: 'Kültür Sanat', checked: 'false'},
  {name: 'Sinema', checked: 'false'},
])

.constant('source', [
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Dünya',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_2.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Ekonomi',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_3.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Siyaset',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_4.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Yaşam',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_5.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Spor',
    url: 'http://www.milliyet.com.tr/d/sm/skorer.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Finans',
    url: 'http://uzmanpara.milliyet.com.tr/rss/haber_rss.asp'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Magazin',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_23.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Gündem',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_24.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Kitap',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_24.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Eğitim',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_27.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Otomobil',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_32.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Teknoloji',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_36.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Milliyet Tatil',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_187.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Konut Emlak',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_204.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Aile',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_2204.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Sağlık',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_2205.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Yemek',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_2206.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Diyet',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_2207.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'İlişkiler',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_2208.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Dekorasyon',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_2209.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Yaşam',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_2210.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Moda',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_2191.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Güzellik',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_2198.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Astroloji',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_2268.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Maya Takvimi',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_2269.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Pembenar',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_2271.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Son Dakika',
    url: 'http://www.milliyet.com.tr/D/rss/rss/RssSD.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Yazarlar',
    url: 'http://www.milliyet.com.tr/D/rss/rss/RssY.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Sağlık',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_31.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Otomobil',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_32.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Kadın',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_176.xml'
  },
  {
    name: 'Milliyet',
    language: 'Tr',
    category: 'Müzik',
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_38.xml'
  },
  {
    name: 'Hürriyet',
    language: 'Tr',
    category: 'Anasayfa',
    url: 'http://rss.hurriyet.com.tr/rss.aspx?sectionId=1'
  },
  {
    name: 'Hürriyet',
    language: 'Tr',
    category: 'Gündem',
    url: 'http://rss.hurriyet.com.tr/rss.aspx?sectionId=2'
  },
  {
    name: 'Hürriyet',
    language: 'Tr',
    category: 'Ekonomi',
    url: 'http://rss.hurriyet.com.tr/rss.aspx?sectionId=4'
  },
  {
    name: 'Hürriyet',
    language: 'Tr',
    category: 'Magazin',
    url: 'http://rss.hurriyet.com.tr/rss.aspx?sectionId=2035'
  },
  {
    name: 'Hürriyet',
    language: 'Tr',
    category: 'Spor',
    url: 'http://rss.hurriyet.com.tr/rss.aspx?sectionId=14'
  },
  {
    name: 'Hürriyet',
    language: 'Tr',
    category: 'Planet',
    url: 'http://rss.hurriyet.com.tr/rss.aspx?sectionId=2249'
  },
  {
    name: 'Hürriyet',
    language: 'Tr',
    category: 'WebTv',
    url: 'http://rss.hurriyet.com.tr/webtv.aspx'
  },
  {
    name: 'Hürriyet',
    language: 'Tr',
    category: 'Teknoloji',
    url: 'http://rss.hurriyet.com.tr/rss.aspx?sectionId=2158'
  },
  {
    name: 'Hürriyet',
    language: 'Tr',
    category: 'Sağlık',
    url: 'http://rss.hurriyet.com.tr/rss.aspx?sectionId=2446'
  },
  {
    name: 'Hürriyet',
    language: 'Tr',
    category: 'Kültür Sanat',
    url: 'http://rss.hurriyet.com.tr/rss.aspx?sectionId=2451'
  },
  {
    name: 'Hürriyet',
    language: 'Tr',
    category: 'Sinema',
    url: 'http://rss.hurriyet.com.tr/rss.aspx?sectionId=2437'
  },
  {
    name: 'Hürriyet',
    language: 'Tr',
    category: 'Astroloji',
    url: 'http://rss.hurriyet.com.tr/rss.aspx?sectionId=2409'
  },
])