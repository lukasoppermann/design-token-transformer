
//
// StyleDictionaryColor.m
//
// Do not edit directly
// Generated on Wed, 16 Jun 2021 17:40:19 GMT
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
rgba(0, 96, 223, 1),
rgba(2, 80, 187, 1),
rgba(5, 64, 150, 1),
rgba(0, 96, 223, 0.4),
rgba(240, 240, 244, 1),
rgba(224, 224, 230, 1),
rgba(207, 207, 216, 1),
rgba(240, 240, 244, 0.4),
rgba(226, 40, 80, 1),
rgba(197, 0, 66, 1),
rgba(129, 2, 32, 1),
rgba(226, 40, 80, 0.4),
rgba(0, 96, 223, 1),
rgba(21, 20, 26, 1),
rgba(91, 91, 102, 1),
rgba(197, 0, 66, 1),
rgba(21, 20, 26, 0.4),
rgba(251, 251, 254, 1),
rgba(144, 89, 255, 1),
rgba(2, 80, 187, 1),
rgba(91, 91, 102, 1),
rgba(0, 144, 237, 1),
rgba(255, 164, 54, 1),
rgba(226, 40, 80, 1),
rgba(42, 195, 162, 1),
rgba(240, 240, 244, 1),
rgba(249, 249, 251, 1),
rgba(255, 255, 255, 1),
rgba(91, 91, 102, 0.45),
rgba(144, 89, 255, 1),
rgba(255, 74, 162, 1),
rgba(255, 189, 79, 1),
rgba(143, 143, 157, 1),
rgba(240, 240, 244, 1),
rgba(240, 240, 244, 1),
rgba(207, 207, 216, 1),
rgba(0, 221, 255, 1),
rgba(128, 235, 255, 1),
rgba(170, 242, 255, 1),
rgba(0, 221, 255, 0.4),
rgba(43, 42, 51, 1),
rgba(82, 82, 94, 1),
rgba(91, 91, 102, 1),
rgba(43, 42, 51, 0.4),
rgba(226, 40, 80, 1),
rgba(197, 0, 66, 1),
rgba(129, 2, 32, 1),
rgba(226, 40, 80, 0.4),
rgba(251, 251, 254, 0.4),
rgba(251, 251, 254, 1),
rgba(207, 207, 216, 1),
rgba(21, 20, 26, 1),
rgba(0, 221, 255, 1),
rgba(255, 154, 162, 1),
rgba(203, 158, 255, 1),
rgba(0, 221, 255, 1),
rgba(251, 251, 254, 1),
rgba(128, 235, 255, 1),
rgba(255, 189, 79, 1),
rgba(255, 154, 162, 1),
rgba(84, 255, 189, 1),
rgba(91, 91, 102, 0.45),
rgba(28, 27, 34, 1),
rgba(43, 42, 51, 1),
rgba(66, 65, 77, 1),
rgba(144, 89, 255, 1),
rgba(255, 74, 162, 1),
rgba(255, 189, 79, 1),
rgba(143, 143, 157, 1),
rgba(82, 82, 94, 1),
rgba(58, 57, 68, 1),
rgba(58, 57, 68, 0.2),
rgba(58, 57, 68, 0.2),
rgba(58, 57, 68, 0.2),
rgba(128, 128, 142, 0.5),
rgba(128, 128, 142, 0.9),
rgba(58, 57, 68, 0.2),
rgba(28, 27, 34, 0.5),
rgba(28, 27, 34, 0.5),
rgba(28, 27, 34, 0.5),
rgba(58, 57, 68, 0.2)
    ];
  });

  return colorArray;
}

@end
