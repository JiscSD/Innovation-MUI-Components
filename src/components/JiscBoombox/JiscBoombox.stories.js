import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Typography } from '@material-ui/core';
import JiscBoombox from './index';
import JiscButton from '../JiscButton';
import jiscTheme from '../../theme';

export default {
    title: 'JiscBoombox',
    decorators: [withA11y],
    component: JiscBoombox
};

export const Boombox1 = () => (
    <JiscBoombox backgroundImage='https://www.jisc.ac.uk/sites/default/files/abstract-blue-background-dark.jpg'>
        <Typography variant='h2'>Jisc Boombox Example 1</Typography>
        <br />
        <Typography>
            Join our three-day online event and explore how to elevate the student experience during this challenging
            time
        </Typography>
        <br />
        <JiscButton>Click me</JiscButton>
    </JiscBoombox>
);

export const Boombox2 = () => (
    <JiscBoombox backgroundImage='https://www.jisc.ac.uk/sites/default/files/abstract-blue-background-dark.jpg'>
        <Typography variant='h2'>Jisc Boombox Example 2</Typography>
        <br />
        <Typography>
            Join our three-day online event and explore how to elevate the student experience during this challenging
            time
        </Typography>
        <br />
        <JiscButton>Click Here</JiscButton>
    </JiscBoombox>
);

export const Boombox3 = () => (
    <JiscBoombox backgroundColor='orange'>
        <Typography variant='h2'>Jisc Boombox Example 3</Typography>
        <br />
        <Typography>
            Join our three-day online event and explore how to elevate the student experience during this challenging
            time
        </Typography>
        <br />
        <JiscButton>Click Here</JiscButton>
    </JiscBoombox>
);

export const Boombox4 = () => (
    <JiscBoombox backgroundColor='orange' padding='xs'>
        <Typography variant='h2'>Jisc Boombox Example 4</Typography>
        <br />
        <Typography>
            Join our three-day online event and explore how to elevate the student experience during this challenging
            time
        </Typography>
        <br />
        <JiscButton>Click Here</JiscButton>
    </JiscBoombox>
);

export const Boombox5 = () => (
    <JiscBoombox backgroundColor='orange' padding='sm'>
        <Typography variant='h2'>Jisc Boombox Example 5</Typography>
        <br />
        <Typography>
            Join our three-day online event and explore how to elevate the student experience during this challenging
            time
        </Typography>
        <br />
        <JiscButton>Click Here</JiscButton>
    </JiscBoombox>
);

export const Boombox6 = () => (
    <JiscBoombox backgroundColor='orange' padding='md'>
        <Typography variant='h2'>Jisc Boombox Example 6</Typography>
        <br />
        <Typography>
            Join our three-day online event and explore how to elevate the student experience during this challenging
            time
        </Typography>
        <br />
        <JiscButton>Click Here</JiscButton>
    </JiscBoombox>
);

export const Boombox7 = () => (
    <JiscBoombox backgroundColor='orange' padding='lg'>
        <Typography variant='h2'>Jisc Boombox Example 7</Typography>
        <br />
        <Typography>
            Join our three-day online event and explore how to elevate the student experience during this challenging
            time
        </Typography>
        <br />
        <JiscButton>Click Here</JiscButton>
    </JiscBoombox>
);

export const Boombox8 = () => (
    <JiscBoombox backgroundImage='https://www.jisc.ac.uk/sites/default/files/blox2-bg-46296b.png'>
        <Typography variant='h2'>The Home of AI Tools</Typography>
        <br />
        <Typography>A Collection of AI Tools to Discover and Explore</Typography>
        <br />
        <JiscButton>View our tools</JiscButton>
    </JiscBoombox>
);

export const Boombox9 = () => (
    <JiscBoombox
        backgroundCover={true}
        backgroundImage='https://play.ai.alpha.jisc.ac.uk/static/media/home-billboard-1.7cb41ac7.jpg'
    >
        <Typography variant='h2'>The Home of AI Tools</Typography>
        <br />
        <Typography>A Collection of AI Tools to Discover and Explore</Typography>
        <br />
        <JiscButton>View our tools</JiscButton>
    </JiscBoombox>
);
