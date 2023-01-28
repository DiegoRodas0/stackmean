const sharp = require('sharp')

// nombrecompuesto=nombreusuario+hashe+edad+di
sharp('img.png')
    .resize(80)
    .toFile('resized.png')