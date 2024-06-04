import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { SvgXml } from "react-native-svg";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

type SlideModalProps = {
  children: React.ReactNode;
};

export const SlideModal = React.forwardRef<ActionSheetRef, SlideModalProps>(
  ({ children }, ref) => {
    const insets = useSafeAreaInsets();

    return (
      <ActionSheet
        ref={ref}
        gestureEnabled
        safeAreaInsets={insets}
        containerStyle={styles.container}
        CustomHeaderComponent={<GestureTrigger />}
      >
        <View style={[styles.contentWrapper, { marginBottom: -insets.bottom }]}>
          {children}
        </View>
      </ActionSheet>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  contentWrapper: {
    backgroundColor: "white",
    paddingHorizontal: 40,
    paddingTop: 10,
    paddingBottom: 20,
  },
  gestureTrigger: {
    width: "100%",
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

const GestureTrigger = () => (
  <View style={styles.gestureTrigger}>
    <SvgXml xml={xml(SCREEN_WIDTH)} />
  </View>
);

const xml = (width: number = 365) => `
<svg width="${width}" height="76" viewBox="0 0 850 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_18_17)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M398 15.3837C398 7.99208 403.991 2 411.383 2C416.067 2 421.056 2 424.674 2C428.401 2 433.692 2 438.626 2C446.013 2 452 7.98808 452 15.3748V15.3748C452 15.6056 451.852 15.8105 451.633 15.8828L448.208 17.0128C432.517 22.1899 415.549 21.9972 399.98 16.4651L398.356 15.8881C398.143 15.8123 398 15.6102 398 15.3837V15.3837Z" fill="white"/>
</g>
<rect x="412" y="7.72052" width="26" height="5.72051" rx="1.5" fill="#E8E6EA"/>
<path d="M0 76C0 35.1309 33.0505 2 73.9196 2C161.192 2 300.984 2 352.5 2C383.5 2 382 30 425 30C468 30 465.5 2 495 2C547.222 2 688.309 2 776.084 2C816.953 2 850 35.1309 850 76V76H0V76Z" fill="white"/>
<defs>
<filter id="filter0_d_18_17" x="384" y="0" width="82" height="46.7597" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="12"/>
<feGaussianBlur stdDeviation="7"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_17"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_17" result="shape"/>
</filter>
</defs>
</svg>
`;

export default SlideModal;

export type SlideModalRefType = ActionSheetRef;
