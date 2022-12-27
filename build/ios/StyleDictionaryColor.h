
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Tue, 27 Dec 2022 01:26:22 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorPrimarycolor,
ColorSecondarycolor
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
