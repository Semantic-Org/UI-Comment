var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-comment',
  summary : 'Semantic UI - Comment (official): Single component release of comment',
  version : '1.9.0',
  git     : 'git://github.com/Semantic-Org/UI-Comment.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
