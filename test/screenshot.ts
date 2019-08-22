import * as assert from 'assert'

import { Selector } from 'testcafe'

fixture('google').page('https://www.google.com')

test('take screenshot', async t => {
  await t.takeScreenshot(`${new Date().getTime()}/google.jpg`)
})
