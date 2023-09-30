import React from "react";
import { Typography, AppBar, Button, Card, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container, CardContent } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import useStyles from "./Styles";

const cards =[1, 2, 3, 4, 5, 6, 7, 8, 9]
const App = () => {
    const { classes } = useStyles();

    return (
       <>
         <CssBaseline />
         <AppBar position="relative">
            <Toolbar>
                <PhotoCamera className={classes.icon} />
                <Typography variant="h6">
                    Photo Album 
                </Typography>
            </Toolbar>
         </AppBar>
         <main>
            <div className={classes.container}>
                <Container maxwidth="sm">
                    <Typography variant="h2" align="center" color="textprimary" guttterbottom="true">
                        Photo Album
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragrapgh="true">
                        Hello everyone This is a photo album which  i created for travelers to store their travel photos according to their trips into different albums
                    </Typography>
                    <div className={classes.buttons}>
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
                </Container>
            </div>
            <Container className={classes.cardGrid} maxwidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia 
                                 className={classes.cardMedia}
                                 image="https://source.unsplash.com/random"
                                 title="Image Title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5">
                                  Heading  
                                </Typography>
                                <Typography>
                                    This is a media card. This will be used for content description 
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">View</Button>
                                <Button size="small" color="primary">Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                    
                </Grid>
            </Container>
         </main>
         <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Home,    About,     Contact
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">
                ©2023 Travel Diary, All Rights Reserved
            </Typography>
         </footer>
       </>
    );
}

export default App;