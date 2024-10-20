import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { AwarenessCard, Loading } from "../../components";
import { _data } from "../../utils/data/awarness";
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import { useGetAwarenessesQuery } from "../../generated/graphql";

const { width } = Dimensions.get("window");
const SNAP = width - width * 0.1;
export const AwarenessList: React.FC<any> = ({ navigation }) => {
  const { error, loading, data } = useGetAwarenessesQuery();
  const [currentCard, setCurrentCard] = React.useState<number>(0);
  const scrollHanlder = useAnimatedScrollHandler({
    onScroll: (e) => {
      runOnJS(setCurrentCard)(Math.round(e.contentOffset.x / SNAP));
      console.log(
        "curr >> ",
        SNAP,
        e.contentOffset.x,
        Math.round(e.contentOffset.x / SNAP)
      );
    },
  });

  if (loading || error) return <Loading />;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          <Ionicons name={"arrow-down-outline"} size={38} />
          Awareness
        </Text>
        <Animated.ScrollView
          onScroll={scrollHanlder}
          scrollEventThrottle={16}
          snapToInterval={width - width * 0.1}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          {data?.getAwarenesses.map((elm, key) => (
            <AwarenessCard
              id={elm.id}
              current={currentCard === key}
              navigation={navigation}
              clicked={() => navigation.navigate("Info", { id: elm.id })}
              key={key}
              title={elm.title}
              gradient={[elm.gradient_top, elm.gradient_bottom]}
              image={elm.image || ""}
            />
          ))}
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
  },
  heading: {
    color: "white",
    fontFamily: "cooper",
    fontSize: 40,
    textAlign: "center",
  },
});
