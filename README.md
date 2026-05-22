——# japi-reel-factory

Sistema reutilizable para generar reels verticales JAPI HUB con animaciones.
Remotion + React + CSS. Sin GPU. Sin modelos pesados.

---

## Instalacion

```bash
git clone https://github.com/Japi-Hub/japi-reel-factory
cd japi-reel-factory
npm install
```

## Comandos

```bash
npm start       # Remotion Studio en http://localhost:3000
npm run render  # Exporta renders/el-robot.mp4 (1080x1920)
```

## Estructura

```
src/
  index.ts
  Root.tsx
  compositions/ElRobot.tsx
  components/
    ChatBubble.tsx
    Caption.tsx
    SceneTitle.tsx
    JapiBadge.tsx
    CTAEndCard.tsx
  data/el-robot.json
  styles/tokens.ts
assets/ briefs/ renders/ exports/
```

## Crear un nuevo reel

1. Duplicar `src/data/el-robot.json` y editar contenido
2. 2. Duplicar `src/compositions/ElRobot.tsx` si necesitas logica custom
   3. 3. Registrar la composicion en `Root.tsx`
      4. 4. `npm start` para preview
         5. 5. `npm run render` para MP4
           
            6. ## Tipos de escena (JSON)
           
            7. | type | descripcion |
            8. |------|-------------|
            9. | `scene-title` | Titulo grande con subtitulo y linea de acento |
            10. | `chat` | Burbujas tipo WhatsApp con animacion spring |
            11. | `cta` | Tarjeta final sobre fondo verde lima |
           
            12. ## Paleta JAPI
           
            13. | Token | Color |
            14. |-------|-------|
            15. | morado | #4831E9 |
            16. | verdeLima | #CEF13B |
            17. | naranja | #FF782C |
            18. | negro | #111111 |
            19. | fondo | #F5F5F7 |
            20. | cards | #FAFAFA |
           
            21. ## Reglas de diseno
           
            22. - Formato 1080x1920 siempre
                - - Sin rosado. Poco morado solido. Mucho aire.
                  - - Animaciones lentas con spring (damping alto)
                    - - Texto grande y legible
                      - - Estilo editorial premium
                       
                        - ## Reel "El Robot" — Demo (450 frames / 15s a 30fps)
                       
                        - 1. Hook (0s): El error invisible que hace sonar tu WhatsApp como robot
                          2. 2. Problema (2.5s): Tus mensajes suenan correctos. Pero no conectan.
                             3. 3. Ejemplo malo (5s): Burbujas frias y genericas
                                4. 4. Correccion JAPI (8s): Una pregunta que conecta (highlight verde lima)
                                   5. 5. Cierre (11s): No necesitas escribir mas. Con mas intencion.
                                      6. 6. CTA (13s): Guarda este reel si vendes por WhatsApp.
                                        
                                         7. ---
                                        
                                         8. *JAPI HUB — japi-reel-factory v1.0.0*
