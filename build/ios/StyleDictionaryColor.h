
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Tue, 28 Jun 2022 19:03:57 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorBrandPrimary,
ColorBrandPrimaryLessDark,
ColorBrandPrimaryDarkOverlay0,
ColorBrandPrimaryDarkOverlay1,
ColorBrandPrimaryDisabled0,
ColorBrandPrimaryDisabled1,
ColorClassesHealth,
ColorClassesMindset,
ColorClassesFinance,
ColorGreyscaleBlack,
ColorGreyscaleNavBg232323Nero,
ColorGreyscaleDisabled7e7e7eGrey,
ColorGreyscaleQuickSilverFred,
ColorGreyscaleSilverGrayBdbdbd,
ColorGreyscaleWhipserGrayEcecec,
ColorGreyscaleWhiteFfffff,
ColorAlertsFocusInfo31ccec,
ColorAlertsFocusAccessibility2598d5,
ColorAlertsFocusSuccess21ba45,
ColorAlertsFocusWarningF2c037,
ColorAlertsFocusErrorD0021b,
ColorStylizedBlackOverlay30,
ColorLibraryMiscComponentFrames
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
