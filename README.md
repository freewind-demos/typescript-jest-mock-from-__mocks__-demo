TypeScript Jest Mock from "__mocks__" Demo
===========================

如果是项目中自己定义的module，需要把它的mock放在与定义相邻的`__mocks__`中，并且需要显式调用 `jest.mock()`

如果是第三方npm module，可以把它的mock放在某一个上级`__mocks__`中（推荐放在`node_modules`平级），使用时不需要显式调用 `jest.mock`

```
npm install
npm test
```
