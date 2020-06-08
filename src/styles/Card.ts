import { makeStyles, createStyles, Theme  } from '@material-ui/core/styles';

export const tileViewStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 351
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }),
);

export const CardStyles = makeStyles({
    root: {
        width: 200,
        padding: '50px',
        margin: '0 auto',
        background: 'rgb(227, 166, 36)'
    },
    media: {
        height: '140px',
        paddingTop: '56.25%', // 16:9
    },
    description: {
        fontSize: 17,
    },
    pos: {
        marginBottom: 12,
    },
});
