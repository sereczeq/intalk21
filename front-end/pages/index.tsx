import {Card, CardActionArea, CardContent, CardHeader, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Resizer from 'react-image-file-resizer';
import {useEffect, useState} from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 100,
        paddingTop: '56%'
    }
}));


export default function Home() {
    const classes = useStyles()

    return (<Container>

            <div>
                <Typography variant={"h1"} align={"center"}>InTalk21</Typography>
                <Typography variant={"h3"} align={"center"}>The place for your daily political news and
                    interviews.</Typography>
                <br/>
                <Typography>Tired of old guys talking on media? Want to see some actually interesting, unbiased news? If
                    so,
                    this place is just for you.</Typography>
                <Typography>So grab a cup of coffee and enjoy your time</Typography>
            </div>
            <br/>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardActionArea>
                                <CardHeader title={"Interview with Donald Trump"}
                                            subheader="September 14, 2016"/>
                                <CardMedia
                                    // className={classes.media}
                                    component="img"
                                    src={"./20170513_blp520.jpg"}
                                    title={"Donald Trump"}
                                />
                                <CardContent>
                                    <Typography>We interviewed Dondald Trump today. Does the former president of Unites
                                        States Of America still know the economic po...</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardActionArea>
                                <CardHeader title={"How does an Embassy work?"}
                                            subheader="May 17, 2021"/>
                                <CardMedia
                                    // className={classes.media}
                                    component="img"
                                    src={"./33369058.jpg"}
                                    alt = "Image"
                                    title={"Embassador"}
                                />
                                <CardContent>
                                    <Typography>Can I steal here? Can I smoke here?... Those and many other questions
                                        answered
                                        in this interview by an Embassador of Panam in Poland. Want to find out more? Go
                                        ahead</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardActionArea>
                                <CardHeader title={"PIS fucked up again"}
                                            subheader="April 4, 2021"/>
                                <CardMedia
                                    className={classes.media}
                                    component="img"
                                    src={"./da5d954203_jebac.jpg"}
                                    title={"Donald Trump"}
                                />
                                <CardContent>
                                    <Typography>JEBAĆ PIS! Those words can be heard again everywhere in Poland. Why? Of
                                        course,
                                        they are violating human right yes again. Kaczyński posted on his twitter,
                                        tha...</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardActionArea>
                                <CardHeader title={"Interview with Donald Trump"}
                                            subheader="September 14, 2016"/>
                                <CardMedia
                                    className={classes.media}
                                    component="img"
                                    src={"./20170513_blp520.jpg"}
                                    title={"Donald Trump"}
                                />
                                <CardContent>
                                    <Typography>We interviewed Dondald Trump today. Does the former president of Unites
                                        States Of America still know the economic po...</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}
