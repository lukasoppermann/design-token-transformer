
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Mon, 25 Mar 2024 15:46:09 GMT


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
#fe5050ff,
#ff5f0480,
#40ffbaff,
#0000001a,
#044affff,
#044affff,
#00000000,
#40df50ff,
#3456afff,
#12f0a0ff,
#12f0a0ff,
#12f0a0ff
    ];
  });

  return colorArray;
}

@end
