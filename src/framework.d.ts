declare module 'web-component-framework' {
  export const HelloWorldElement: typeof import('./lib/utils/HelloWorldElement').default;
  export const IconElement: typeof import('./lib/utils/IconElement').default;
  export const registerCustomElements: typeof import('./lib/utils/registerCustomElements').registerCustomElements;
}