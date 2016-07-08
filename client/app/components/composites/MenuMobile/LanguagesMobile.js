import { Component, PropTypes } from 'react';
import r, { div, span } from 'r-dom';
import css from './MenuMobile.css';
import globeIcon from './images/globeIcon.svg';
import Link from '../../elements/Link/Link';

class LanguagesMobile extends Component {

  render() {
    const languages = this.props.languages ?
      this.props.languages.map((lang) => div({ className: `LanguagesMobile_languageLink ${css.languageLink}` }, r(Link, { href: lang.href }, lang.name))) :
      [];

    return languages.length > 0 ?

      div({ }, [
        div({ className: `MenuSection_title ${css.menuSectionTitle}` }, [
          span({
            className: css.menuSectionIcon,
            dangerouslySetInnerHTML: {
              __html: globeIcon,
            } }),
          this.props.name]),
        div({ className: `LanguagesMobile_languageList ${css.languageList}` }, languages),
      ]) :
      null;
  }
}

const { arrayOf, string } = PropTypes;

LanguagesMobile.propTypes = {
  name: string.isRequired,
  languages: arrayOf(
    PropTypes.shape({
      name: string.isRequired,
      href: string.isRequired,
    })
  ),
};

export default LanguagesMobile;
