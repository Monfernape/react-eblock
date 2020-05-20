import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const OrderStyles = makeStyles((theme: Theme) => 

    createStyles({
        Flex: {
            flex: "display"
        },
        FullWidth: {
            width: "calc(50% - 20px)",
            margin: "10px"
        }
    })
);