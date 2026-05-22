# japi-reel-factory

Sistema reutilizable para generar reels verticales JAPI HUB con animaciones.
Remotion + React + CSS. Sin GPU. Sin modelos pesados.

## Instalacion

```bash
git clone https://github.com/Japi-Hub/japi-reel-factory
cd japi-reel-factory
npm install
```

## Comandos

```bash
npm start        # Remotion Studio en http://localhost:3000
npm run render   # Exporta renders/el-robot.mp4 (1080x1920)
```

## Crear un nuevo reel

1. Duplicar `src/data/el-robot.json` y editar el contenido
2. Duplicar `src/compositions/ElRobot.tsx` si necesitas logica custom
3. Registrar la composicion en `Root.tsx`
4. Correr `npm start` para preview
5. Correr `npm run render` para exportar el MP4

## Tipos de escena

scene-title: Titulo grande con subtitulo y linea de acento
chat: Burbujas tipo WhatsApp con animacion spring
cta: Tarjeta final sobre fondo verde lima

## Paleta JAPI

morado: #4831E9
verdeLima: #CEF13B
naranja: #FF782C
negro: #111111
fondo: #F5F5F7

## Reglas de diseno

Formato 1080x1920. Sin rosado. Poco morado solido. Mucho aire.
Animaciones lentas con spring. Texto grande y legible.
Estilo editorial premium.

## Reel El Robot - Demo

450 frames / 15s a 30fps

Hook (0): El error invisible que hace sonar tu WhatsApp como robot
Problema (75): Tus mensajes suenan correctos. Pero no conectan.
Ejemplo malo (150): Burbujas frias y genericas
Correccion JAPI (240): Una pregunta que conecta
Cierre (330): No necesitas escribir mas. Con mas intencion.
CTA (390): Guarda este reel si vendes por WhatsApp.

JAPI HUB - japi-reel-factory v1.0.0
