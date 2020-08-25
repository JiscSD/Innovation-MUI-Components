import { create } from '@storybook/theming/create';

export default create({
    base: 'light',

    // UI
    // appBg: 'white',
    // appContentBg: 'silver',
    // appBorderColor: 'grey',
    // appBorderRadius: 4,

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: 'white',
    barSelectedColor: 'rgba(237, 237, 237, 1)',
    barBg: 'rgba(0, 85, 127, 1)',

    brandTitle: 'Jisc Innovation Components',
    brandUrl: 'https://jisc.ac.uk',
    brandImage: 'https://www.jisc.ac.uk/sites/all/themes/jisc_clean/img/jisc-logo.svg'
});
