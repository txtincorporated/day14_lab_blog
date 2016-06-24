//Sets Web root as articles pseudo-page to load all articles on index load, refresh or return
page('/',
  articlesController.loadAll,
  articlesController.index);
//Sets about section as pseudo-page to load on "about" click, refresh or return
page('/about', aboutController.index);
//Sets "Read On" link to load entire article on c, r or R
page('/article/:id',
  articlesController.loadById,
  articlesController.index);

// Redirect home if the default filter option is selected:
page('/category', '/');
page('/author', '/');
//Sets author filter to load articles by selected author
page('/author/:authorName',
  articlesController.loadByAuthor,
  articlesController.index);
//Same drill as author filter but with categories
page('/category/:categoryName',
  articlesController.loadByCategory,
  articlesController.index);
//Runs the function
page();
