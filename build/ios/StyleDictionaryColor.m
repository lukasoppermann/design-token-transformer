
//
// StyleDictionaryColor.m
//
// Do not edit directly
// Generated on Sat, 13 Feb 2021 01:33:19 GMT
//

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
rgba(255, 230, 0, 1),
rgba(112, 141, 242, 1),
rgba(4, 74, 255, 1),
rgba(64, 255, 186, 1),
rgba(64, 255, 186, 1),
rgba(0, 0, 0, 0.1),
rgba(4, 74, 255, 1),
rgba(64, 223, 80, 1),
rgba(52, 86, 175, 1),
rgba(255, 184, 0, 1),
rgba(255, 184, 0, 1),
rgba(255, 255, 255, 1),
rgba(255, 255, 255, 1),
rgba(207, 48, 48, 1),
rgba(255, 255, 255, 1),
rgba(74, 79, 204, 1),
rgba(255, 255, 255, 1),
rgba(255, 184, 0, 1),
rgba(255, 138, 0, 1),
rgba(255, 46, 0, 1),
rgba(255, 0, 0, 1),
rgba(0, 0, 0, 0.25),
rgba(0, 0, 0, 0.25),
rgba(0, 0, 0, 1),
rgba(0, 0, 0, 0.25),
rgba(1, 46, 134, 1),
rgba(0, 100, 217, 1),
rgba(219, 124, 0, 1),
rgba(198, 218, 246, 1),
rgba(38, 38, 38, 1),
rgba(117, 117, 117, 1),
rgba(241, 241, 241, 1),
rgba(255, 255, 255, 1),
rgba(222, 222, 222, 1),
rgba(208, 66, 27, 1),
rgba(19, 128, 0, 1),
rgba(255, 255, 255, 1),
rgba(241, 241, 241, 1),
rgba(38, 38, 38, 1),
rgba(117, 117, 117, 1),
rgba(156, 156, 156, 1),
rgba(255, 255, 255, 1),
rgba(208, 66, 27, 1),
rgba(19, 128, 0, 1),
rgba(41, 141, 255, 1),
rgba(124, 174, 232, 1),
rgba(253, 180, 71, 1),
rgba(183, 203, 234, 1),
rgba(255, 255, 255, 1),
rgba(161, 161, 161, 1),
rgba(60, 60, 60, 1),
rgba(38, 38, 38, 1),
rgba(36, 36, 36, 1),
rgba(255, 77, 77, 1),
rgba(28, 189, 0, 1),
rgba(17, 17, 17, 1),
rgba(38, 38, 38, 1),
rgba(255, 255, 255, 1),
rgba(161, 161, 161, 1),
rgba(82, 82, 82, 1),
rgba(38, 38, 38, 1),
rgba(255, 77, 77, 1),
rgba(28, 189, 0, 1)
    ];
  });

  return colorArray;
}

@end
