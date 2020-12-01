// ts version @4.1.2

// type EqualValue<X, Y> = X extends Y ? (Y extends X ? true : false) : false;
// type Result = EqualValue<any, number> // boolean ===> any -> union -> boolean

type EqualValue<V1, V2> = (<T>() => T extends V1 ? 1 : 2) extends <
  T
>() => T extends V2 ? 1 : 2
  ? true
  : false;
