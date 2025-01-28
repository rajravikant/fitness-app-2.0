import { View } from "react-native";
import React, { memo, ReactNode } from "react";
import { theme } from "@/constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { wp } from "@/utils/common";

const ScreenWrapper = ({
  children,
  bg,
  style,
}: {
  children: ReactNode;
  bg?: string;
  style?: object;
}) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 20;
  return (
    <React.Fragment>
      <StatusBar style="dark" />
      <View
        style={[
          style,
          {
            paddingTop,
            flex: 1,
            paddingHorizontal: wp(5),
            width: wp(100),
            backgroundColor: bg ? bg : theme.colors.light,
          },
        ]}
      >
        {children}
      </View>
    </React.Fragment>
  );
};

export default memo(ScreenWrapper);
