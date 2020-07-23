#!/bin/bash
cd ..

# check if running in circleCi
if [ -z "${CIRCLE_BRANCH}" ]; then
    IN_CI=FALSE
  else
    IN_CI=TRUE
  fi

# set CIRCLE_BRANCH if we are not running in circleci
if [ "${IN_CI}" == "FALSE" ]; then
  CIRCLE_BRANCH=`git rev-parse --abrev-ref HEAD`
fi

# build branch
if [ "${CIRCLE_BRANCH}" == "master" ]; then
  npm run build
  COPY_PATH=""
fi

if [ "${IN_CI}" == "FALSE" ]; then
  # using .ppk file
  echo "Deploying to website"
  scp -i ~/.ssh/web-key -rp ./dist/my-portfolio/* idorado45@108.167.141.13:www/
fi
