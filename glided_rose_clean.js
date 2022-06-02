class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality(){
    this.quality--;
    if(this.quality < 0){
      this.quality = 0;
    }
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {


    this.items.map(item => {
      if (item.constructor.name !== "Item"){
        item.updateSellIn();
      }
      item.updateQuality();
    })
    return this.items;  
  }
}

class Conjured extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }
  updateQuality(){
    this.quality-=2;
    if(this.quality < 0){
      this.quality = 0;
    }
  }
  updateSellIn(){
    this.sellIn--
    if(this.sellIn < 0){
      this.sellIn = 0;
    }
  }
}

class AgedBrie extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }
  updateQuality(){
    this.quality = this.quality + 1
    if(this.quality > 50){
      this.quality = 50;
    }
  }
  updateSellIn(){
    this.sellIn--
    if(this.sellIn < 0){
      this.sellIn = 0;
    }
  }
}

class Sulfuras extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }

  updateQuality(){
    this.quality = 80;
  }

  updateSellIn(){
    this.sellIn--;
    if(this.sellIn < 0){
      this.sellIn = 0;
    }
  }
}

class BackstagePasses extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }

  updateSellIn(){
    this.sellIn--
    if(this.sellIn < 0){
      this.sellIn = 0;
    }
  }

  updateQuality(){
    switch (true) {
      case ( this.sellIn <= 10 &&  this.sellIn > 5) : 
        this.quality+=2;
        break;
      case ( this.sellIn <= 5 &&  this.sellIn > 0) :
        this.quality+=3;
        break;
      case ( this.sellIn <= 0) :
        this.quality = 0;
        break;
      default :
        this.quality++;
    }

    if(this.quality > 50){
      this.quality = 50;
    }
  }
}

module.exports = {
  Item,
  Shop, 
  AgedBrie,
  Conjured,
  Sulfuras,
  BackstagePasses

}
