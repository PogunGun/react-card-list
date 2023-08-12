export interface ICard{
    id:number
    title:string
    cost:number
    savePercentage?:number
}
export type SelectedMode = 'Yearly'|'Monthly'