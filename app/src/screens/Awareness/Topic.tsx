import { StyleSheet, Text, View, Dimensions } from "react-native";
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
import { InfoArticle, Loading } from "../../components";
import { useGetAwarenessInfoQuery } from "../../generated/graphql";
import { snapPoint, useVector } from "react-native-redash";

const { width, height } = Dimensions.get("window");

export const Topic: React.FC<any> = ({ navigation, route }) => {
  const { id } = route.params;
  const { data, loading, error } = useGetAwarenessInfoQuery({
    variables: {
      id: id,
    },
    onCompleted: (res) => {
      console.log("res : ", res);
    },
  });
  const isGestureActive = useSharedValue<boolean>(false);
  const translation = useVector();

  if (loading || error) return <Loading />;
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
        { scale: scale },
      ],
    };
  });
  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View
        style={[style, { borderRadius: 40, flex: 1, backgroundColor: "black" }]}
      >
        <View style={styles.container}></View>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
