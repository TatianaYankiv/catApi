export interface Card {
  breeds: Breed[];
  id: string;
  url: string;
  width: number;
  height: number;
}
export interface Breed{
    id: string;
    name: string;
    origin: string;
    description: string;
}
