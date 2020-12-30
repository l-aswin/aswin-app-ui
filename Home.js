import React from "react";
import { View, Text, Button, Image, Dimensions, ScrollView } from "react-native";
import styles from "./styles";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import CarouselCards from './CarouselCards'


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
 <View style={styles.profilebox}>
 <Text style={styles.boxText}>Hello User</Text>
 <Image source={require('./assets/user.png')}/>
 </View>
 <Text style={styles.infoText}>Your Progress</Text>
 <ProgressChart
  data={data}
  width={screenWidth}
  height={180}
  strokeWidth={16}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false}
 />
  <Text style={styles.infoText}>Courses offered</Text>
  <ScrollView >
  <CarouselCards />
  </ScrollView>
 </View>
  
  );
}

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D", //F8F8F8 08130D
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

// each value represents a goal ring in Progress chart
const data = {
  labels: ["Course 1", "Course 2", "Course 3"], // optional
  data: [0.4, 0.6, 0.8]
};
