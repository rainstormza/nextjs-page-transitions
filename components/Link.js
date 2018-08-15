// @flow
import * as React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

type Props = {
  href: string,
  children: React.Node,
};
export default class Link extends React.Component<Props> {
  render() {
    return (
      <NextLink href={this.props.href} prefetch>
        <Anchor>{this.props.children}</Anchor>
      </NextLink>
    );
  }
}

const Anchor = styled.a`
  &,
  &:visited,
  &:active {
    color: orangered;
    text-decoration: none;
    cursor: pointer;
  }
`;
