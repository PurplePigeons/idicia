import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const BlogPreviewCard = ({
  title,
  snippet,
  slug,
  img: {
    // Fallback images and alt text plus super fallback in case no img at all
    src = 'https://bulma.io/images/placeholders/640x360.png',
    alt = 'placeholder',
  } = {},
}) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-16by9">
        <Link to={`/blog/post/${slug}`}>
          <img src={src} alt={alt} />
        </Link>
      </figure>
    </div>
    <div className="card-content">
      <div className="content">
        <p className="title is-4">
          { title }
        </p>
        <p>
          { snippet }
        </p>
        <p>
          <Link to={`/blog/post/${slug}`}>
            Read More
          </Link>
        </p>
      </div>
    </div>
  </div>
);

BlogPreviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  snippet: PropTypes.string,
  slug: PropTypes.string.isRequired,
  img: PropTypes.object,
};

export default BlogPreviewCard;
