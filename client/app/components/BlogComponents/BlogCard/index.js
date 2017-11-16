// Element for displaying blog previews
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import {
  getDate,
  htmlToString,
  truncate,
} from 'utils/blogUtils';

import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import LinkButton from 'components/LinkedComponents/LinkButton';

import theme from './theme.scss';

const BlogCard = ({ post }) => {
  const brief = htmlToString(post.content.brief.html || post.content.brief);
  const summary = truncate(htmlToString(post.content.extended.html || post.content.markdown.html), 250);
  const date = getDate(post.publishedDate);
  return (
    <Card style={{ width: 'auto' }} className="content">
      <Link to={`/blog/post/${post.slug}`}>
        <CardTitle
          theme={theme}
          title={post.title}
          subtitle={date}
        />
      </Link>
      <CardText theme={theme}>
        <hr />
        <p className="subtitle" dangerouslySetInnerHTML={{ __html: brief }} />
        <p dangerouslySetInnerHTML={{ __html: summary }} />
      </CardText>
      <CardActions>
        <LinkButton label="Read More..." to={`/blog/post/${post.slug}`} />
      </CardActions>
    </Card>
  );
};

BlogCard.propTypes = {
  post: PropTypes.object,
};

export default BlogCard;
