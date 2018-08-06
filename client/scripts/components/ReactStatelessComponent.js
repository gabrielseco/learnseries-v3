/* eslint-disable */
const { Component, TypescriptDefaultParser } = require('genmite');

class ReactStatelessComponent extends Component {
  constructor(destinationFolder, componentFolder, config) {
    super(destinationFolder, componentFolder, config);
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

    const specType = {
      fileExtension: '.spec.ts',
      parser: new TypescriptDefaultParser()
    };

    const componentFolder = this.getComponentFolder();
    this.add(tsxType, this.defaultReactComponent(componentFolder));
    this.add(specType, this.defaultSpec(componentFolder));
    this.add(tsType, this.defaultIndex(componentFolder), 'index');
  }

  defaultReactComponent(component) {
    return `
      import React from 'react';
      
      const ${component} = () => (
        <div>
          <h2>${component} Stateful Component generated from genmite</h2>
        </div>
      );
            
      export default ${component};
    `;
  }

  defaultSpec(component) {
    return `
      import React from 'react';
      import { shallow } from 'enzyme';
      
      import ${component} from './${component}';
      
      describe('${component} suite', () => {
        it('should render the ${component} component', () => {
          const component = shallow(<${component} />);
          expect(component).toBeDefined();
        });
      });
    `;
  }

  defaultIndex(component) {
    return `
      export { default as ${component} } from './${component}';
    `;
  }
}

module.exports = ReactStatelessComponent;