import { replaceInFile } from 'replace-in-file'

export async function replaceTokens(
  tokenPrefix: string,
  tokenSuffix: string,
  files: string[]
) {
  let replaceCount = 0
  const fromRegEx = new RegExp(
    `${escapeDelimiter(tokenPrefix)}(.+?)${escapeDelimiter(tokenSuffix)}`,
    'gm'
  )
  const matchRegEx = new RegExp(
    `${escapeDelimiter(tokenPrefix)}(.+?)${escapeDelimiter(tokenSuffix)}`
  )

  console.log(`fromRegEx = ${fromRegEx}`)
  console.log(`matchRegEx = ${matchRegEx}`)

  const result = await replaceInFile({
    files,
    allowEmptyPaths: true,
    from: fromRegEx,
    to: (match: any) => {
      const m = match.match(matchRegEx)
      if (m) {
        replaceCount++
        const tokenName = m[1]
        return process.env[tokenName] || ''
      }

      return ''
    }
  })

  return {
    result: result.filter(r => r.hasChanged).map(r => r.file),
    replaceCount
  }
}

function escapeDelimiter(delimiter: string): string {
  return delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}
