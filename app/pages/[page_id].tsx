import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { PaddedScreenShell } from '../../components'
import { ScrollView, Text, XStack, YStack, useTheme } from 'tamagui'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAppSelector } from '../../store'
import { selectCurrentPage, selectDatabasesSearchFeedback } from '../../store/slices/notion'
import { Inbox } from '@tamagui/lucide-icons'
import { DatabaseButton } from '../../triggers'

const CurrentPage = (props: any) => {
    const feedback = useAppSelector(selectDatabasesSearchFeedback)
    const page = useAppSelector(selectCurrentPage)

    const theme = useTheme()
    let title;

    if(page?.properties["title"].type == "title"){
        title = page?.properties["title"].title.at(0)?.plain_text?.replace("mpg::", "")
    }

  return (
    <>
        <Stack.Screen/>
        <SafeAreaView
            style={[styles.container, { backgroundColor: theme.background.val }]}
        >
            <YStack
                w="100%"
                h="100%"
                rowGap={10}
            >
                <Text w="100%" textAlign='left' fontFamily={"$noto"} fontSize={"$lg"} fontWeight={"$semi-bold"}  > 
                    {
                        title
                    }
                </Text>
                <Text>
                    Choose one of the following compatible databases from this page, or create a new one.
                </Text>
                <XStack
                    w="100%" 
                    alignItems='center'
                    justifyContent='flex-start'
                    columnGap={20}
                >
                    <Inbox/>
                    <Text>
                        2 results
                    </Text>
                </XStack>
                <YStack
                    w="100%"
                >
                    <ScrollView
                        w="100%"
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            rowGap: 15
                        }}
                    >
                        {
                            feedback?.data?.map((database, i)=>{
                                return (
                                    <DatabaseButton key={i} {...database} />
                                )
                            })
                        }
                    </ScrollView>
                </YStack>
            </YStack>
        </SafeAreaView>
    </>
  )
}

export default CurrentPage

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})