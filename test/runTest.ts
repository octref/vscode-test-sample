import * as path from 'path'

import { downloadAndUnzipVSCode } from './vscode-test/download'
import { runTests } from './vscode-test/run';

async function go() {
  const vscodeExecutablePath = await downloadAndUnzipVSCode()

  const extPath = path.resolve(__dirname, '../../')
  const testPath = path.resolve(__dirname, './suite')
  const testWorkspace = path.resolve(__dirname, '../../test-fixtures/fixture1')

  const testPath2 = path.resolve(__dirname, './suite2')
  const testWorkspace2 = path.resolve(__dirname, '../../test-fixtures/fixture2')

  await runTests(vscodeExecutablePath, extPath, testPath, testWorkspace)
  await runTests(vscodeExecutablePath, extPath, testPath2, testWorkspace2)
}

go()

