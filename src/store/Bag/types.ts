export interface IBag {
  bag: IObject[] | []
}

export interface IObject {
  id: number
  selectedSize: number
  path: string,
  images: IImages[],
  price: string,
  name: string
  brand: string
  size: ISize[]
}

export interface IImages {
  id:number
  path:string
  description: string
}

interface ISize {
  id: number
  size:string
}
