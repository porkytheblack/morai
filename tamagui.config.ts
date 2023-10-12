import {createFont, createTamagui} from "tamagui";
import {tokens, themes} from "@tamagui/themes";
import {type Variable} from "@tamagui/core"
import {shorthands} from "@tamagui/shorthands";
import {dark, light} from "./constants/Colors";
import {createTheme} from "@tamagui/create-theme";
import { createAnimations } from "@tamagui/animations-react-native";



const notoSans = createFont({
    family: 'NotoSans-Regular',
    size: {
        xxs: 12,
        xs: 14,
        sm: 16,
        md: 18,
        lg: 21,
        xl: 24,
        '2xl': 27,
        '3xl': 36,
        true: 18
    },
    weight: {
        'light': 300,
        'regular': 400,
        'medium': 500,
        'semi-bold': 600,
        'bold': 700,
        'black': 900
    },
    face: {
        300: {
            normal: 'NotoSans-Light',
            italic: 'NotoSans-LightItalic'
        },
        400: {
            normal: 'NotoSans-Regular',
            italic: 'NotoSans-Italic'
        },
        500: {
            normal: 'NotoSans-Medium',
            italic: 'NotoSans-MediumItalic'
        },
        600: {
            normal: 'NotoSans-SemiBold',
            italic: 'NotoSans-SemiBoldItalic'
        },
        700: {
            normal: 'NotoSans-Bold',
            italic: 'NotoSans-BoldItalic'
        },
        900: {
            normal: 'NotoSans-Black',
            italic: 'NotoSans-BlackItalic'
        }
    }
})


function postfixObjKeys<
    A extends { [key: string]: Variable<string> | string },
    B extends string
>(
    obj: A,
    postfix: B
): {
    [Key in `${keyof A extends string ? keyof A : never}${B}`]: Variable<string> | string
} {
    return Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [`${k}${postfix}`, v])
    ) as any
}

const { light_blue: {
    background,
    backgroundHover,
    backgroundTransparent,
    backgroundStrong,
    backgroundFocus,
    backgroundPress,
    borderColor,
    borderColorFocus,
    borderColorHover,
    borderColorPress,
    colorFocus,
    colorHover,
    colorPress,
    shadowColor,
    shadowColorPress,
    color,
    shadowColorHover,
    shadowColorFocus,
    placeholderColor,


} } = themes

const appConfig = createTamagui({
    themes: {
        light: {
            ...light,
            background: light.primary100,
            color: light.primary900,
            backgroundPress: light.primary200,
            colorPress: light.primary100,
            colorFocus: light.primary300,
            borderColor: light.primary100,
            borderColorFocus: light.primary200,
            placeholderColor: light.primary700
        },
        dark: {
            ...dark,
            background: dark.primary100,
            color: dark.primary900,
            backgroundPress: dark.primary200,
            colorPress: dark.primary100,
            colorFocus: dark.primary300,
            borderColor: dark.primary100,
            borderColorFocus: dark.primary200,
            placeholderColor: dark.primary700
        },
    },
    tokens: {
        ...tokens,
        color: {
            ...tokens.color,
            ...postfixObjKeys(light, "Light"),
            ...postfixObjKeys(dark, "Dark")
        }
    },
    shorthands,
    fonts: {
        noto: notoSans,
        heading: notoSans,
        body: notoSans
    },
    animations: createAnimations({
        fast: {
          type: 'spring',
          damping: 20,
          mass: 1.2,
          stiffness: 250,
        },
        medium: {
          type: 'spring',
          damping: 10,
          mass: 0.9,
          stiffness: 100,
        },
        slow: {
          type: 'spring',
          damping: 20,
          stiffness: 60,
        },
      }),
})

export type AppConfig = typeof  appConfig;

declare module '@tamagui/core' {
    interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig