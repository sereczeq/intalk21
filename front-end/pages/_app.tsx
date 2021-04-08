import '../styles/globals.css'
import {Layout} from "../Components/Layout";
import Head from "next/head"
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";


function MyApp({Component, pageProps}) {
    return(
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
            </Head>
            <Component {...pageProps} />
        </Layout>)
}

export default MyApp
