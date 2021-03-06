import reduceValues from "@unction/reducevalues";
import flip from "@unction/flip";
import fresh from "@unction/fresh";
import prepend from "@unction/prepend";

export default function reverse<A> (orderedList: OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string {
  return reduceValues(flip(prepend))(fresh(orderedList))(orderedList);
}
