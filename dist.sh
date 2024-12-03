#!/bin/bash
base_dir="$(readlink -f "$(dirname "$0")")"
cd "${base_dir}/dist"

# Delete previous module.zip, if any
if [[ -f "module.zip" ]]; then
  rm "module.zip"
fi

zip -r module.zip *
