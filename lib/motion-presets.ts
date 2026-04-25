export type MotionPreset = "elegant" | "bold" | "cinematic" | "turbo";

export const ACTIVE_MOTION_PRESET: MotionPreset = "turbo";

export const motionPresetConfig: Record<
  MotionPreset,
  {
    revealDuration: number;
    revealY: number;
    cardHoverY: number;
    cardHoverScale: number;
    sceneFadeDuration: number;
    floatAmplitude: number;
  }
> = {
  elegant: {
    revealDuration: 0.48,
    revealY: 18,
    cardHoverY: -2,
    cardHoverScale: 1.005,
    sceneFadeDuration: 0.22,
    floatAmplitude: 4
  },
  bold: {
    revealDuration: 0.62,
    revealY: 30,
    cardHoverY: -6,
    cardHoverScale: 1.015,
    sceneFadeDuration: 0.3,
    floatAmplitude: 7
  },
  cinematic: {
    revealDuration: 0.72,
    revealY: 36,
    cardHoverY: -8,
    cardHoverScale: 1.02,
    sceneFadeDuration: 0.34,
    floatAmplitude: 10
  },
  turbo: {
    revealDuration: 0.78,
    revealY: 42,
    cardHoverY: -10,
    cardHoverScale: 1.03,
    sceneFadeDuration: 0.38,
    floatAmplitude: 14
  }
};
