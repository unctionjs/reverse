/* eslint-disable no-magic-numbers */
import {test} from "tap"

import reverse from "./index"

test(({same, end}) => {
  same(
    reverse([1, 2, 3]),
    [3, 2, 1]
  )

  end()
})

test(({same, end}) => {
  same(
    reverse([1]),
    [1]
  )

  end()
})

test(({same, end}) => {
  same(
    reverse("abc"),
    "cba"
  )

  end()
})
