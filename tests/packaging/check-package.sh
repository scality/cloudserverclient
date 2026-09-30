#!/bin/bash
# Installs the npm tarball into a scratch consumer and checks it loads, sends
# requests and type-checks there.
#
# Usage: check-package.sh [package.tgz]   (packs the current build if omitted)
set -euo pipefail

HERE=$(cd "$(dirname "$0")" && pwd)
WORK_DIR=$(mktemp -d)
trap 'rm -rf "$WORK_DIR"' EXIT

if [ $# -ge 1 ]; then
    TARBALL=$(cd "$(dirname "$1")" && pwd)/$(basename "$1")
else
    (cd "$HERE/../.." && npm pack --ignore-scripts --silent --pack-destination "$WORK_DIR" >/dev/null)
    TARBALL=$(ls "$WORK_DIR"/*.tgz)
fi

if tar -tzf "$TARBALL" | grep -q '/node_modules/'; then
    echo "ERROR: $(basename "$TARBALL") contains node_modules" >&2
    exit 1
fi

cd "$WORK_DIR"
cp "$HERE/consumer.package.json" package.json
cp "$HERE/smoke.js" "$HERE/types.ts" "$HERE/tsconfig.json" .
npm install --omit=dev --ignore-scripts --no-audit --no-fund --silent "$TARBALL"
node smoke.js

npm install --no-save --ignore-scripts --no-audit --no-fund --silent typescript @types/node@20
npx --no-install tsc -p tsconfig.json
echo "types OK"
