export class ApartmentDto {
  id?: number;
  name: string;
  place : string;
  square : number;
  price : number;
  imagePath : string;


  constructor(id: number, name: string, place: string, square: number, price: number, imagePath: string) {
    this.id = id;
    this.name = name;
    this.place = place;
    this.square = square;
    this.price = price;
    this.imagePath = imagePath;
  }
}
