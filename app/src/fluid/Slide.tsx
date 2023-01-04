import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Svg, {Path} from 'react-native-svg';

import { cartesian2Canvas, Vector, serialize, createPath, addCurve} from 'react-native-redash';
import Animated, { Extrapolate, interpolate, SharedValue, useAnimatedProps, interpolateColor } from 'react-native-reanimated';

const { width } = Dimensions.get('window')
const RATIO = .9;
const SIZE = width * RATIO 
const C = 0.55228474983079
const CENTER = {x: 1, y: 1}

const vex = (x: number, y: number) => cartesian2Canvas({x, y}, CENTER)
const addX = (v: Vector, x: number) => {
	"worklet";
	return { x: v.x + x, y: v.y}
}

const P00 = vex(0, 1);
const P01 = vex(C, 1);
const P02 = vex(1, C);
const P03 = vex(1, 0);

//const P10 = vec(1, 0);
const P11 = vex(1, -C);
const P12 = vex(C, -1);
const P13 = vex(0, -1);

// const P20 = vec(0, -1);
const P21 = vex(-C, -1);
const P22 = vex(-1, -C);
const P23 = vex(-1, 0);

// const P30 = vec(-1, 0);
const P31 = vex(-1, C);
const P32 = vex(-C, 1);
const P33 = vex(0, 1);

const AnimatedPath = Animated.createAnimatedComponent(Path)

interface Props {
	x: SharedValue<number>,
	index: number;
	colors: [string, string, string],
}

export const Slide : React.FC<Props> = ({x, colors, index}) => {

	const animatedProps = useAnimatedProps(() => {
		const progress = (x.value - width * index) / width;
		const offset = interpolate(progress, [0, 1], [0, -2], Extrapolate.CLAMP);
		const path = createPath({x: P00.x + offset, y: P00.y})
		addCurve(path, {
			c1: addX(P01, offset),
			c2: P02,
			to: P03
		})
		addCurve(path, {
		  c1: P11,
		  c2: addX(P12, offset),
		  to: addX(P13, offset),
		});
		addCurve(path, {
		  c1: addX(P21, offset),
		  c2: {
			x:
			  interpolate(
				progress,
				[(-1 * RATIO) / 2, 0],
				[1, 0],
				Extrapolate.CLAMP
			  ) + offset,
			y: P22.y,
		  },
		  to: {
			x:
			  interpolate(
				progress,
				[(-1 * RATIO) / 2, 0],
				[1, 0],
				Extrapolate.CLAMP
			  ) + offset,
			y: P23.y,
		  },
		});
		addCurve(path, {
		  c1: {
			x:
			  interpolate(
				progress,
				[(-1 * RATIO) / 2, 0],
				[1, 0],
				Extrapolate.CLAMP
			  ) + offset,
			y: P31.y,
		  },
		  c2: addX(P32, offset),
		  to: addX(P33, offset),
		});
		return {
		  d: serialize(path),
		  fill: interpolateColor(progress, [-1, 0, 1], colors),
		};
	})

	return (
		<View>
			<Svg width={SIZE} height={SIZE} viewBox="0 0 2 2">
				<AnimatedPath fill='#D5E4FF' animatedProps={animatedProps} />
			</Svg>
			<View style={{
				...StyleSheet.absoluteFillObject,
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<Text>TEST</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({

})
