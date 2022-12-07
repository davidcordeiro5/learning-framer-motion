import {
  AnimationControls,
  TargetAndTransition,
  VariantLabels,
  Transition,
  Variants,
} from "framer-motion";

declare global {
  type IMotionInitial =
    | boolean
    | MakeCustomValueType<TargetProperties>
    | VariantLabels
    | undefined;

  type IMotionAnimate =
    | boolean
    | VariantLabels
    | AnimationControls
    | TargetAndTransition
    | undefined;

  type IMotionWhileHover = VariantLabels | TargetAndTransition | undefined;

  type IMotionVariants = Variants | undefined;

  type IMotionTransition = Transition | undefined;
}

export {};
