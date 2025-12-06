#!/usr/bin/env bash
set -euo pipefail

# Quick secret scanner for common leak patterns. Intended as a pre-commit guard (not a full secret scanner).
# It looks for values (not just keys) that indicate secrets: postgres connection strings, private keys, AWS-like keys.

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
FOUND=0

echo "Running lightweight pre-commit secret scan on staged files..."

# Get staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | tr '\n' ' ')

if [ -z "$STAGED_FILES" ]; then
  echo "No staged files to check."
  exit 0
fi

# Patterns to search for (value-level patterns)
PATTERNS=(
  "postgresql://"
  "postgres://"
  "-----BEGIN PRIVATE KEY-----"
  "AKIA[0-9A-Z]{16}"
  "aws_secret_access_key"
  "ssh-rsa AAAA"
)

for file in $STAGED_FILES; do
  # skip binary and node_modules
  if [[ "$file" == node_modules/* ]] || [[ "$file" == .git/* ]]; then
    continue
  fi
  if [ ! -f "$file" ]; then
    continue
  fi
  # skip the checker itself and husky hooks
  if [[ "$file" == scripts/precommit-checks.sh ]] || [[ "$file" == .husky/* ]]; then
    continue
  fi
  for p in "${PATTERNS[@]}"; do
    if grep -InE "$p" "$file" >/dev/null 2>&1; then
      echo "ERROR: Found potential secret in staged file $file matching pattern: $p"
      FOUND=1
    fi
  done
done

if [ $FOUND -ne 0 ]; then
  echo "Commit blocked: remove secrets from staged files."
  exit 2
fi

echo "No obvious secrets found in staged files. Proceeding with commit."
exit 0
