import React from 'react';
import { useCurrentFrame, useVideoConfig, interpolate, spring } from 'remotion';
import { COLORS, FONTS, FONT_SIZES, FONT_WEIGHTS, SPACING } from '../styles/tokens';

export interface SceneTitleProps {
    title: string;
    subtitle?: string;
    delay?: number;
    accentColor?: string;
    size?: 'sm' | 'md' | 'lg' | 'hero';
    align?: 'left' | 'center' | 'right';
}

export const SceneTitle: React.FC<SceneTitleProps> = ({
    title, subtitle, delay = 0, accentColor = COLORS.verdeLima,
    size = 'lg', align = 'left',
}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const lf = Math.max(0, frame - delay);

    const p1 = spring({ frame: lf, fps, config: { damping: 20, stiffness: 120, mass: 1.2 } });
    const p2 = spring({ frame: Math.max(0, lf - 10), fps, config: { damping: 20, stiffness: 120, mass: 1.2 } });

    const fontSizeMap = { sm: FONT_SIZES.md, md: FONT_SIZES.lg, lg: FONT_SIZES.xl, hero: FONT_SIZES.xxl };

    return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.xs, textAlign: align }}>
                  <h1 style={{
                    fontFamily: FONTS.heading, fontSize: fontSizeMap[size],
                    fontWeight: FONT_WEIGHTS.black, color: COLORS.textoPrimario,
                    lineHeight: 1.1, letterSpacing: '-0.03em', margin: 0,
                    opacity: interpolate(lf, [0, 12], [0, 1], { extrapolateRight: 'clamp' }),
                    transform: `translateY(${interpolate(p1, [0, 1], [40, 0])}px)`,
          }}>
                    {title}
                  </h1>
            {subtitle && (
                    <p style={{
                                fontFamily: FONTS.body, fontSize: FONT_SIZES.sm,
                                fontWeight: FONT_WEIGHTS.medium, color: COLORS.textoSecundario,
                                lineHeight: 1.5, margin: 0,
                                opacity: interpolate(Math.max(0, lf - 10), [0, 12], [0, 1], { extrapolateRight: 'clamp' }),
                                transform: `translateY(${interpolate(p2, [0, 1], [20, 0])}px)`,
                    }}>
                      {subtitle}
                    </p>
                  )}
                  <div style={{
                    width: 48, height: 5, backgroundColor: accentColor, borderRadius: 99, marginTop: 8,
                    opacity: interpolate(lf, [0, 12], [0, 1], { extrapolateRight: 'clamp' }),
                    alignSelf: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
          }} />
          </div>
        );
};
