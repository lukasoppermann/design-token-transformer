
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Tue, 28 Jun 2022 19:03:57 GMT


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
[UIColor colorWithRed:0.373f green:0.063f blue:0.718f alpha:1.000f],
[UIColor colorWithRed:0.314f green:0.051f blue:0.608f alpha:1.000f],
[UIColor colorWithRed:0.298f green:0.051f blue:0.573f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.302f],
[UIColor colorWithRed:0.373f green:0.063f blue:0.718f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:0.800f],
[UIColor colorWithRed:0.725f green:0.227f blue:0.514f alpha:1.000f],
[UIColor colorWithRed:0.145f green:0.596f blue:0.835f alpha:1.000f],
[UIColor colorWithRed:0.694f green:0.725f blue:0.137f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.137f green:0.137f blue:0.137f alpha:1.000f],
[UIColor colorWithRed:0.494f green:0.494f blue:0.494f alpha:1.000f],
[UIColor colorWithRed:0.647f green:0.647f blue:0.647f alpha:1.000f],
[UIColor colorWithRed:0.741f green:0.741f blue:0.741f alpha:1.000f],
[UIColor colorWithRed:0.925f green:0.925f blue:0.925f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.192f green:0.800f blue:0.925f alpha:1.000f],
[UIColor colorWithRed:0.145f green:0.596f blue:0.835f alpha:1.000f],
[UIColor colorWithRed:0.129f green:0.729f blue:0.271f alpha:1.000f],
[UIColor colorWithRed:0.949f green:0.753f blue:0.216f alpha:1.000f],
[UIColor colorWithRed:0.816f green:0.008f blue:0.106f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.302f],
[UIColor colorWithRed:0.373f green:0.063f blue:0.718f alpha:0.102f]
    ];
  });

  return colorArray;
}

@end
