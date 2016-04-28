'use strict';

var env = jasmine.getEnv();
beforeEach(() => {
  jasmine.addMatchers({ 
    toMatchSnapshot: (/* util, customEqualityTesters */) => {
      return {
        compare: (actual, expected) => {
          if (expected !== undefined) {
             throw Error('toMatchSnapshot() doesn\' t take parameters (yet)');
          }
          const pass = true; // TODO: implement this :)
          const message = (
            pass ?
            'Shouldn\'t match previous snapshot but does' :
            'Doesn\'t match previous snapshot'
          );
          return {
             pass,
             message,
          };
        }
      };
    }
  });
});
