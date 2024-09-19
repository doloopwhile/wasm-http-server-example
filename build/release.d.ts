/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * handler/run
 * @param request `~lib/array/Array<handler/RequestEnv>`
 * @returns `handler/Response`
 */
export declare function run(request: Array<__Record4<undefined>>): __Record6<never>;
/** handler/RequestEnv */
declare interface __Record4<TOmittable> {
  /** @type `~lib/string/String` */
  key: string;
  /** @type `~lib/string/String` */
  value: string;
}
/** handler/Header */
declare interface __Record7<TOmittable> {
  /** @type `~lib/string/String` */
  key: string;
  /** @type `~lib/string/String` */
  value: string;
}
/** handler/Response */
declare interface __Record6<TOmittable> {
  /** @type `f64` */
  status: number | TOmittable;
  /** @type `~lib/array/Array<handler/Header>` */
  headers: Array<__Record7<never>>;
  /** @type `~lib/string/String` */
  body: string;
}
