import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { ScrollView, XStack, YStack } from 'tamagui'
import { IconButton, Input, PaddedScreenShell } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Inbox, Search as SearchIcon } from '@tamagui/lucide-icons'
import { PageButton } from '../../triggers'
import Notion from '../../libs/notion'
import { useAppDispatch, useAppSelector } from '../../store'
import { searchPages, selectPagesSearchFeedback } from '../../store/slices/notion'

const Search = () => {
    const dispatch = useAppDispatch()
    const feedback = useAppSelector(selectPagesSearchFeedback)
    

    const [search, setSearch] = useState("")

    const handleSearch = async () =>{
        
        // TODO: handleSearch
        dispatch(searchPages(search))
    }
    
  return (
    <>
        <Stack.Screen
            options={{
                headerShown: false
            }}
        />
            <SafeAreaView
                style={styles.safeareaContainer}
            >
                <YStack
                    rowGap={20} 
                    w="100%"
                >
                    <XStack
                        w="100%"
                        alignItems='center'
                        justifyContent="space-between"
                        columnGap={20}
                    >
                        <Input
                            placeholder='Search for page'
                            w="80%"
                            onChangeText={setSearch}
                        />
                        <IconButton
                            onPress={handleSearch}
                        >
                            <SearchIcon
                                size={18}
                            />
                        </IconButton>
                    </XStack>
                    <YStack
                        w="100%"
                        rowGap={20}
                    >
                        <Text>
                            Search for any page in your notion workspace, that the app has access to.
                        </Text>

                        <XStack
                            w="100%"
                            alignItems="center"
                            columnGap={20}
                        >
                            <Inbox/>
                            <Text>
                                2 search results
                            </Text>
                        </XStack>
                    </YStack>

                </YStack>
                <ScrollView
                    w="100%"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        rowGap: 10,
                        paddingVertical: 20
                    }}
                >
                    {
                        feedback?.data
                        ?.filter((page)=>{
                            if(page.properties["title"])
                            return true;
                        })
                        ?.map((page, i)=>{
                            
                            return (
                                <PageButton
                                    key={i}
                                    {
                                        ...page
                                    }
                                />
                            )
                        })
                    }
                </ScrollView>
            </SafeAreaView>
    </>
  )
}

export default Search

const styles = StyleSheet.create({
    safeareaContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100%",
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})