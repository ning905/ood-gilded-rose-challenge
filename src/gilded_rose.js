class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateSellIn() {
    this.sellIn--
  }

  limitQuality() {
    if (this.quality > 50) {
      this.quality = 50;
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
  }

  update() {
    this.updateSellIn()
    this.quality--
    if (this.sellIn < 0) {
      this.quality--
    }
    this.limitQuality()
  }
}


class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  update() {
    this.updateSellIn()
    this.quality++
    if (this.sellIn < 0) {
      this.quality++
    }
    this.limitQuality()
  }
}

class BackstagePasses extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  update() {
    this.updateSellIn()
    this.quality++
    if (this.sellIn < 10) {
      this.quality++
    }
    if (this.sellIn < 5) {
      this.quality++
    }
    if (this.sellIn < 0) {
      this.quality = 0
    }
    this.limitQuality()
  }
}

class Sulfuras extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  update() {}
}

class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  update() {
    this.updateSellIn()
    this.quality -= 2
    if (this.sellIn < 0) {
      this.quality -= 2
    }
    this.limitQuality()
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => item.update())
    return this.items;
  }
}

module.exports = {
  Item,
  AgedBrie,
  BackstagePasses,
  Sulfuras,
  Conjured,
  Shop
}