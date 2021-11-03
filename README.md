# Npm tests

- [x] Understand git tag and npm version
- [x] Understand npm publish
- [ ] Generate a changelog
- [ ] Make it working in a monorepo
- [ ] Compile all in few commands (ci > tag > publish by eg.)   


## Release process

After committing, create a git tag using lerna.

```bash
# Update the version in package.json first, then create the tag
lerna version \
    --no-private \  # Only on usehooks-ts, others packages are now private
    --yes # skips `Are you sure you want to publish these packages?`
```

> Lerna will never publish packages which are marked as private ("private": true in the package.json).

