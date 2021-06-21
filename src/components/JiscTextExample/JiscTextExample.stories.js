import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { CardActionArea, Grid} from '@material-ui/core';
import JiscTextExample from './index.jsx';

export default {
    component: JiscTextExample,
    decorators: [withA11y],
    title: 'JiscTextExample'
};

export const EssayFeedback = () => (
    <JiscTextExample
        exampleText='“Something that is outstanding is the fact that it has no real action…”'
        cardCategory='essay'
        exampleTextType='Essay Feedback'
        showEssay
        showAction
    ></JiscTextExample>
);

export const Tweet = () => (
    <JiscTextExample
        exampleText='"Amazing piece of work from @Jisc working with publishers…"'
        cardCategory='twitter'
        exampleTextType='Example Tweet'
        showTwitter
        showAction
    ></JiscTextExample>
);

export const FilmReview = () => (
    <JiscTextExample
        exampleText='"You have a clever argument. Importantly, you build…"'
        cardCategory='film'
        exampleTextType='Film Review'
        showFilm
        showAction
    ></JiscTextExample>
);

export const Custom = () => (
    <JiscTextExample
        exampleText='"You have a clever argument. Importantly, you build…"'
        exampleTextType='Example Text'
        backgroundImage='https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80'
        showAction
    ></JiscTextExample>
    
);

export const Selected = () => (
    <>
    <Grid container spacing={3}>
            <Grid item xs={4}>
                <JiscTextExample
                    exampleText='“Something that is outstanding is the fact that it has no real action…”'
                    cardCategory='essay'
                    exampleTextType='Essay Feedback'
                    showEssay
                    showAction
                >
                    <CardActionArea></CardActionArea>
                </JiscTextExample>
            </Grid>

            <Grid item xs={4}>
                <JiscTextExample
                    exampleText='"Amazing piece of work from @Jisc working with publishers…"'
                    cardCategory='twitter'
                    exampleTextType='Example Tweet'
                    showTwitter
                    showAction
                >
                    <CardActionArea></CardActionArea>
                </JiscTextExample>
            </Grid>

            <Grid item xs={4}>
                <JiscTextExample
                    exampleText='"You have a clever argument. Importantly, you build…"'
                    cardCategory='film'
                    exampleTextType='Film Review'
                    showFilm
                    showAction
                >
                    <CardActionArea></CardActionArea>
                </JiscTextExample>
            </Grid>

        </Grid>
    </>
    
);


