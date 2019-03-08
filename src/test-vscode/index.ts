import * as path from 'path'

import { downloadAndUnzipVSCode } from './download'
import { runTests } from './run';

async function go() {
  const vscodeExecutablePath = await downloadAndUnzipVSCode()

  const extPath = path.resolve(__dirname, '../../')
  const testPath = path.resolve(__dirname, '../test')
  const testWorkspace = path.resolve(__dirname, '../fixture')

  runTests(vscodeExecutablePath, extPath, testPath, testWorkspace)
}

go()
