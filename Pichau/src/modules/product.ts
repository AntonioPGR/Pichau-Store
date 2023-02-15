import { NavigateFunction } from 'react-router-dom';

export class Product{

  constructor(
    public description :string,
    public price :{
      from ?:number,
      to :number,
      installments :number
    },
    public id :number,
    public photo :string,
    public category:{
      id :number,
      label :string
    }
  ){
  }

  public getFormatedBeforePrice(){
    if(this.price.from){
      return Product.FormatPrice(this.price.from);
    }
    return '';
  }
  public getFormatedInCashPrice(){
    return Product.FormatPrice(this.price.to);
  }
  public getFormatedEachInstallmentPrice(){
    return Product.FormatPrice((this.price.installments/12));
  }
  public getFormatedIntallmentPrice(){
    return Product.FormatPrice(this.price.installments);
  }
  public getCategoryId(){
    return this.category.id;
  }
  public getCategoryLabel(){
    return this.category.label;
  }

  static FormatPrice(value:number){
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }
  static ConvertToProduct(value:{
    description :string,
    price :{
      from ?:number,
      to :number,
      installments :number
    },
    id :number,
    photo :string,
    category:{
      id :number,
      label :string
    }
  }):Product{
    return new Product(
      value.description,
      value.price,
      value.id,
      value.photo,
      value.category
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isProduct(objToCheck:any){
    return (
      'description' in objToCheck && 
      'price' in objToCheck &&
      'id' in objToCheck &&
      'photo' in objToCheck &&
      'category' in objToCheck 
    );
  }

  public navigateToProductPage(navigateFunc:NavigateFunction){
    navigateFunc(`/produto/${this.id}`, {state: this});
    console.log('navigating');
  }

}