#!/bin/bash

IDS=$(docker ps | grep pumgrana-dashboard | awk '{print $1}')
if [ ! -z "$IDS" ]; then docker stop $IDS; fi
