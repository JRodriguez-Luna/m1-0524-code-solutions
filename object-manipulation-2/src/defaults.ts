/* exported defaults */
function defaults(target: any, source: any): undefined {
  for (const key in source) {
    if (target[key] === undefined) target[key] = source[key];
  }
}
