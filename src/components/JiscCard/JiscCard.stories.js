import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { CardContent, CardActions, Button, CardMedia, Typography, CardActionArea, Grid } from '@material-ui/core';
import JiscCard from './index.jsx';

export default {
    component: JiscCard,
    decorators: [withA11y],
    title: 'JiscCard'
};

export const CardStyle1 = () => (
    <JiscCard cardCategory='style1'>
        <CardMedia
            component='img'
            height='140px'
            image='https://images.unsplash.com/photo-1470938330186-da818256fa34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmVlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
        />

        <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
                Lizard
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                continents except Antarctica.
            </Typography>
        </CardContent>

        <CardActions>
            <Button size='small'>Learn More</Button>
        </CardActions>
    </JiscCard>
);

export const CardStyle2 = () => (
    <JiscCard cardCategory='style2'>
        <CardMedia
            component='img'
            height='140px'
            image='https://images.unsplash.com/photo-1470938330186-da818256fa34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmVlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
        />

        <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
                Lizard
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                continents except Antarctica
            </Typography>
        </CardContent>

        <CardActions>
            <Button size='small'>Learn More</Button>
        </CardActions>
    </JiscCard>
);

export const CardStyle3 = () => (
    <JiscCard cardCategory='style3'>
        <CardActionArea>
            <CardMedia
                component='img'
                height='140px'
                image='https://images.unsplash.com/photo-1470938330186-da818256fa34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmVlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
            />

            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                    Lizard
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                </Typography>
            </CardContent>

            <CardActions>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </CardActionArea>
    </JiscCard>
);

export const CardSelect = () => (
    <>
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <JiscCard cardCategory='style1'>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            height='140px'
                            image='https://images.unsplash.com/photo-1470938330186-da818256fa34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmVlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
                        />

                        <CardContent>
                            <Typography gutterBottom variant='h5' component='h2'>
                                Lizard
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </JiscCard>
            </Grid>

            <Grid item xs={4}>
                <JiscCard cardCategory='style1'>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            height='140px'
                            image='https://images.unsplash.com/photo-1470938330186-da818256fa34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmVlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
                        />

                        <CardContent>
                            <Typography gutterBottom variant='h5' component='h2'>
                                Lizard
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </JiscCard>
            </Grid>

            <Grid item xs={4}>
                <JiscCard cardCategory='style1'>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            height='140px'
                            image='https://images.unsplash.com/photo-1470938330186-da818256fa34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmVlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
                        />

                        <CardContent>
                            <Typography gutterBottom variant='h5' component='h2'>
                                Lizard
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </JiscCard>
            </Grid>
        </Grid>
    </>
);
