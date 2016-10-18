#!/bin/bash

set -e

branches = (develop master)

if [[ $TRAVIS_PULL_REQUEST == "true" || $TRAVIS_BRANCH != "develop" && $TRAVIS_BRANCH != "master" ]];
then
    echo "Skipped deploying, because build is not triggered from develop branch"
    exit 0
fi;

echo "Starting deploy"

cp -R dist $HOME/dist

cd $HOME
git config --global user.email "travic@travis-ci.org"
git config --global user.name "Travis"

if [[ $TRAVIS_BRANCH == "master" ]]; then
    git clone --quiet https://${GH_TOKEN}@github.com/${GH_USER}/${GH_REPO_PROD}.git javazone > /dev/null
else
    git clone --quiet https://${GH_TOKEN}@github.com/${GH_USER}/${GH_REPO_TEST}.git javazone > /dev/null
fi;

cd javazone
cp -R $HOME/dist/* .

echo "Allow files with underscore https://help.github.com/articles/files-that-start-with-an-underscore-are-missing/" > .nojekyll
echo "[View live](https://${GH_USER}.github.io/${GH_REPO}/)" > README.md

git add -f .
git commit -m "Travis build $TRAVIS_BUILD_NUMBER"
git push -fq origin master > /dev/null

echo "Done deploying"
