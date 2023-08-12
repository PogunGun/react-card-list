export interface ICard{
    title:string
    cost:number
    savePercentage?:number
}
export type SelectedMode = 'Yearly'|'Monthly'