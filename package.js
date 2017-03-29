
Package.describe({
  name    : 'semantic:ui-comment',
  summary : 'Semantic UI - Comment: Single component release',
  version : '2.2.10',
  git     : 'git://github.com/Semantic-Org/UI-Comment.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'comment.css'
  ], 'client');
});
