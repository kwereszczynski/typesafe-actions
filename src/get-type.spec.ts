import * as T from './type-helpers';
import { createAction } from './create-action';
import { createStandardAction } from './create-standard-action';
import { createCustomAction } from './create-custom-action';
import { getType } from './get-type';

it.skip('skip', () => undefined);

describe('from createAction', () => {
  // @dts-jest:pass:snap
  getType(createAction('CREATE_ACTION')); // => 'CREATE_ACTION'
});

describe('from createStandardAction', () => {
  // @dts-jest:pass:snap
  getType(createStandardAction('CREATE_STANDARD_ACTION')<void>()); // => 'CREATE_STANDARD_ACTION'
});

describe('from createCustomAction', () => {
  // @dts-jest:pass:snap
  getType(createCustomAction('CREATE_CUSTOM_ACTION')); // => 'CREATE_CUSTOM_ACTION'
});
