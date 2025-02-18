import { View, Text } from "react-native";
import React, { forwardRef, useCallback } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

type SpyBottomSheetModalProps = {
  title?: string;
  children: React.ReactNode;
  className?: string 
};

const SpyBottomSheetModal = forwardRef<BottomSheetModal, SpyBottomSheetModalProps>(
  (props, ref) => {
    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        ref={ref}
        backdropComponent={renderBackdrop}
        handleStyle={{
          backgroundColor: "#F4F5F5",
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        }}
      >
        <BottomSheetView
          style={{
            padding: 12,
            paddingTop: 0,
            paddingBottom: 36,
            backgroundColor: "#F4F5F5",
          }}
          className={props.className}
        >
          {props.title && <Text className="">{props.title}</Text>}
          {props.children}
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

export default SpyBottomSheetModal;
