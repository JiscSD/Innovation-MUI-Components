import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { ListSubheader, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import JiscList from './index.jsx';

export default {
    component: JiscList,
    decorators: [withA11y],
    title: 'JiscList'
};

export const ListStyle1 = () => (
    <JiscList style='style1'>
        <ListSubheader>List Items</ListSubheader>

        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Gabriel Medina' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Gabriel Medina`} secondary={`11/07/1986`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='JJ Florence' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`JJ Florence`} secondary={`11/12/1988`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Mick Fanning' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Mick Fanning`} secondary={`08/02/1976`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Juila Stevens' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Juila Stevens`} secondary={`23/07/1992`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Owen Wilkinson' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Owen Wilkinson`} secondary={`10/02/1984`} />
        </ListItem>
    </JiscList>
);

export const ListStyle2 = () => (
    <JiscList style='style2'>
        <ListSubheader>List Items</ListSubheader>

        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Gabriel Medina' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Gabriel Medina`} secondary={`11/07/1986`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='JJ Florence' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`JJ Florence`} secondary={`11/12/1988`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Mick Fanning' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Mick Fanning`} secondary={`08/02/1976`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Juila Stevens' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Juila Stevens`} secondary={`23/07/1992`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Owen Wilkinson' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Owen Wilkinson`} secondary={`10/02/1984`} />
        </ListItem>
    </JiscList>
);

export const ListStyle3 = () => (
    <JiscList style='style3'>
        <ListSubheader>List Items</ListSubheader>

        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Gabriel Medina' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Gabriel Medina`} secondary={`11/07/1986`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='JJ Florence' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`JJ Florence`} secondary={`11/12/1988`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Mick Fanning' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Mick Fanning`} secondary={`08/02/1976`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Juila Stevens' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Juila Stevens`} secondary={`23/07/1992`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Owen Wilkinson' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Owen Wilkinson`} secondary={`10/02/1984`} />
        </ListItem>
    </JiscList>
);

export const ListStyle4 = () => (
    <JiscList style='style3' headerColor='green' titleColor='purple'>
        <ListSubheader>List Items</ListSubheader>

        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Gabriel Medina' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Gabriel Medina`} secondary={`11/07/1986`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='JJ Florence' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`JJ Florence`} secondary={`11/12/1988`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Mick Fanning' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Mick Fanning`} secondary={`08/02/1976`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Juila Stevens' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Juila Stevens`} secondary={`23/07/1992`} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='Owen Wilkinson' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={`Owen Wilkinson`} secondary={`10/02/1984`} />
        </ListItem>
    </JiscList>
);
