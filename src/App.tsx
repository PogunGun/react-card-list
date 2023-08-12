import React, {useEffect, useState} from 'react';
import {
    Button,
    ButtonGroup,
    Grid, Link,
    Typography
} from '@mui/material';
import './App.css'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SelectSmall from "./components/Selector";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import {CustomCard} from "./components/Card";

const CardList = ({cards, selectedMode}: any) => (
    cards.map((card: any) => (
        <Grid item xs={12} sm={4} md={4}>
            <CustomCard title={card.title} cost={card.cost} selectedMode={selectedMode}/>
        </Grid>
    ))
)

function App() {
    const [cards, setCards] = useState<any>([])
    const [selectedMode, setSelectedMode] = useState('Monthly');
    const getCardList = (mode: string) => {
        setCards([
            {
                title: "Story",
                cost: 24,

            },
            {title: "Pro", cost: 49},
            {title: "Pro+", cost: 99}
        ])
        setSelectedMode(mode);
    }
    useEffect(() => {
        getCardList("Monthly")
    }, [])
    return (
        <Grid style={{margin: 'auto', maxWidth: '100vh'}}>
            <div style={{padding: '20px', textAlign: 'center'}}>
                <div>
                    <Typography variant="h4" gutterBottom fontWeight="bold">
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
                <div style={{padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <ButtonGroup>
                            <Button
                                variant={selectedMode === 'Monthly' ? 'contained' : 'outlined'}
                                color="primary"
                                onClick={() => getCardList('Monthly')}
                            >
                                Monthly
                            </Button>
                            <Button
                                variant={selectedMode === 'Yearly' ? 'contained' : 'outlined'}
                                color="primary"
                                onClick={() => getCardList('Yearly')}
                            >
                                Yearly
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            Published maps
                            <HelpOutlineOutlinedIcon style={{marginLeft: "10px"}}/>
                        </div>
                        <SelectSmall/>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <Grid container spacing={5}>
                <CardList cards={cards} selectedMode={selectedMode}/>
            </Grid>
            <Grid container spacing={20} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid item xs={4} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <AddShoppingCartOutlinedIcon color="primary" fontSize="large" style={{marginRight: "10px"}}/>
                    <p> Lorem ipsum <Link href="#" underline="hover">dolor</Link> sit amet, consectetur adipisicing elit
                    </p>
                </Grid>
                <Grid item xs={4} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <AddShoppingCartOutlinedIcon color="primary" fontSize="large" style={{marginRight: "10px"}}/>
                    <p><Link href="#" underline="hover">
                        Lorem
                    </Link> ipsum dolor sit amet, consectetur adipisicing elit</p>
                </Grid>
                <Grid item xs={4} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <AddShoppingCartOutlinedIcon color="primary" fontSize="large" style={{marginRight: "10px"}}/>
                    <p> Lorem ipsum dolor sit <Link href="#" underline="hover">amet</Link> , consectetur adipisicing
                        elit</p>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default App;