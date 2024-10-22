import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint, useVector } from "react-native-redash";
import { SharedElement } from "react-navigation-shared-element";
import { AwarnessItem } from "../../utils/data/awarness";
import { InfoArticle, Loading, PodcastBlock } from "../../components";
import { useGetAwarenessInfoQuery } from "../../generated/graphql";

const { width, height } = Dimensions.get("window");

export const Info: React.FC<any> = ({ navigation, route }) => {
  const { id } = route.params;
  /*const { data, loading, error } = useGetAwarenessInfoQuery({
    variables: {
      id: id,
    },
    onCompleted: (res) => {
      console.log("res : ", res);
    },
  });*/
  const isGestureActive = useSharedValue<boolean>(false);
  const translation = useVector();

  //if (loading || error) return <Loading />;

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: () => (isGestureActive.value = true),
    onActive: ({ translationX, translationY }) => {
      translation.y.value = translationY;
      translation.x.value = translationX;
    },
    onEnd: ({ translationY, velocityY }) => {
      const snapBack =
        snapPoint(translationY, velocityY, [0, height]) === height;
      if (snapBack) {
        runOnJS(navigation.goBack)();
      } else {
        isGestureActive.value = false;
        translation.x.value = withSpring(0);
        translation.y.value = withSpring(0);
      }
    },
  });

  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      translation.y.value,
      [0, height],
      [1, 0.5],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { translateX: translation.x.value * scale },
        { translateY: translation.y.value * scale },
        { scale: 1 },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View
        style={[style, { borderRadius: 40, flex: 1, backgroundColor: "black" }]}
      >
        <View style={styles.container}>
          <View
            style={{
              height: 5,
              width: "50%",
              backgroundColor: "white",
              borderRadius: 10,
              marginBottom: 20,
              alignSelf: "center",
            }}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.imageContainer}>
              <SharedElement id={`${id}-topic-image`}>
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeamuOP7_NnbUivOrc4oV7Vw2sLMvRgM_Ybw&s",
                  }}
                  style={styles.image}
                  resizeMode="contain"
                />
              </SharedElement>
            </View>
            <SharedElement id={`${id}-topic-title`}>
              <Text style={styles.title}>Anxiety</Text>
            </SharedElement>
            <Text style={styles.description}>
              Anxiety is an emotion which is characterised by an unpleasant
              state of inner turmoil and includes feelings of dread over
              anticipated events. Anxiety is different from fear in that fear is
              defined as the emotional response to a present threat, whereas
              anxiety is the anticipation of a future one.
            </Text>

            <View>
              <PodcastBlock />
              <PodcastBlock />
              <PodcastBlock />
            </View>
            <View style={{ height: 200 }} />
            {/*<InfoArticle content={data?.getAwarenessInfo.content!} />*/}
          </ScrollView>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    height: width - 40,
    width: width - 40,
    borderRadius: 30,
  },
  title: {
    color: "white",
    fontFamily: "cooper",
    fontSize: 30,
    marginTop: 30,
    //marginLeft: 35,
  },
  image: {
    width: width * 0.8,
    height: 400,
    margin: "auto",
  },
  imageContainer: {
    alignItems: "center",
  },
  description: {
    color: "white",
    fontSize: 16,
    marginTop: 15,
  },
});
