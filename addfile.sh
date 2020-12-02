#!/bin/bash

# filename
name=$1

# batch create file
touch src/${name}.js test/${name}.test.js doc/${name}.md benchmark/${name}.benchmark.js
