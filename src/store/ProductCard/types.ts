export interface IProductCard {
  product: IObject[]
}

export interface IObject {
  id: number
  path: string,
  images: IImages[],
  price: string,
  name: string
  brand: string
  size: ISize[]
}

interface IImages {
  id:number
  path:string
  description: string
}

interface ISize {
  id: number
  size:string
}
