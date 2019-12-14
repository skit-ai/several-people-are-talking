#!/usr/bin/env bash

git checkout gh-pages
aws s3 cp ./ s3://backyard/several-people-are-talking/ --exclude ".git/*" --exclude "node_modules/*" --exclude ".cache/*" --exclude "*.js.map" --recursive
git checkout master
