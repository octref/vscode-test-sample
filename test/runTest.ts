import * as path from 'path'

import { runTests, downloadAndUnzipVSCode } from 'vscode-test'

async function go() {

  const extensionPath = path.resolve(__dirname, '../../')
  const testRunnerPath = path.resolve(__dirname, './suite')
  const testWorkspace = path.resolve(__dirname, '../../test-fixtures/fixture1')

  const testRunnerPath2 = path.resolve(__dirname, './suite2')
  const testWorkspace2 = path.resolve(__dirname, '../../test-fixtures/fixture2')

  /**
   * Basic usage
   */
  await runTests({
    extensionPath,
    testRunnerPath,
    testWorkspace
  })

  /**
   * Running a second test suite
   */
  await runTests({
    extensionPath,
    testRunnerPath: testRunnerPath2,
    testWorkspace: testWorkspace2
  })

  /**
   * Use 1.31.0 release for testing
   */
  await runTests({
    version: '1.31.0',
    extensionPath,
    testRunnerPath,
    testWorkspace
  })

  /**
   * Manually download VS Code and use 1.31.0 release for testing.
   * Note that if `.vscode-test/vscode-1.31.0` folder exists it won't be re-downloaded
   */
  const vscodeExecutablePath = await downloadAndUnzipVSCode('1.31.0')
  await runTests({
    vscodeExecutablePath,
    extensionPath,
    testRunnerPath,
    testWorkspace
  })
}

go()

