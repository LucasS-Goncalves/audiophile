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
  youMayAlsoLike: YouMayLikeProduct[]
}

export interface InTheBox{
  amount: string,
  item: string
}

export interface Feature{
  paragraph: string
}

export interface YouMayLikeProduct{
  id: string,
  name: string,
  productImages: {
    imgMobile: string,
    imgTablet: string,
    imgDesktop: string,
  },
}
