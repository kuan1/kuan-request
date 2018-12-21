echo "starting..."; # major、minor、patch

git add .;

git commit -a -m 'ready update version';

npm version patch;

npm run build;

# npm publish;

echo "end";