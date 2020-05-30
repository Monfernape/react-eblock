import { makeStyles } from '@material-ui/core/styles';

export const CardStyles = makeStyles({
    root: {
        maxWidth: 275,
        padding: '50px',
        margin: '0 auto',
        background: 'rgb(227, 166, 36)'
    },
    media: {
        height: '240px',
        paddingTop: '56.25%', // 16:9
    },
    description: {
        fontSize: 17,
    },
    pos: {
        marginBottom: 12,
    },
});
