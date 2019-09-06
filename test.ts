/* eslint-disable no-magic-numbers */
import reverse from "./index";

test("works", () => {
  expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
});

test("works", () => {
  expect(reverse([1])).toEqual([1]);
});

test("works", () => {
  expect(reverse("abc")).toEqual("cba");
});
