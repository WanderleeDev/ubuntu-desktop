export function takeScreenshot(): void {
  // Obtener el elemento que deseas capturar
  const targetScreen = document.body;

  if (targetScreen) {         
    // Crear un elemento canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Establecer el tamaño del lienzo igual al tamaño del elemento
    canvas.width = targetScreen.offsetWidth;
    canvas.height = targetScreen.offsetHeight;

    // Dibujar el contenido del elemento en el lienzo
    if (context) {
      context.drawImage(targetScreen, 0, 0, targetScreen.offsetWidth, targetScreen.offsetHeight);

      // Obtener el blob de la imagen
      canvas.toBlob((blob) => {
        if (blob) {
          // Crear un enlace para descargar la captura de pantalla
          const enlaceDescarga = document.createElement('a');
          enlaceDescarga.href = URL.createObjectURL(blob);
          enlaceDescarga.download = 'captura.png';
          enlaceDescarga.click();
        }
      }, 'image/png');
    }
  }
}
