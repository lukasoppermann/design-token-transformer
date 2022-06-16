
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Thu, 16 Jun 2022 10:25:41 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorColorsSemiRed,
ColorColorsMultipleFills0,
ColorColorsMultipleFills1,
ColorColorsSingleBlue,
ColorColorsRefBlue,
ColorColorsSpecialCharacters,
ColorColorsSpecialCharactersNderung,
ColorInvalidEmpty
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
