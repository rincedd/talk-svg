import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';

export class LiveEdit extends Component {
  constructor(props) {
    super(props);
    this.boundRunCode = this.runCode.bind(this);
    this._editorRef = React.createRef();
  }

  runCode() {
    const code = String(this._editorRef.current.editor.getValue()).trim();

    if (code) {
      try {
        Function('"use strict"; ' + code)();
      } catch (e) {
        console.log('error evaluating code', e);
      }
    }
  }

  render() {
    return (
      <AceEditor
        ref={this._editorRef}
        mode="javascript"
        name="live-editor"
        theme="tomorrow"
        fontSize={18}
        showPrintMargin={false}
        showGutter={false}
        highlightActiveLine
        width="100%"
        height="8rem"
        editorProps={{ $blockScrolling: true }}
        value={this.props.code || ''}
        commands={[
          {
            name: 'runCode',
            bindKey: { win: 'Ctrl-Return', mac: 'Command-Return' },
            exec: this.boundRunCode,
          },
        ]}
        style={{ marginTop: '1rem', backgroundColor: '#faf8f5' }}
      />
    );
  }
}

LiveEdit.propTypes = {
  code: PropTypes.string,
};
