import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const TSX = () => {

    return (
        <>
        <center>
            <Grid container spacing={1}>
                <Grid item xs={5}>
                    <div className="main_panel">
                        <label>TSX PIZZERIAS</label>
                        <div className="rect">
                            <div className="rect1">
                                <Typography className="delivery">
                                    DELIVERY
                                </Typography>
                            </div>
                            <div className="rect2">
                                <Typography className="pick">
                                    Pick UP
                                </Typography>
                            </div>
                        </div>
                        <div className="time">
                            <Typography className="min">
                                25 mins
                            </Typography>
                            <Typography className="price">
                                ₹ 20
                            </Typography>
                            <Typography className="txt">
                                Discount
                            </Typography>
                        </div>
                        <Typography className="txt">
                            Menu Hours: 10:00 AM to 11:00 PM
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </center>
        </>
    )

}

export default TSX;