class ProductApi {
  fetch = (limit = 5) => {
    const PATH = 'https://demo2272885.mockable.io/products';
    return fetch(PATH).then(resp => resp.json())
  }

  get list() {
    return this.fetch(3).then(resp => resp.products.slice(0, 3))
  }

  get all() {
    return this.fetch().then(resp => resp.products)
  }
}

export const products = new ProductApi()