// entry point:
function main() {
  JeelizWebojiThreeHelper.init({
    isMirror: true,

    canvasThreeId: 'webojiCanvas',
    canvasId: 'jeelizFaceExpressionsCanvas',

    assetsParentPath: '../../../assets/3D/',
    NNCPath: '../../../dist/',

    // RACCOON:
    meshURL: 'meshes/dumplin.json',
    matParameters: {
      diffuseMapURL: 'textures/dumplin.jpg',
      specularMapURL: 'textures/Fox_specular.png',
      flexMapURL: 'textures/Fox_flex.png',
    },

    position: [0, -80, 0],
    scale: 1.2,
  });
}

window.addEventListener('load', main);
