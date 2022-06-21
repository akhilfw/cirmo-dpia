#!/bin/bash

# script to process either the HWP frontend or api deployment config templates and deploy it to a given namespace

oc process -f /home/runner/work/cirmo-dpia/cirmo-dpia/openshift/templates/api/$DEPLOYMENT_CONFIG --namespace=$NAMESPACE \
    -p APPLICATION_NAME=$APPLICATION_NAME \
    -p LICENSE_PLATE=$LICENSE_PLATE \
    -p ENVIRONMENT=$ENVIRONMENT | \
    oc apply -f -
