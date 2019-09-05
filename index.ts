import reduceValues from "@unction/reducevalues";
import flip from "@unction/flip";
import fresh from "@unction/fresh";
import prepend from "@unction/prepend";
import {OrderedEnumerableType} from "./types";

export default function reverse<A> (orderedList: OrderedEnumerableType<A>): OrderedEnumerableType<A> {
  return reduceValues(flip(prepend))(fresh(orderedList))(orderedList);
}
