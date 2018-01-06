import React from 'react';
import { Link } from 'react-router';
import Parser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';

/**
 * Parses incoming static HTML string into equivalent React Elements, while converting anchors into
 * React-Router Link SharedComponents
 *
 * @param  {string} HtmlString Static string of HTML (ie. from a backend CMS' API to be converted)
 *
 * @return {Node} The parsed HTML as React Nodes, any HTML <a href='x'> returned as <Link to={x}>
 */
const renderHtmlWithRouterLinks = (HTMLstring) =>
  Parser(HTMLstring, {
    replace: (node) => { // eslint-disable-line consistent-return
      if (node.name === 'a' && node.attribs.href && node.children) {
        return <Link to={node.attribs.href}>{domToReact(node.children)}</Link>;
      }
    },
  });

export {
  renderHtmlWithRouterLinks,
};
