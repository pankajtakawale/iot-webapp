import React, { useEffect, useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Chart from "./Chart";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Analytics = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/endpoints")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [])

    return (
        <React.Fragment>
            <CssBaseline />
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid xs="auto" key={index}>
                            <Item>
                                <Chart />
                            </Item>
                        </Grid>
                    ))}
                </Grid>
        </React.Fragment>
    );
}

export default Analytics;
