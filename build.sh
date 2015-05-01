#!/bin/sh

tempDir=".build"

rm -rf ${tempDir}
mkdir -p ${tempDir}
cd ${tempDir}
git clone https://github.com/Famous/famous-angular
cd famous-angular
rm ../../lib/*
cp ./dist/* ../../lib/
cd -
cd -
