import {Button, Card, CardContent, Chip, List, ListItem, ListItemText, Typography} from "@mui/material";
import React from "react";
import {ICard} from "../../types/card.types";
import style from '../../styles/card/card.module.css'
export interface ICustomCurd {
    card: ICard,
    selectedMode: 'Monthly' | 'Yearly'
}

export const CustomCard = ({card, selectedMode}: ICustomCurd) => (
    <Card className={style.card} >
        <CardContent>
            <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                {card.title}
            </Typography>
            <Typography variant="body1" paragraph>
                some lorem text
            </Typography>
            <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
                ${selectedMode === "Monthly" ? (card.cost) : (card.cost * 12)} / {selectedMode}
            </Typography>
            <Typography paragraph>
                ${card.cost * 12} billed annually
                {card.savePercentage && (
                    <Chip
                        label={'Save ' + card.savePercentage + ' %'}
                        color="default"
                        variant="filled"
                        className={style.chip}
                    />
                )}
            </Typography>
            <Button variant="contained" color="primary" fullWidth>
                upgrade
            </Button>
            <Typography className='mt-10'>Lorem text</Typography>
            <List sx={{listStyleType: 'disc', paddingLeft: "20px"}}>
                <ListItem sx={{display: 'list-item'}}>
                    <ListItemText primary="Lorem 1"/>
                </ListItem>
                <ListItem sx={{display: 'list-item'}}>
                    <ListItemText primary="Lorem 2"/>
                </ListItem>
                <ListItem sx={{display: 'list-item'}}>
                    <ListItemText primary="Lorem 3"/>
                </ListItem>
            </List>
        </CardContent>
    </Card>
);