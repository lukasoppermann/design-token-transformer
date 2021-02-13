
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Sat, 13 Feb 2021 01:33:19 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
BordersUnsupportedMultipleBordersStroke,
BordersSingleStroke,
BordersSingleStyleStroke,
BordersDashedOutsideStroke,
ColorsMultipleFills0,
ColorsMultipleFills1,
ColorsSingleBlue,
ColorsSpecialCharacters😅,
ColorsSpecialCharactersAnderung,
GradientMultiple0Stops0Color,
GradientMultiple0Stops1Color,
GradientMultiple1Stops0Color,
GradientMultiple1Stops1Color,
GradientMultiple2Stops0Color,
GradientMultiple2Stops1Color,
GradientMultiple3Stops0Color,
GradientMultiple3Stops1Color,
GradientSingleWithMultipleColorStopsStops0Color,
GradientSingleWithMultipleColorStopsStops1Color,
GradientSingleWithMultipleColorStopsStops2Color,
GradientSingleWithMultipleColorStopsStops3Color,
EffectDropShadowSingleColor,
EffectInnerShadowMultiple0Color,
EffectInnerShadowMultiple1Color,
EffectInnerShadowMultiple2Color,
LightThemeBrandPrimary,
LightThemeBrandSecondary,
LightThemeBrandAccent,
LightThemeBrandMuted,
LightThemeUiPrimary,
LightThemeUiSecondary,
LightThemeUiTertiary,
LightThemeUiQuaternary,
LightThemeUiDisabled,
LightThemeUiError,
LightThemeUiSuccess,
LightThemeBackground1,
LightThemeBackground2,
LightThemeTextPrimary,
LightThemeTextSecondary,
LightThemeTextDisabled,
LightThemeTextInverse,
LightThemeTextError,
LightThemeTextSuccess,
DarkThemeBrandPrimary,
DarkThemeBrandSecondary,
DarkThemeBrandAccent,
DarkThemeBrandMuted,
DarkThemeUiPrimary,
DarkThemeUiSecondary,
DarkThemeUiTertiary,
DarkThemeUiQuaternary,
DarkThemeUiDisabled,
DarkThemeUiError,
DarkThemeUiSuccess,
DarkThemeBackground1,
DarkThemeBackground2,
DarkThemeTextPrimary,
DarkThemeTextSecondary,
DarkThemeTextDisabled,
DarkThemeTextInverse,
DarkThemeTextError,
DarkThemeTextSuccess
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
