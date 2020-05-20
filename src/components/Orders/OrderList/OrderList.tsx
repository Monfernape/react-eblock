import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MaterialTable from "material-table";
import CreateOrder from '../CreateOrder/CreateOrder';

export default function OrderList() {

    const drawerWidth = 940;

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
            },
            appBar: {
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
            },
            appBarShift: {
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginRight: drawerWidth,
            },
            title: {
                flexGrow: 1,
            },
            Background: {
                backgroundColor: "rgb(227, 166, 36)"
            },
            hide: {
                display: 'none',
            },
            drawer: {
                width: drawerWidth,
                flexShrink: 0,
            },
            drawerPaper: {
                width: drawerWidth,
            },
            drawerHeader: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: theme.spacing(0, 1),
                // necessary for content to be below app bar
                ...theme.mixins.toolbar,
            },
            content: {
                flexGrow: 1,
                padding: theme.spacing(3),
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                marginRight: -drawerWidth,
            },
            contentShift: {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginRight: 0,
            },
        }),
    );

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const data = localStorage.getItem("orderusman");
    const rowsData = data ? JSON.parse(data): [];

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, classes.Background, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.title}>
                        Order List
          </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                    >
                        <AddCircleIcon style={{ fontSize: 30 }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <div style={{ maxWidth: "100%" }}>
                    <MaterialTable
                        columns={[
                            { title: "Name", field: "Name" },
                            { title: "Model", field: "Model" },
                            { title: "MaintenanceType", field: "MaintenanceType" }
                        ]}
                        data={rowsData}
                        title="Orders"
                    />
                </div>
            </main>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader && classes.Background}>
                    <IconButton onClick={handleDrawerClose} style={{ display: 'inline-block' }}>
                        <CancelIcon style={{ display: "inline-block" }} />
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.title} style={{ display: 'inline-block', verticalAlign: "middle", color: "white" }}>
                        Create Order
                    </Typography>
                </div>
                <Divider />
                <List>
                    <CreateOrder openDrawer={(value: boolean) => setOpen(value) } />
                </List>
            </Drawer>
        </div>
    )
}
