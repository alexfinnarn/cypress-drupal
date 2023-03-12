#!/usr/bin/env bash

text=$(git log -1 --no-merges --pretty=%B)
echo "$text"
IFS='#'
read -ra splitIFS <<< "$text"
for word in "${splitIFS[@]}"; do
echo $word
done
echo "Setting IFS back to whitespace"
IFS=''
