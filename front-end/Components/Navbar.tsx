// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Box, Drawer, IconButton, MenuItem, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import PublicIcon from '@material-ui/icons/Public';
import Link from 'next/link'

type Props = {};
const drawerWidth = 100;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    drawerContainer: {
        padding: "20px 30px",
    },
    rectangle: {
        ...theme.typography.button,
        backgroundColor: "pria",
        padding: theme.spacing(1)
    },
}));

export const Navbar = (props: Props) => {
        const classes = useStyles();

        const [isMobile, setIsMobile] = useState(false)
        const [isDrawerOpen, setIsDrawerOpen] = useState(false)

        const headersData = ["Interviews", "Instagram", "About", "Future", "Login"]

        useEffect(() => {
            const setResponsiveness = () => {
                return window.innerWidth < 900
                    ? setIsMobile(true)
                    : setIsMobile(false)
            }
            setResponsiveness();
            window.addEventListener("resize", () => setResponsiveness());
        }, []);

        const displayMobile = () => {
            return (
                <Toolbar>
                    <IconButton
                        edge={"start"}
                        color={"inherit"}
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        <MenuIcon/>
                    </IconButton>

                    {!isDrawerOpen && <><PublicIcon fontSize={"large"}/>
                        <Typography variant={"h4"}>
                            <Link href={"/"}>
                                <a>
                                    INTALK21
                                </a>
                            </Link>
                        </Typography></>}
                </Toolbar>
            );
        };

        const getDrawerChoices = () => {
            return headersData.map((label) => {
                return (
                    <MenuItem>
                        <Link href={`/${label.toLowerCase()}`}>
                            <a>{label}</a>
                        </Link>
                    </MenuItem>
                );
            });
        };


        const displayDesktop = () => {
            return (
                <Toolbar>
                    <PublicIcon fontSize={"large"}/>
                    <Typography variant={"h4"} style={{flex: 1}}>
                        <Link href={"/"}>
                            <a>
                                INTALK21
                            </a>
                        </Link></Typography>
                    {getDrawerChoices()}

                </Toolbar>)
        }

        return (
            <> <AppBar position={"sticky"}>
                {isMobile ? displayMobile() : displayDesktop()}
            </AppBar>
                <Drawer
                    anchor={"left"}
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                >
                    <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
                        <Typography variant={"h5"}>
                            <PublicIcon/>
                            <Link href={"/"}>
                                <a>
                                INTALK21
                                </a>
                            </Link>
                        </Typography>
                    </Box>
                    <Toolbar>
                        <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
                    </Toolbar>
                </Drawer>
            </>
        );
    }
;