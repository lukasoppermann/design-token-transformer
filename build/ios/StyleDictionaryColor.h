
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Mon, 28 Sep 2020 12:39:30 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorsOrange,
ColorsGreen,
ColorsBlue,
ColorsSecondaryGreen,
ColorsSecondaryYellow,
UtilitiesError,
EffectShadowColor,
InnerShadow0Color,
InnerShadow1Color
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
