#!/usr/bin/env bash

text=$(git log -1 --no-merges --pretty=%B)
IFS='#'
read -ra splitIFS <<< "$text"
echo "${splitIFS[1]}"
IFS=''
