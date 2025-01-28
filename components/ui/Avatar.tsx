import { StyleSheet,Image} from "react-native";
import React, { memo } from "react";
import { hp } from "@/utils/common";
import { theme } from "@/constants/theme";
// import { Image } from "expo-image";


interface AvatarProps {
  uri: string;
  size: number;
  rounded?: number;
  style?: object
}

const Avatar = ({
  uri,
  style,
  size = hp(3),
  rounded = theme.borderRadius.full,
}: AvatarProps) => {


  return (
    <Image
      source={{ uri}}
      style={[
        styles.avatar,
        { height: size, width: size, borderRadius: rounded },
        style,
      ]}
    />
  );
};

export default memo(Avatar);

const styles = StyleSheet.create({
  avatar: {
    height: hp(3),
    width: hp(3),
    borderRadius: theme.borderRadius.full,
    borderCurve:'continuous',
  },
});
