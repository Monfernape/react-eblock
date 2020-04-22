import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const LoginStyles = makeStyles((theme: Theme) =>
    createStyles({
        Flex: {
            display: "flex",
            height: "100vh"
        },
        FlexItems: {
            width: "50%"
        },
        AlignCenter: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
        }
    })
);
