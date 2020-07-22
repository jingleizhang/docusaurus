/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';

const useLogo = () => {
  const {
    siteConfig: {baseUrl, themeConfig: {navbar: {logo = {}} = {}}} = {},
  } = useDocusaurusContext();
  const logoLink = logo.href || baseUrl;
  let logoLinkProps = {};

  if (logo.target) {
    logoLinkProps = {target: logo.target};
  } else if (!isInternalUrl(logoLink)) {
    logoLinkProps = {
      rel: 'noopener noreferrer',
      target: '_blank',
    };
  }

  const logoImageUrl = useBaseUrl(logo.src);

  return {
    logoLink,
    logoLinkProps,
    logoImageUrl,
    logoAlt: logo.alt,
  };
};

export default useLogo;
