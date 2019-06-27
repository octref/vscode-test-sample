import * as path from 'path'

import { runTests, downloadAndUnzipVSCode } from 'vscode-test'

async function go() {
  try {
    const extensionPath = path.resolve(__dirname, '../../')
    const testRunnerPath = path.resolve(__dirname, './suite')
    const testWorkspace = path.resolve(__dirname, '../../test-fixtures/fixture1')

    /**
     * Basic usage
     */
    await runTests({
      extensionPath,
      testRunnerPath,
      testWorkspace
    })
  } catch (err) {
    console.error('Failed to run tests')
    process.exit(1)
  }
}

go()
