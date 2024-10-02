import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../constants';
import CategoryCard from '../components/CategoryCard';
import TrendingCard from '../components/TrendingCard';

const Home = ({navigation}) => {
  function renderHeader() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          margin: SIZES.padding,
          alignItems: 'center',
        }}>
        <Text style={{color: COLORS.darkGreen, ...FONTS.h2}}>Hello</Text>
        <Text style={{marginTop: 3, color: COLORS.gray, ...FONTS.body3}}>
          What you want to cook today?
        </Text>
      </View>
    );
  }

  function renderSearchBar() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}>
        <Image
          source={icons.search}
          style={{width: 20, height: 20, tintColor: COLORS.gray}}
        />

        <TextInput
          style={{marginLeft: SIZES.radius, ...FONTS.body3}}
          placeholderTextColor={COLORS.gray}
          placeholder="Search Recipes"
        />
      </View>
    );
  }

  function renderSeeRecipeCard() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
        }}>
        <View
          style={{width: 100, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={images.recipe} style={{width: 80, height: 80}} />
        </View>

        <View style={{flex: 1, paddingVertical: SIZES.radius}}>
          <Text style={{width: '70%', ...FONTS.body4}}>
            You have 7 recipes that you haven't tried yet
          </Text>
          <TouchableOpacity style={{marginTop: 10}}>
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: 'underline',
                ...FONTS.h4,
              }}>
              See recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTrendingSection() {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text style={{marginHorizontal: SIZES.padding, ...FONTS.h2}}>
          Trending Recipe
        </Text>

        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <TrendingCard
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : 0,
                }}
                recipeItem={item}
                onPress={() => navigation.navigate('Recipe', {recipe: item})}
              />
            );
          }}
        />
      </View>
    );
  }

  function renderCategoryHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginHorizontal: SIZES.padding,
        }}>
        <Text style={{flex: 1, ...FONTS.h2}}>Categories</Text>
        <TouchableOpacity>
          <Text style={{color: COLORS.gray, ...FONTS.body4}}>View All</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => item.id}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}
            {/* Search Bar */}
            {renderSearchBar()}
            {/* See recipe card */}
            {renderSeeRecipeCard()}
            {/* Trending Section */}
            {renderTrendingSection()}
            {/* Catgeory Header */}
            {renderCategoryHeader()}
          </View>
        }
        renderItem={({item}) => {
          return (
            <CategoryCard
              containerStyle={{marginHorizontal: SIZES.padding}}
              categoryItem={item}
              onPress={() => navigation.navigate('Recipe', {recipe: item})}
            />
          );
        }}
        ListFooterComponent={<View style={{marginBottom: 100}}></View>}
      />
    </SafeAreaView>
  );
};

export default Home;
