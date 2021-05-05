import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import JiscTable from './index.jsx';

export default {
    component: JiscTable,
    decorators: [withA11y],
    title: 'JiscTable'
};

export const TableStyle1 = () => (
    <JiscTable style='style1'>
        <TableHead>
            <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell>Calories</TableCell>
                <TableCell>Fat&nbsp;(g)</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            <TableRow>
                <TableCell>Frozen yoghurt</TableCell>
                <TableCell>6</TableCell>
                <TableCell>24</TableCell>
            </TableRow>

            <TableRow>
                <TableCell>Ice cream sandwich</TableCell>
                <TableCell>237</TableCell>
                <TableCell>9</TableCell>
            </TableRow>

            <TableRow>
                <TableCell>Eclair</TableCell>
                <TableCell>262</TableCell>
                <TableCell>16</TableCell>
            </TableRow>
        </TableBody>
    </JiscTable>
);

export const TableStyle2 = () => (
    <JiscTable style='style2'>
        <TableHead>
            <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell>Calories</TableCell>
                <TableCell>Fat&nbsp;(g)</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            <TableRow>
                <TableCell>Frozen yoghurt</TableCell>
                <TableCell>6</TableCell>
                <TableCell>24</TableCell>
            </TableRow>

            <TableRow>
                <TableCell>Ice cream sandwich</TableCell>
                <TableCell>237</TableCell>
                <TableCell>9</TableCell>
            </TableRow>

            <TableRow>
                <TableCell>Eclair</TableCell>
                <TableCell>262</TableCell>
                <TableCell>16</TableCell>
            </TableRow>
        </TableBody>
    </JiscTable>
);

export const TableStyle3 = () => (
    <JiscTable style='style3'>
        <TableHead>
            <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell>Calories</TableCell>
                <TableCell>Fat&nbsp;(g)</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            <TableRow>
                <TableCell>Frozen yoghurt</TableCell>
                <TableCell>6</TableCell>
                <TableCell>24</TableCell>
            </TableRow>

            <TableRow>
                <TableCell>Ice cream sandwich</TableCell>
                <TableCell>237</TableCell>
                <TableCell>9</TableCell>
            </TableRow>

            <TableRow>
                <TableCell>Eclair</TableCell>
                <TableCell>262</TableCell>
                <TableCell>16</TableCell>
            </TableRow>
        </TableBody>
    </JiscTable>
);

export const TableStyle4 = () => (
    <JiscTable style='style4'>
        <TableHead>
            <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell>Calories</TableCell>
                <TableCell>Fat&nbsp;(g)</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            <TableRow>
                <TableCell>Frozen yoghurt</TableCell>
                <TableCell>6</TableCell>
                <TableCell>24</TableCell>
            </TableRow>

            <TableRow>
                <TableCell>Ice cream sandwich</TableCell>
                <TableCell>237</TableCell>
                <TableCell>9</TableCell>
            </TableRow>

            <TableRow>
                <TableCell>Eclair</TableCell>
                <TableCell>262</TableCell>
                <TableCell>16</TableCell>
            </TableRow>
        </TableBody>
    </JiscTable>
);
