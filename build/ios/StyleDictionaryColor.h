
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Mon, 03 Jan 2022 14:59:25 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorColorsMultipleFills0,
ColorColorsMultipleFills1,
ColorColorsSingleBlue,
ColorColorsRefBlue,
ColorColorsSpecialCharacters,
ColorColorsSpecialCharactersNderung,
ColorLightBackground,
ColorDarkBackground
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
