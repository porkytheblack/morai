import {createFont, createTamagui} from "tamagui";
import {tokens} from "@tamagui/themes";
import {type Variable} from "@tamagui/core"
import {shorthands} from "@tamagui/shorthands";
import {dark, light} from "./constants/Colors";


const notoSans = createFont({
    family: 'NotoSans-Regular',
    size: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 21,
        xl: 24,
        '2xl': 27,
        '3xl': 36
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


const appConfig = createTamagui({
    themes: {
        light,
        dark
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
        noto: notoSans
    }
})

export type AppConfig = typeof  appConfig;

declare module '@tamagui/core' {
    interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig