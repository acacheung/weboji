// entry point:
function main() {
  JeelizWebojiThreeHelper.init({
    isMirror: true,

    canvasThreeId: 'webojiCanvas',
    canvasId: 'jeelizFaceExpressionsCanvas',

    assetsParentPath: '../../../assets/3D/',
    NNCPath: '../../../dist/',

    // RACCOON:
    meshURL: 'meshes/kangaroo.json',
    matParameters: {
      diffuseMapURL: 'textures/diffuse_kangaroo.jpg',
      specularMapURL: 'textures/Fox_specular2.png',
    },

    ambientLightIntensity: 0.6,
    position: [-20, -60, 0],
    scale: 1.2,
  });
}

window.addEventListener('load', main);
