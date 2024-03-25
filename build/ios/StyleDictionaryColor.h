
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Mon, 25 Mar 2024 15:46:09 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
NotExported,
ColorsSemiRed,
ColorsMultipleFills0,
ColorsMultipleFills1,
ColorsSingleBlue,
ColorsRefBlue,
ColorsEmpty,
ColorsSpecialCharacters,
ColorsSpecialCharactersNderung,
DesignTokensFunctionalColorsSuccesscolor,
DesignTokensFunctionalColorsFancyref,
BaseColorsFancygreen
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
