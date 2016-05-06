import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config';

class About extends React.Component {
  render () {
    return (
      <DocumentTitle title={`About | ${config.blogTitle}`}>
        <div className="article">
          <div className="article-title">
            <h1>About</h1>
          </div>
          <div className="article-body">
            <p>London based Software Developer, soon to be leaving <a href="http://www.pebblecode.com">pebble {`{code}`}</a>.</p>

            <p>If you're interested, check out <a href="https://drive.google.com/open?id=1fUf-E7L2NRIgTuroBF25Nm-w-bC3FelsrcdANAYPJZ0" target="_blank" rel="noopener noreferrer">my CV</a></p>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default About;
