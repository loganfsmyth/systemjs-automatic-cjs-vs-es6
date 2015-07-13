import React from 'react';
import test from 'test';  // should default to template since it doesn't exist

@test
export default class Foo extends React.Component {
  render() {
    var templateType = System.useES6 ? 'es6' : 'cjs';

    return (
      <h1>
        {templateType+' template works'}
      </h1>
    );
  }
}

export function mount (element) {
  React.render(<Foo/>, element);
}
