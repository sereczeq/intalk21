// @flow
import * as React from 'react';
import InstagramEmbed from "react-instagram-embed";
import {Grid, Typography} from "@material-ui/core";

type Props = {

};
const Instagram = (props: Props) => {
    return (
        <Grid container alignContent={"center"}>
            <Grid item xs={12} md={4} alignContent={"center"}>
                <Typography variant={"h4"}>See our latest post!</Typography>
            </Grid>
            <Grid item xs={12} md={4} alignContent={"center"}><InstagramEmbed
                url='https://www.instagram.com/p/CNVICDMFxv7/'
                clientAccessToken='769592143699407|82a3b4fdc1c11a3b487db65bd27d3e77'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {
                }}
                onSuccess={() => {
                    console.log("success")
                }}
                onAfterRender={() => {
                }}
                onFailure={() => {
                    console.log("fail")
                }}
            />
            </Grid>
            <Grid item xs={12} md={4} alignContent={"center"}>
                <Typography variant={"h4"}>See our latest post!</Typography>
            </Grid>
        </Grid>
    );
};

export default Instagram