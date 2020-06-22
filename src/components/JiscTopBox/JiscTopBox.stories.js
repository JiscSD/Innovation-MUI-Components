import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscTopBox from './index.jsx';

export default {
    title: 'JiscTopBox',
    decorators: [withA11y],
    component: JiscTopBox
};

export const TopBox1 = () => <JiscTopBox title='Connectivity' content='Connecting you through the unrivalled, world-class Janet Network so that you can collaborate on your own education and research networks - anywhere, anytime.' leftImage='https://www.jisc.ac.uk/sites/default/files/node-transparent-8d1558.png' rightImage='https://www.jisc.ac.uk/sites/default/files/connectivity-hero.jpg' />;

export const TopBox2 = () => <JiscTopBox title='Cyber security' content='To help you get the most from your Jisc membership, we work to protect the Janet Network and connected organisations' leftImage='https://www.jisc.ac.uk/sites/default/files/geo3-bg-007dbb.png' rightImage='https://www.jisc.ac.uk/sites/default/files/cyber-security-landing-hero.jpg' />;

export const TopBox3 = () => <JiscTopBox title='Cyber security' content='To help you get the most from your Jisc membership, we work to protect the Janet Network and connected organisations' leftBackgroundColor='#333333' rightImage='https://www.jisc.ac.uk/sites/default/files/cyber-security-landing-hero.jpg' />;

export const TopBox4 = () => <JiscTopBox title='Cyber security' content='To help you get the most from your Jisc membership, we work to protect the Janet Network and connected organisations' leftBackgroundColor='green' rightBackgroundColor='red' />;

export const TopBox5 = () => <JiscTopBox title='Connectivity' content='To help you get the most from your Jisc membership, we work to protect the Janet Network and connected organisations' leftImage='https://www.jisc.ac.uk/sites/default/files/node-transparent-8d1558.png' rightBackgroundColor='#8c1a58' />;

TopBox1.story = {
    name: 'JiscTopBox1'
};

TopBox2.story = {
    name: 'JiscTopBox2'
};

TopBox3.story = {
    name: 'JiscTopBox3'
};

TopBox4.story = {
    name: 'JiscTopBox4'
};

TopBox5.story = {
    name: 'JiscTopBox5'
};
