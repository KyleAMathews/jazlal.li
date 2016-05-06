import React from 'react';
import moment from 'moment';
import { RouteHandler, Link } from 'react-router';
import sortBy from 'lodash/collection/sortBy';
import include from 'underscore.string/include'
import DocumentTitle from 'react-document-title';
import access from 'safe-access';
import { prefixLink } from 'gatsby-helpers';
import { rhythm, fontSizeToMS } from 'utils/typography'
import { config } from 'config';

class Index extends React.Component {

  render() {
    let draftsPage; // drafts page to go at top of list
    const pages = this.props.route.pages;

    const sortedPages = pages
      .filter(page => {
        if (page.path !== '/blog/drafts/') {
          return true;
        } else {
          draftsPage = page;
          return false;
        }
      })
      .sort(page => access(page, 'data.date'))
      .reverse();

    // insert drafts at top
    sortedPages.unshift(draftsPage);

    const pageLinks = sortedPages
      .filter(page => (page.file.ext === 'md' && !page.path.includes('/404')))
      .map(page => {
        const title = access(page, 'data.title') || page.path;
        const date = page.data.date
          ? (<span className="posts-item__date">{moment(page.data.date).format('dddd Do MMMM YYYY')}</span>)
          : false;

        return (
          <li key={page.path} className="posts-item">
            <Link
              to={prefixLink(page.path)}
              className="posts-item__title text-link__decorate">
              {title}
            </Link>
            { date }
          </li>
        );
      });

    return (
      <DocumentTitle title={`${config.blogTitle}`}>
        <ul className="posts">
          {pageLinks}
        </ul>
      </DocumentTitle>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
};

export default Index;
