
import r from 'r-dom';
import { storiesOf } from '@kadira/storybook';
import { storify, defaultRailsContext } from '../../Styleguide/withProps';

import LanguagesMobile from './LanguagesMobile';

const containerStyle = { style: { minWidth: '100px', background: 'white' } };

storiesOf('LanguagesMobile')
  .add('Basic state ', () => (
      r(storify(
        r(LanguagesMobile,
          {
            marketplaceContext: defaultRailsContext,
            name: 'Languages',
            languages: [
              {
                href: '#',
                name: 'English',
                active: true,
                activeColor: '#a64c5d',
              },
              {
                href: '#',
                name: 'German',
                active: false,
                activeColor: '#a64c5d',
              },
              {
                href: '#',
                name: 'Spanish',
                active: false,
                activeColor: '#a64c5d',
              },
              {
                href: '#',
                name: 'Finnish',
                active: false,
                activeColor: '#a64c5d',
              },
            ],
          }
        ),
        containerStyle
      ))
  ));
