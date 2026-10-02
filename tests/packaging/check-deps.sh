#!/usr/bin/env bash
# The generated clients are shipped inside this package, so their runtime
# dependencies must be declared in the root package.json too.
set -euo pipefail

cd "$(dirname "$0")/../.."

generated=(build/smithy/*/typescript-codegen/package.json)

missing=$(comm -23 \
    <(jq -r '.dependencies // {} | keys[]' "${generated[@]}" | sort -u) \
    <(jq -r '.dependencies // {} | keys[]' package.json | sort -u))

if [ -n "$missing" ]; then
    echo "ERROR: dependencies of the generated clients missing from package.json, add them with:" >&2
    echo "  yarn add $(for name in $missing; do
        jq -r --arg n "$name" '.dependencies[$n] // empty | "\($n)@\(.)"' "${generated[@]}" | head -1
    done | tr '\n' ' ')" >&2
    exit 1
fi
