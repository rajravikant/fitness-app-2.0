import { theme } from "@/constants/theme";
import { View } from "react-native";


interface Props {
  data: number[];
}

const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i,
  highTmp: 40 + 30 * Math.random(),
}));

const Chart = ({data}:Props) => {
  const fill = theme.colors.primary;
 
  return (
    <View style={{ height: 300 }}>
  
  </View>
  );
};

export default Chart;

// interface LineChartProps extends AreaChartProps<any> {
//   data: number[];
// }

// export const AreaChartCustom = (props: LineChartProps) => {
//   const fill = "rgba(134, 65, 244,0.08)";
//   return (
//     <AreaChart
//       style={{ height: 100, flex: 1 }}
//       data={props.data}
//       contentInset={{ top: 10, bottom: 10 }}
//       curve={shape.curveNatural}
//       animate={true}
//       animationDuration={300}
//       svg={{ fill, stroke: theme.colors.primary }}
//     ></AreaChart>
//   );
// };
// export const LineChartCustom = ({data}: LineChartProps) => {
//   const fill = "rgba(134, 65, 244,0.08)";
//   return (
//     <View style={{ height: 200}}>
//       <View style={{ flexDirection: "row" ,flex:1 }} >
//       <YAxis
//         data={data}
//         contentInset={{ top: 10, bottom: 10 }}
//         svg={{
//           fill: "grey",
//           fontSize: 10,
//         }}
//         numberOfTicks={6}
//         formatLabel={(value) => `${value} h`}
//       />
       
//       <LineChart
//         style={{ flex: 1 ,marginLeft:10 }}
//         data={data}
//         contentInset={{ top: 10, bottom: 10 }}
//         curve={shape.curveNatural}
//         animate={true}
//         animationDuration={300}
//         svg={{ fill, stroke: theme.colors.primary }}
//       ></LineChart>

       

//       </View>
//       <XAxis
//         data={data}
//         style={{marginTop:10}}
//         contentInset={{ left: 10, right: 10 }}
//         svg={{
//           fill: "grey",
//           fontSize: 10,
//         }}
//         numberOfTicks={6}
//         formatLabel={(value) => `${Weeks[value]}`}
//         />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});


// const Weeks = [
//   "Mon",
//   "Tue",
//   "Wed",
//   "Thu",
//   "Fri",
//   "Sat",
//   "Sun",
// ];

