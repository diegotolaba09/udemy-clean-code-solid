type Size = '' | 'S' | 'M' | 'L';

class Product {
  constructor(public name: string, public price: number, public size: Size) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((this[key] as string).length <= 0) throw Error(`${key} is empty`);
          break;
        case 'number':
          if (this[key] <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not support`);
      }
    }

    return true;
  }

  toString() {
    if (!this.isProductReady()) return;
    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const blueParts = new Product('Blue Large Parts', 1, 'M');
  console.log(blueParts.toString());
})();
