const {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("should decrease Quality and SellIn by 1 when SellIn >= 1", () => {
    //set up
    const item = new Item('Dexterity Vest', 6, 10)
    const gildedRose = new Shop([ item ]);
    const expectedQuality = 9
    const expectedSellIn = 5
    //execute
    const result = gildedRose.updateQuality()
    //verity
    expect(expectedQuality).toEqual(result[0].quality)
    expect(expectedSellIn).toEqual(result[0].sellIn)
  })

  it("should decrease Quality by 2 and SellIn by 1 when SellIn < 1", () => {
    //set up
    const item = new Item('Dexterity Vest', 0, 10)
    const gildedRose = new Shop([ item ]);
    const expectedQuality = 8
    const expectedSellIn = -1
    //execute
    const result = gildedRose.updateQuality()
    //verity
    expect(expectedQuality).toEqual(result[0].quality)
    expect(expectedSellIn).toEqual(result[0].sellIn)
  })

  
  it("should never decrease Quality to negative", () => {
    //set up
    const item = new Item('Dexterity Vest', 0, 1)
    const gildedRose = new Shop([ item ]);
    const expectedQuality = 0
    const expectedSellIn = -1
    //execute
    const result = gildedRose.updateQuality()
    //verity
    expect(expectedQuality).toEqual(result[0].quality)
    expect(expectedSellIn).toEqual(result[0].sellIn)
  })
  
  it("should increase Aged Brie's Quality by 1 when SellIn >= 1", () => {
    //set up
    const item = new Item('Aged Brie', 5, 10)
    const gildedRose = new Shop([ item ]);
    const expectedQuality = 11
    const expectedSellIn = 4
    //execute
    const result = gildedRose.updateQuality()
    //verity
    expect(expectedQuality).toEqual(result[0].quality)
    expect(expectedSellIn).toEqual(result[0].sellIn)
  })

  it("should increase Aged Brie's Quality by 2 when SellIn < 1", () => {
    //set up
    const item = new Item('Aged Brie', -2, 10)
    const gildedRose = new Shop([ item ]);
    const expectedQuality = 12
    const expectedSellIn = -3
    //execute
    const result = gildedRose.updateQuality()
    //verity
    expect(expectedQuality).toEqual(result[0].quality)
    expect(expectedSellIn).toEqual(result[0].sellIn)
  })

  it("should not increase Quality to over 50", () => {
    //set up
    const item = new Item('Aged Brie', -2, 49)
    const gildedRose = new Shop([ item ]);
    const expectedQuality = 50
    const expectedSellIn = -3
    //execute
    const result = gildedRose.updateQuality()
    //verity
    expect(expectedQuality).toEqual(result[0].quality)
    expect(expectedSellIn).toEqual(result[0].sellIn)
  })

  it("should not increase or decrease Sulfuras' Quality or SellIn value", () => {
    //set up
    const item = new Item('Sulfuras, Hand of Ragnaros', -2, 80)
    const gildedRose = new Shop([ item ]);
    const expectedQuality = 80
    const expectedSellIn = -2
    //execute
    const result = gildedRose.updateQuality()
    //verity
    expect(expectedQuality).toEqual(result[0].quality)
    expect(expectedSellIn).toEqual(result[0].sellIn)
  })

  it("should increase Backstage passes' Quality by 1 when SellIn >= 11", () => {
    //set up
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 15)
    const gildedRose = new Shop([ item ]);
    const expectedQuality = 16
    const expectedSellIn = 14
    //execute
    const result = gildedRose.updateQuality()
    //verity
    expect(expectedQuality).toEqual(result[0].quality)
    expect(expectedSellIn).toEqual(result[0].sellIn)
  })
  
  it("should increase Backstage passes' Quality by 2 when SellIn < 11", () => {
    //set up
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 15)
    const gildedRose = new Shop([ item ]);
    const expectedQuality = 17
    const expectedSellIn = 9
    //execute
    const result = gildedRose.updateQuality()
    //verity
    expect(expectedQuality).toEqual(result[0].quality)
    expect(expectedSellIn).toEqual(result[0].sellIn)
  })

  it("should increase Backstage passes' Quality by 2 when SellIn < 6", () => {
    //set up
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 15)
    const gildedRose = new Shop([ item ]);
    const expectedQuality = 18
    const expectedSellIn = 4
    //execute
    const result = gildedRose.updateQuality()
    //verity
    expect(expectedQuality).toEqual(result[0].quality)
    expect(expectedSellIn).toEqual(result[0].sellIn)
  })

  it("should decrease Conjured item's Quality by 2 and SellIn by 1 when SellIn >= 1", () => {
    //set up
    const item = new Item('Conjured Mana Cake', 6, 10)
    const gildedRose = new Shop([ item ]);
    const expectedQuality = 8
    const expectedSellIn = 5
    //execute
    const result = gildedRose.updateQuality()
    //verity
    expect(expectedQuality).toEqual(result[0].quality)
    expect(expectedSellIn).toEqual(result[0].sellIn)
  })

  it("should decrease Conjured item's Quality by 2 and SellIn by 1 when SellIn >= 1", () => {
    //set up
    const item = new Item('Conjured Mana Cake', 6, 10)
    const gildedRose = new Shop([ item ]);
    const expectedQuality = 8
    const expectedSellIn = 5
    //execute
    const result = gildedRose.updateQuality()
    //verity
    expect(expectedQuality).toEqual(result[0].quality)
    expect(expectedSellIn).toEqual(result[0].sellIn)
  })

  it("should decrease Conjured item's Quality to negative", () => {
    //set up
    const item = new Item('Conjured Mana Cake', -2, 1)
    const gildedRose = new Shop([ item ]);
    const expectedQuality = 1
    const expectedSellIn = -3
    //execute
    const result = gildedRose.updateQuality()
    //verity
    expect(expectedQuality).toEqual(result[0].quality)
    expect(expectedSellIn).toEqual(result[0].sellIn)
  })
});
