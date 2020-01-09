#! /usr/bin/env bash

rm public/data/*.csv
ls public/data/*.json | 
xargs -I dir basename dir | 
cut -f 1 -d '.' | 
xargs -I name json2csv -i public/data/name.json -o public/data/name.csv
