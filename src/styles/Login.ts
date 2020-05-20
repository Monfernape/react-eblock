import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const AuthStyles = makeStyles((theme: Theme) =>
    createStyles({
        Flex: {
            display: "flex"
        },
        FullHeight: {
            height: "100vh"
        },
        FullWidth: {
            width: "calc(100% - 50px)",
            margin: "10px 0px"
        }
    })
);
