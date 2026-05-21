import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { COLORS, FONTS, FONT_SIZES, FONT_WEIGHTS, RADIUS } from '../styles/tokens';

export interface JapiBadgeProps {
    variant?: 'logo' | 'tag' | 'watermark';
    delay?: number;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const JapiBadge: React.FC<JapiBadgeProps> = ({
    variant = 'tag', delay = 0, position = 'top-right',
}) => {
    const frame = useCurrentFrame();
    const lf = Math.max(0, frame - delay);
    const opacity = interpolate(lf, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

    const pos: React.CSSProperties = ({
          'top-left': { top: 60, left: 48 },
          'top-right': { top: 60, right: 48 },
          'bottom-left': { bottom: 60, left: 48 },
          'bottom-right': { bottom: 60, right: 48 },
    } as Record<string, React.CSSProperties>)[position];

    if (variant === 'watermark') {
          return (
                  <div style={{ position: 'absolute', ...pos, opacity: opacity * 0.5,
                                       fontSize: FONT_SIZES.xs, fontFamily: FONTS.body, fontWeight: FONT_WEIGHTS.semibold,
                                       color: COLORS.textoSutil, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            @japihub
                  </div>div>
                );
    }

    if (variant === 'tag') {
          return (
                  <div style={{ position: 'absolute', ...pos, opacity, display: 'flex', alignItems: 'center',
                                       gap: 8, backgroundColor: COLORS.negro, color: COLORS.blanco, fontFamily: FONTS.body,
                                       fontSize: FONT_SIZES.xs, fontWeight: FONT_WEIGHTS.bold,
                                       padding: '10px 18px', borderRadius: RADIUS.pill, letterSpacing: '-0.01em' }}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%',
                                                    backgroundColor: COLORS.verdeLima, display: 'inline-block' }} />
                            JAPI HUB
                  </div>div>
                );
    }

    return (
          <div style={{ position: 'absolute', ...pos, opacity, fontFamily: FONTS.heading,
                             fontSize: FONT_SIZES.md, fontWeight: FONT_WEIGHTS.black, color: COLORS.negro,
                             letterSpacing: '-0.04em' }}>
                  JAPI<span style={{ color: COLORS.morado }}>.</span>span>
          </div>div>
        );
};
