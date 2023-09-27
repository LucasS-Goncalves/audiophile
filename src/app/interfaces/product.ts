export interface Product {
  id: string,
  productImages: {
    imgMobile: string,
    imgTablet: string,
    imgDesktop: string,
  },
  isNewProduct: boolean,
  productName: string,
  productDescription: string,
  price: string,
  features: Feature[],
  inTheBox: InTheBox[],
  galleryImages: {
    img1: {
      imgMobile: string,
      imgTablet: string,
      imgDesktop: string,
    },
    img2: {
      imgMobile: string,
      imgTablet: string,
      imgDesktop: string,
    },
    img3: {
      imgMobile: string,
      imgTablet: string,
      imgDesktop: string,
    },
  },
  youMayAlsoLike: YouMayLikeProducts[]
}

export interface InTheBox{
  amount: string,
  item: string
}

export interface Feature{
  paragraph: string
}

export interface YouMayLikeProducts{
  id: string,
  name: string,
  productImage: string,
}
