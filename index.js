import reduceValues from "@unction/reducevalues";
import flip from "@unction/flip";
import fresh from "@unction/fresh";
import prepend from "@unction/prepend";
export default function reverse(orderedList) {
  return reduceValues(flip(prepend))(fresh(orderedList))(orderedList);
}
