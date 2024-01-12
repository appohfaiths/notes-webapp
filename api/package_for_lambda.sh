#!/bin/bash

# Exit if any command fails
set -eux pipefail

pip install -r requirements.txt --platform manylinux2014_x86_64 --target lib --only-binary=:all:
(cd lib; zip ../lambda_function.zip -r .)
zip lambda_function.zip -u notes.py

# clean
rm -rf lib