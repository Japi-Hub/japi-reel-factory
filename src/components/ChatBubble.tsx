import React from 'react';
import { useCurrentFrame, useVideoConfig, interpolate, spring } from 'remotion';
  import { COLORS, FONTS, FONT_SIZES, FONT_WEIGHTS, RADIUS, SPACING } from '../styles/tokens';

export type BubbleType = 'enviado' | 'recibido';

export interface ChatBubbleProps {
    text: string;
  type: BubbleType;
  delay?: number;
  senderLabel?: string;
  highlight?: boolean;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  text, type, delay = 0, senderLabel, highlight = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = Math.max(0, frame - delay);
  const progress = spring({ frame: localFrame, fps, config: { damping: 18, stiffness: 180, mass: 0.8 } });
  const opacity = interpolate(localFrame, [0, 10], [0, 1], { extrapolateRight: 'clamp' });
  const translateY = interpolate(progress, [0, 1], [24, 0]);
  const isEnviado = type === 'enviado';

  return (
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: isEnviado ? 'flex-end' : 'flex-start',
          marginBottom: SPACING.xs, opacity,
          transform: `translateY(${translateY}px)`,
    }}>
    {senderLabel && (
            <span style={{ fontSize: FONT_SIZES.xs, color: COLORS.textoSutil, fontFamily: FONTS.body, marginBottom: 6 }}>
    {senderLabel}
        </span>
          )}
          <div style={{
            backgroundColor: highlight ? COLORS.verdeLima : isEnviado ? COLORS.waBubbleEnviado : COLORS.waBubbleRecibido,
            color: highlight ? COLORS.negro : isEnviado ? COLORS.waTextEnviado : COLORS.waTextRecibido,
            borderRadius: RADIUS.md,
            borderBottomRightRadius: isEnviado ? 4 : RADIUS.md,
            borderBottomLeftRadius: isEnviado ? RADIUS.md : 4,
            padding: `${SPACING.xs}px ${SPACING.sm}px`,
            maxWidth: '78%', fontSize: FONT_SIZES.sm, fontFamily: FONTS.body,
            fontWeight: FONT_WEIGHTS.medium, lineHeight: 1.5,
            boxShadow: highlight ? '0 4px 20px rgba(206,241,59,0.4)' : '0 2px 8px rgba(0,0,0,0.08)',
    }}>
    {text}
          </div>
        </div>
      );
};
