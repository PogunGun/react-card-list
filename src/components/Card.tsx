import {Button, Card, CardContent, List, ListItem, ListItemText, Typography} from "@mui/material";
import React from "react";

export const CustomCard = ({title, selectedMode, cost}: any) => (
    <Card className='card'>
        <CardContent>
            <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                {title}
            </Typography>
            <Typography variant="body1" paragraph>
                some lorem text
            </Typography>
            <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
                ${selectedMode === "Monthly" ? (cost) : (cost * 12)} / {selectedMode}
            </Typography>
            <Typography  paragraph>
                some lorem text
            </Typography>
            <Button variant="contained" color="primary" fullWidth>
                Update
            </Button>
            <List sx={{ listStyleType: 'disc',paddingLeft:"20px" }}>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary="Пункт 1"/>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary="Пункт 2"/>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary="Пункт 3"/>
                </ListItem>
            </List>
        </CardContent>
    </Card>
);