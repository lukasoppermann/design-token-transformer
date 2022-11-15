
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Tue, 15 Nov 2022 18:35:04 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorPrimaryColorsGreenBackground,
ColorPrimaryColorsGreenAccent,
ColorPrimaryColorsGreen,
ColorPrimaryColorsGreenDark,
ColorSecondaryColorsBlueBackground,
ColorSecondaryColorsBlueAccent,
ColorSecondaryColorsBlue,
ColorSecondaryColorsBlueDark,
ColorSecondaryColorsBlueDarkBackground,
ColorSecondaryColorsBlueTextLink,
ColorTertiaryColorsTealBackground,
ColorTertiaryColorsTealAccent,
ColorTertiaryColorsTeal,
ColorTertiaryColorsTealDark,
ColorTertiaryColorsEggplantBackground,
ColorTertiaryColorsEggplantAccent,
ColorTertiaryColorsEggplantDark,
ColorUtilityColorsRedBackground,
ColorUtilityColorsRed,
ColorUtilityColorsRedDark,
ColorUtilityColorsRedPin,
ColorUtilityColorsYellowBackground,
ColorUtilityColorsYellow,
ColorNeutralColorsGrayBackground,
ColorNeutralColorsGrayLight,
ColorNeutralColorsGrayDisabled,
ColorNeutralColorsGray,
ColorNeutralColorsGrayDark,
ColorNeutralColorsBlack,
ColorNeutralColorsWhite,
ColorBetaSecondaryColorsBlueExtraDarkTextBeta,
ColorBetaSecondaryColorsDeprecatedBlueDarkTextLinkBeta,
ColorColorsSemiRed,
ColorColorsMultipleFills0,
ColorColorsMultipleFills1,
ColorColorsSingleBlue,
ColorColorsRefBlue,
ColorColorsEmpty,
ColorColorsSpecialCharacters,
ColorColorsSpecialCharactersNderung
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
