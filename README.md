# 4lch4/Replace tokens

This Action is a fork of the Replace-Tokens Action by cschleiden. I created this
fork mostly to experiment with Actions and will likely delete it when I'm done.

TL;DR: I don't recommend anyone aside from myself (the author) to use this.

## Inputs

### `files`

**Required** Glob expression, file name or array of glob/file name

### `tokenPrefix`

**Optional** Prefix to use when matching tokens, defaults to `#{`

### `tokenSuffix`

**Optional** Suffix to use when matching tokens, defaults to `}#`

## Example

If you want to replace `#{CDN}#` and `#{CALLBACK}#` in all of your JS files, add
the action to your workflow like this:

```yml
- uses: cschleiden/replace-tokens@v1
  with:
    files: '["**/*.js"]'
  env:
    CDN: https://somecdn.com/...
    CALLBACK: some_value
```

If you want to use a different token format, specify the prefix and suffix
values like so:

```yml
- uses: cschleiden/replace-tokens@v1
  with:
    tokenPrefix: '{'
    tokenSuffix: '}'
    files: '["**/*.js"]'
  env:
    CDN: https://somecdn.com/...
```

## Acknowledgements

- Inspired by the excellent <https://marketplace.visualstudio.com/items?itemName=qetza.replacetokens> Azure Pipelines task.
- Uses [replace-in-file](https://github.com/adamreisnz/replace-in-file) to do the actual replacement
