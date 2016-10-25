#!/bin/bash

set -e

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

git add -f .
git commit -m "Travis build $TRAVIS_BUILD_NUMBER"
git push -fq origin master > /dev/null

echo "Done deploying"

if [[ $TRAVIS_BRANCH == "master" ]]; then
    curl -X POST --data-urlencode 'payload={"channel": "#javazone-web", "username": "[PROD] Deploy-bot", "text": "https://2017.javazone.no ble deployet :)", "icon_emoji": ":heart:"}' ${slackuri} > /dev/null
else
    curl -X POST --data-urlencode 'payload={"channel": "#javazone-web", "username": "[TEST] Deploy-bot", "text": "https://test-2017.javazone.no ble deployet :)", "icon_emoji": ":yellow_heart:"}' ${slackuri} > /dev/null
fi;

echo "Done slack-notifying"