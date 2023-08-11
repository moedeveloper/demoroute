import ListItem from '@/src/components/ListItem';
import { useLatestPoemsContext } from '@/src/contexts/LatestPoemsContext';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import * as Haptics from 'expo-haptics';


const LatestPoemScreen: React.FC = () => {
  const router = useRouter();
  const {poems} = useLatestPoemsContext();
  
  const renderItemExtractor = React.useCallback((item:any) => item?.id, []);

  const handlePress = (content: Poem) => {
      Haptics.selectionAsync();
      
      router.push(`/topTabs/LatestPoemScreen`);
  } 

  const renderItem = (result: { item: any }) => {
    return (
        <ListItem
            subRow={true}
            ton={result.item?.ton}
            writer={result.item?.writer}
            itemTitle={result.item?.title}
            leftIcon={<AntDesign name="left" size={20} color='#dcdcdc' />}
            extraLeftIcon={<Ionicons name="ios-star-outline" size={20} color={result.item.favorite ? '#000' : '#ccc'} />}
            onPress={() => handlePress(result.item)}
        />
    );
  }
  return ( 
    <SafeAreaView>
      <FlatList 
        data={poems} 
        renderItem={renderItem}
        keyExtractor={renderItemExtractor}
      />
    </SafeAreaView>
  );
}

export default LatestPoemScreen;