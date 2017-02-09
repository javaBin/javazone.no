#!/bin/bash

set -e

echo "Build broken, notifying on slack"

if [[ $TRAVIS_BRANCH == "master" ]]; then
    curl -X POST --data-urlencode 'payload={"channel": "#javazone-web", "username": "[PROD] Deploy-bot", "text": "Bygget brakk! Se hvorfor på https://travis-ci.org/javaBin/javazone.no", "icon_emoji": "face_with_head_bandage"}' ${slackuri} > /dev/null
else
    curl -X POST --data-urlencode 'payload={"channel": "#javazone-web", "username": "[TEST] Deploy-bot", "text": "Bygget brakk! Se hvorfor på https://travis-ci.org/javaBin/javazone.no", "icon_emoji": "face_with_head_bandage"}' ${slackuri} > /dev/null
fi;

echo "Slack notified"
