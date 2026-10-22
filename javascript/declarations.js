const escapeStr = "` \\ / \" '";
const arr = [4, '2'];
const obj = {
  str: 'Hello',
  num: 42,
  bool: true,
  undef: undefined,
};

const nested = {
  arr: [4, undefined, '2'],
  obj: {
    str: 'World',
    num: 21,
    bool: false,
  },
};

Object.freeze(nested.arr);
Object.freeze(nested.obj);
Object.freeze(nested);
Object.freeze(arr);
Object.freeze(obj);