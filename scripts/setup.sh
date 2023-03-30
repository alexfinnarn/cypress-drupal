#!/usr/bin/env bash

# Taken from https://ddev.readthedocs.io/en/stable/users/quickstart/
ddev config --project-type=drupal10 --docroot=web --create-docroot
echo "\n\n\nListing stuff...\n\n\n"
ls -al
echo "\n\n\nStarting ddev...\n\n\n"
ddev start
ddev composer create drupal/recommended-project web
ddev composer require drush/drush
ddev drush site:install --account-name=admin --account-pass=admin -y
