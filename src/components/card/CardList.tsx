import {ICard, SelectedMode} from '../../types/card.types';
import {Grid} from '@mui/material';
import {CustomCard} from './Card';
import React from 'react';

interface ICardList {
    cards: Array<ICard>,
    selectedMode: SelectedMode
}

export const CardList = ({cards, selectedMode}: ICardList) => (
  <Grid container spacing={5} className='mt-10'>
    {cards.map((card: ICard) => (
      <Grid item xs={12} sm={6} md={4} key={card.id}>
        <CustomCard card={card} selectedMode={selectedMode}/>
      </Grid>
    ))}
  </Grid>
);
