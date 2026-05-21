import React from 'react';
import { AbsoluteFill, Sequence, useCurrentFrame } from 'remotion';
  import { SceneTitle } from '../components/SceneTitle';
  import { ChatBubble } from '../components/ChatBubble';
  import { Caption } from '../components/Caption';
  import { JapiBadge } from '../components/JapiBadge';
  import { CTAEndCard } from '../components/CTAEndCard';
  import { COLORS } from '../styles/tokens';

  interface ElRobotData {
    id: string;
  title: string;
  fps: number;
  durationInFrames: number;
  scenes: Array<{
        id: string;
        type: string;
        startFrame: number;
        durationInFrames: number;
        background: string;
        content: Record<string, unknown>;
        badge?: Record<string, unknown>;
        caption?: { text: string; position?: string; size?: string };
        label_overlay?: { text: string; style: string };
}>;
}

export const ElRobot: React.FC<{ data: ElRobotData }> = ({ data }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.fondo, fontFamily: 'Inter, system-ui, sans-serif' }}>
{data.scenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          <SceneWrapper scene={scene} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

const SceneWrapper: React.FC<{ scene: ElRobotData['scenes'][0] }> = ({ scene }) => {
  const content = scene.content as Record<string, unknown>;
  const badge = scene.badge as Record<string, string> | undefined;
  const caption = scene.caption;
  const labelOverlay = scene.label_overlay;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: scene.background,
        padding: '120px 64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
}}
    >
{/* Scene: title type */}
{scene.type === 'scene-title' && (
        <SceneTitle
          title={content.title as string}
          subtitle={content.subtitle as string | undefined}
          size={(content.size as 'sm' | 'md' | 'lg' | 'hero') || 'lg'}
          align={(content.align as 'left' | 'center' | 'right') || 'left'}
          delay={0}
        />
      )}

{/* Scene: chat type */}
{scene.type === 'chat' && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          padding: '40px 0',
}}>
{content.context && (
            <p style={{
              fontSize: 24,
              color: '#888888',
              fontWeight: 500,
              marginBottom: 32,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
}}>
{content.context as string}
            </p>
          )}
{(content.bubbles as Array<{
            text: string;
            type: 'enviado' | 'recibido';
            delay: number;
            highlight?: boolean;
}>).map((bubble, i) => (
            <ChatBubble
              key={i}
              text={bubble.text}
              type={bubble.type}
              delay={bubble.delay}
              highlight={bubble.highlight}
            />
          ))}
{labelOverlay && (
            <div style={{
              marginTop: 32,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              backgroundColor: labelOverlay.style === 'error' ? '#FF782C' : '#CEF13B',
              color: '#111111',
              padding: '10px 20px',
              borderRadius: 999,
              fontSize: 28,
              fontWeight: 700,
              alignSelf: 'flex-start',
}}>
{labelOverlay.style === 'error' ? '' : ''} {labelOverlay.text}
            </div>
          )}
        </div>
      )}

{/* Scene: CTA type */}
{scene.type === 'cta' && (
        <CTAEndCard
          ctaText={(content as Record<string, string>).ctaText}
          subText={(content as Record<string, string>).subText}
          accentLabel={(content as Record<string, string>).accentLabel}
          delay={0}
        />
      )}

{/* Badge */}
{badge && scene.type !== 'cta' && (
        <JapiBadge
          variant={(badge.variant as 'logo' | 'tag' | 'watermark') || 'tag'}
          position={(badge.position as 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') || 'top-right'}
          delay={badge.delay ? Number(badge.delay) : 0}
        />
      )}

{/* Caption */}
{caption && scene.type !== 'cta' && (
        <Caption
          text={caption.text}
          startFrame={0}
          endFrame={scene.durationInFrames - 5}
          position={(caption.position as 'top' | 'bottom' | 'center') || 'bottom'}
          size={(caption.size as 'sm' | 'md' | 'lg') || 'md'}
        />
      )}
    </AbsoluteFill>
  );
};
