import React from "react";
import { Typography, AppBar, Button, Card, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
     container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
     }
}));

const App = () => {
    const { classes } = useStyles();

    return (
       <>
         <CssBaseline />
         <AppBar position="relative">
            <Toolbar>
                <PhotoCamera />
                <Typography variant="h6">
                    Photo Album 
                </Typography>
            </Toolbar>
         </AppBar>
         <main>
            <div className={classes.container}>
                <container maxwidth="sm">
                    <Typography variant="h2" align="center" color="textprimary" guttterbottom="true">
                        Photo Album
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragrapgh="true">
                        Hello everyone This is a photo album which  i created for travelers to store their travel photos according to their trips into different albums
                    </Typography>
                    <div>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Go to another album
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </container>
            </div>
         </main>
       </>
    );
}

export default App;