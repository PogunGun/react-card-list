import {Button, ButtonGroup, Grid, Link, Typography} from "@mui/material";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SelectSmall from "../components/Selector";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import React, {useEffect, useState} from "react";
import {ICard, SelectedMode} from "../types/card.types";
import {CardList} from "../components/card/CardList";
import style from '../styles/card/card.module.css'

const MONTHLY_CARDS: Array<ICard> = [
    {id:1,title: "Story", cost: 39,},
    {id:2,title: "Pro", cost: 75},
    {id:3,title: "Pro+", cost: 150}
]
const YEARLY_CARDS: Array<ICard> = [
    {id:4,title: "Story", cost: 24, savePercentage: 39},
    {id:5,title: "Pro", cost: 49, savePercentage: 35},
    {id:6,title: "Pro+", cost: 99, savePercentage: 34},
]

export const CardPage = () => {
    const [cards, setCards] = useState<ICard[]>([])
    const [selectedMode, setSelectedMode] = useState<SelectedMode>('Monthly');
    const getCardList = (mode: SelectedMode, cards: any) => {
        setCards(cards)
        setSelectedMode(mode);
    }
    useEffect(() => {
        getCardList("Monthly", MONTHLY_CARDS)
    }, [])
    return (
        <section className='full-width m-auto'>
            <div className='mt-50'>
                <div>
                    <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
                        Choose your plan
                    </Typography>
                    <Typography paragraph>
                        <Link href="#" underline="hover">
                            Lorem ipsum dolor sit amet
                        </Link>
                        , consectetur adipisicing elit. Eligendi exercitationem facere ipsa
                        necessitatibus optio qui similique soluta veritatis.
                        Architecto aspernatur
                        delectus enim iste
                        laboriosam laudantium maiores <Link href="#" underline="hover">necessitatibus </Link> nobis
                        praesentium temporibus!
                    </Typography>
                </div>
                <Grid container>
                    <Grid item xs={12} sm={6} md={6}
                          className={style.centerGrid}>
                        <ButtonGroup>
                            <Button
                                variant={selectedMode === 'Monthly' ? 'contained' : 'outlined'}
                                color="primary"
                                onClick={() => getCardList('Monthly', MONTHLY_CARDS)}
                            >
                                Monthly
                            </Button>
                            <Button
                                variant={selectedMode === 'Yearly' ? 'contained' : 'outlined'}
                                color="primary"
                                onClick={() => getCardList('Yearly', YEARLY_CARDS)}
                            >
                                Yearly
                            </Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} className={style.centerGrid}>
                        <div className={style.centerGrid}>
                            Published maps
                            <HelpOutlineOutlinedIcon className='mr-10'/>
                        </div>
                        <SelectSmall/>
                    </Grid>
                </Grid>
            </div>
            <div>
            </div>
            <CardList cards={cards} selectedMode={selectedMode} />
            <Grid container spacing={5} className={style.centerGrid}>
                <Grid item xs={12} sm={6} md={3}
                      className={style.helpElem}>
                    <AddHomeWorkIcon color="primary" fontSize="large" className='mr-10'/>
                    <p> Lorem ipsum <Link href="#" underline="hover">dolor</Link> sit amet, consectetur adipisicing elit
                    </p>
                </Grid>
                <Grid item xs={12} sm={6} md={3}
                      className={style.helpElem}>
                    <AddModeratorIcon color="primary" fontSize="large" className='mr-10'/>
                    <p><Link href="#" underline="hover">
                        Lorem
                    </Link> ipsum dolor sit amet, consectetur adipisicing elit</p>
                </Grid>
                <Grid item xs={12} sm={6} md={3}
                      className={style.helpElem}
                >
                    <AddShoppingCartOutlinedIcon color="primary" fontSize="large" className='mr-10'/>
                    <p> Lorem ipsum dolor sit <Link href="#" underline="hover">amet</Link> , consectetur adipisicing
                        elit</p>
                </Grid>
            </Grid>
        </section>
    )
}