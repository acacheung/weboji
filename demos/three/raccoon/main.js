'use strict';

// entry point:
function main() {
  JeelizWebojiThreeHelper.init({
    isMirror: true,

    canvasThreeId: 'webojiCanvas',
    canvasId: 'jeelizFaceExpressionsCanvas',

    assetsParentPath:
      'https://raw.githubusercontent.com/acacheung/weboji/main/assets/3D/',
    NNCPath: 'https://raw.githubusercontent.com/acacheung/weboji/main/dist/',

    meshURL: 'meshes/fox11_v0.json',
    matParameters: {
      diffuseMapURL: 'textures/Fox4.jpg',
      specularMapURL: 'textures/Fox_specular2.png?raw=true',
      flexMapURL: 'textures/Fox_flex.png',
    },

    position: [0, -80, 0],
    scale: 1.2,
  });
}

window.addEventListener('load', main);
