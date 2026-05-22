// Caption — JAPI Reel Factory
import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { COLORS, FONTS, FONT_SIZES, FONT_WEIGHTS } from '../styles/tokens';

export interface CaptionProps {
      text: string;
      startFrame: number;
      endFrame: number;
      position?: 'top' | 'bottom' | 'center';
      size?: 'sm' | 'md' | 'lg';
      highlight?: boolean;
}

export const Caption: React.FC<CaptionProps> = ({
      text, startFrame, endFrame, position = 'bottom', size = 'md', highlight = false,
}) => {
      const frame = useCurrentFrame();
      const fadeIn = interpolate(frame, [startFrame, startFrame + 8], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
      });
      const fadeOut = interpolate(frame, [endFrame - 8, endFrame], [1, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
      });
      const opacity = Math.min(fadeIn, fadeOut);

      if (frame < startFrame || frame > endFrame) return null;

      const fontSizeMap = { sm: FONT_SIZES.xs, md: FONT_SIZES.sm, lg: FONT_SIZES.md };
      const positionStyle: React.CSSProperties =
              position === 'top'
          ? { top: 80 }
                : position === 'center'
          ? { top: '50%', transform: 'translateY(-50%)' }
                : { bottom: 120 };

      return (
              <div style={{ position: 'absolute', left: 40, right: 40, ...positionStyle, opacity, zIndex: 100, textAlign: 'center' }}>
                        <span style={{
                          display: 'inline-block',
                          backgroundColor: highlight ? COLORS.verdeLima : 'rgba(17,17,17,0.85)',
                          color: highlight ? COLORS.negro : COLORS.blanco,
                          fontFamily: FONTS.body,
                          fontSize: fontSizeMap[size],
                          fontWeight: FONT_WEIGHTS.semibold,
                          lineHeight: 1.4,
                          padding: '12px 24px',
                          borderRadius: 12,
                          letterSpacing: '-0.01em',
              }}>
                            {text}
                        </span>span>
              </div>div>
            );
};
