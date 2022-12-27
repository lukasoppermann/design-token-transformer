
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Tue, 27 Dec 2022 01:28:40 GMT


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
[UIColor colorWithRed:0.882f green:0.118f blue:0.349f alpha:1.000f],
[UIColor colorWithRed:0.820f green:0.671f blue:0.447f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
