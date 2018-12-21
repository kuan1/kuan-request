#!/bin/bash

start_deploy() {
  echo "starting..."; # major、minor、patch

  git add .;

  git commit -a -m 'ready update version';

  npm run build;

  npm version patch;

  npm publish;

  echo "end";
}

read -r -p "Are You Sure? [Y/n] " input

case $input in
  [yY][eE][sS]|[yY])
  echo "YES"
  start_deploy
  ;;

  [nN][oO]|[nN])
  echo "No"
  ;;

  *)
	echo "Invalid input..."
	exit 1
	;;
esac
