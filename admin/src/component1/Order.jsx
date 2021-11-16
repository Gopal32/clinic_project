import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Foodimg from '../image/food.png';
import Card_item from './Card_item';
import TSX from './TSX';
// import { Route, Switch } from 'react-router';

const App = () => {

    return (
        <>
        <Grid container spacing={3}>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
                <center>
                    <div className="main_order">
                        <div className="tsx_panel">
                            <TSX className="tsx" />
                        </div>
                      <Card sx={{ maxWidth: 411 }}>
                          <CardMedia
                              component="img"
                              height="140"
                              image={Foodimg}
                              alt="Food"
                          />
                      </Card>
                      <Card_item />
                      {/* <Switch>
                        <Route exact path='/' component={Card_item} />
                        <Route exact path='/pay' component={Pay} />
                      </Switch> */}
                    </div>
                </center>
            </Grid>
            <Grid item xs={1}>
            </Grid>
        </Grid>
        </>
    )
}

export default App;
