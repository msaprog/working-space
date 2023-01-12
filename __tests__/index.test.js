import { genDiff } from '../src/index.js';

test('genDiff Stylish', () => {
  expect(genDiff('__fixtures__/file6_1.json', '__fixtures__/file6_2.json')).toBe(`{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`);
});

test('genDiff Plain', () => {
  expect(genDiff('__fixtures__/file6_1.json', '__fixtures__/file6_2.json', 'plain')).toBe(`Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`);
});

test('genDiff JSON', () => {
  expect(genDiff('__fixtures__/file6_1.json', '__fixtures__/file6_2.json', 'json')).toBe('[{"key":"common","state":"nested","value":[{"key":"follow","state":"added","value":false},{"key":"setting1","state":"notChanged","value":"Value 1"},{"key":"setting2","state":"deleted","value":200},{"key":"setting3","state":"changed","value1":true,"value2":null},{"key":"setting4","state":"added","value":"blah blah"},{"key":"setting5","state":"added","value":{"key5":"value5"}},{"key":"setting6","state":"nested","value":[{"key":"doge","state":"nested","value":[{"key":"wow","state":"changed","value1":"","value2":"so much"}]},{"key":"key","state":"notChanged","value":"value"},{"key":"ops","state":"added","value":"vops"}]}]},{"key":"group1","state":"nested","value":[{"key":"baz","state":"changed","value1":"bas","value2":"bars"},{"key":"foo","state":"notChanged","value":"bar"},{"key":"nest","state":"changed","value1":{"key":"value"},"value2":"str"}]},{"key":"group2","state":"deleted","value":{"abc":12345,"deep":{"id":45}}},{"key":"group3","state":"added","value":{"deep":{"id":{"number":45}},"fee":100500}}]');
});
