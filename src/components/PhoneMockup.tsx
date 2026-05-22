import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { COLORS, RADIUS } from '../styles/tokens';
export interface PhoneMockupProps {
    children?: React.ReactNode;
    delay?: number;
    scale?: number;
}

// Mockup de telefono vertical para mostrar interfaces dentro del reel
export const PhoneMockup: React.FC<PhoneMockupProps> = ({
    children, delay = 0, scale = 1,
}) => {
    const frame = useCurrentFrame();
    const lf = Math.max(0, frame - delay);
    const opacity = interpolate(lf, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

    return (
          <div style={{
                  opacity,
                  transform: `scale(${scale})`,
                  width: 320,
                  height: 640,
                  backgroundColor: COLORS.negro,
                  borderRadius: 44,
                  border: `8px solid ${COLORS.negro}`,
                  overflow: 'hidden',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
                  position: 'relative',
          }}>
            {/* Notch */}
                  <div style={{
                    position: 'absolute', top: 12, left: '50%',
                    transform: 'translateX(-50%)', width: 80, height: 10,
                    backgroundColor: COLORS.negro, borderRadius: 8, zIndex: 10,
          }} />
            {/* Screen content */}
                  <div style={{
                    width: '100%', height: '100%',
                    backgroundColor: COLORS.fondo,
                    overflow: 'hidden',
          }}>
                    {children}
                  </div>
          </div>
        );
};

// TODO: Expandir con status bar, home indicator, notch dinamico
