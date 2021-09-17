
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Fri, 17 Sep 2021 10:23:13 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
#ffffffff,
#f1f2f4ff,
#17181aff,
#f1f2f4ff,
#d8daddff,
#c0c2c6ff,
#a8aaafff,
#17181aff,
#d4000dff,
#00af2cff,
#ff8a00ff,
#020203ff,
#515258ff,
#6a6d71ff,
#f7f8f9ff,
#b2b4b9ff,
#787f88ff,
#020203ff,
#515258ff,
#676a6eff,
#f7f8f9ff,
#b2b4b9ff,
#787f88ff,
#020203ff,
#515258ff,
#717579ff,
#000000cc,
#ffffffff,
#000000ff,
#222325ff,
#2c2e30ff,
#020203ff,
#515258ff,
#717579ff,
#222325ff,
#424447ff,
#4d4f53ff,
#6e7175ff,
#fdfeffff,
#d4000dff,
#00af2cff,
#ff8a00ff,
#f7f8f9ff,
#afb0b6ff,
#848a95ff,
#f7f8f9ff,
#afb0b6ff,
#9197a1ff,
#f7f8f9ff,
#bfc2c8ff,
#878991ff,
#020203ff,
#515258ff,
#717579ff,
#000000cc,
#ffffffff
    ];
  });

  return colorArray;
}

@end
