#!/bin/bash

set -e

if [[ $TRAVIS_BRANCH == "master" && $TRAVIS_PULL_REQUEST == "false" ]]; then

    echo "Starting deploy\n"

    cp -R dist $HOME/dist

    cd $HOME
    git config --global user.email "travis@travis-ci.org"
    git config --global user.name "Travis"

    git clone --quiet https://${GH_TOKEN}@github.com/${GH_USER}/${GH_REPO}.git javazone > /dev/null

    cd javazone
    cp -R $HOME/dist/* .

    echo "Allow files with underscore https://help.github.com/articles/files-that-start-with-an-underscore-are-missing/" > .nojekyll
    echo "[View live](https://${GH_USER}.github.io/${GH_REPO}/)" > README.md

    git add -f .
    git commit -m "Travis build $TRAVIS_BUILD_NUMBER"
    git push -fq origin master > /dev/null

    echo "Done deploying\n"

else
    echo "Skipped deploying, because build is not triggered from develop branch"
fi;
