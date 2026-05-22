// CTAEndCard — JAPI Reel Factory
import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { COLORS, FONTS, FONT_SIZES, FONT_WEIGHTS, SPACING } from '../styles/tokens';

export interface CTAEndCardProps {
        ctaText: string;
        subText?: string;
        accentLabel?: string;
        delay?: number;
}

export const CTAEndCard: React.FC<CTAEndCardProps> = ({
        ctaText, subText, accentLabel = 'JAPI HUB', delay = 0,
}) => {
        const frame = useCurrentFrame();
        const { fps } = useVideoConfig();
        const lf = Math.max(0, frame - delay);
        const bgP = spring({ frame: lf, fps, config: { damping: 16, stiffness: 80, mass: 1.5 } });
        const txtP = spring({ frame: Math.max(0, lf - 12), fps, config: { damping: 20, stiffness: 140 } });
        const bgOpacity = interpolate(lf, [0, 10], [0, 1], { extrapolateRight: 'clamp' });
        const txtY = interpolate(txtP, [0, 1], [30, 0]);
        const txtOpacity = interpolate(Math.max(0, lf - 12), [0, 12], [0, 1], { extrapolateRight: 'clamp' });

        return (
                  <div style={{
                              position: 'absolute',
                              inset: 0,
                              backgroundColor: COLORS.verdeLima,
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'flex-start',
                              justifyContent: 'center',
                              padding: `0 ${SPACING.lg}px`,
                              opacity: bgOpacity,
                              transform: `scale(${interpolate(bgP, [0, 1], [0.92, 1])})`,
                  }}>
                              <div style={{
                                opacity: txtOpacity,
                                transform: `translateY(${txtY}px)`,
                                marginBottom: SPACING.md,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                  }}>
                                            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.negro }} />
                                            <span style={{
                                  fontFamily: FONTS.body,
                                  fontSize: FONT_SIZES.xs,
                                  fontWeight: FONT_WEIGHTS.bold,
                                  color: COLORS.negro,
                                  letterSpacing: '0.06em',
                                  textTransform: 'uppercase',
                  }}>
                                                  {accentLabel}
                                            </span>span>
                              </div>div>
                              <h2 style={{
                                fontFamily: FONTS.heading,
                                fontSize: FONT_SIZES.xl,
                                fontWeight: FONT_WEIGHTS.black,
                                color: COLORS.negro,
                                lineHeight: 1.1,
                                letterSpacing: '-0.03em',
                                margin: 0,
                                marginBottom: SPACING.md,
                                opacity: txtOpacity,
                                transform: `translateY(${txtY}px)`,
                  }}>
                                    {ctaText}
                              </h2>h2>
                        {subText && (
                                <p style={{
                                                fontFamily: FONTS.body,
                                                fontSize: FONT_SIZES.sm,
                                                fontWeight: FONT_WEIGHTS.medium,
                                                color: 'rgba(17,17,17,0.7)',
                                                lineHeight: 1.5,
                                                margin: 0,
                                                opacity: txtOpacity * 0.85,
                                                transform: `translateY(${txtY}px)`,
                                }}>
                                      {subText}
                                </p>p>
                              )}
                  </div>div>
                );
};
