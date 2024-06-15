declare module 'web-component-framework' {
  export const HelloWorldElement: typeof import('./utils/HelloWorldElement').default;
  export const IconElement: typeof import('./utils/IconElement').default;
  export const registerCustomElements: typeof import('./utils/registerCustomElements').registerCustomElements;
}