/* eslint-disable */
const { Component, TypescriptDefaultParser } = require('genmite');

class ReactStatefulComponent extends Component {
  constructor(destinationFolder, componentFolder) {
    super(destinationFolder, componentFolder);
  }

  init() {
    const tsType = {
      fileExtension: '.ts',
      parser: new TypescriptDefaultParser()
    };

    const tsxType = {
      fileExtension: '.tsx',
      parser: new TypescriptDefaultParser()
    }

    const specTsType = {
      fileExtension: '.spec.ts',
      parser: new TypescriptDefaultParser()
    };

    const componentFolder = this.getComponentFolder();

    this.add(tsType, this.defaultReactIndex(componentFolder), 'index');
    this.add(tsxType, this.defaultReactJS(componentFolder));
    this.add(specTsType, this.defaultReactSpec(componentFolder));
  }

  defaultReactJS(component) {
    return `
      import React, { Component } from 'react'

      class ${component} extends Component {
        constructor(props) {
          super(props);
          this.state = {};
        }

        render() {
          return (
            <div>
              <h2>${component} Stateful Component generated from genmite</h2>
            </div>
          );
        }
      }

      export default ${component};
    `;
  }

  defaultReactIndex(component) {
    return `
      export { default as ${component} } from './${component}';
    `;
  }

  defaultReactSpec(component) {
    return `
      import React from 'react';
      import { shallow } from 'enzyme';
      import ${component} from './${component}';

      describe('${component} suite', () => {
        it('renders ${component} without any state injected', () => {
          const component = shallow(<${component} />);
          expect(component).toBeDefined();
        });
      });
    `;
  }
}

module.exports = ReactStatefulComponent;