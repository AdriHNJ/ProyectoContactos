import React from 'react';
import PwaInstallPopupIOS from 'react-pwa-install-ios';

 
const PwaInstallPopupIOSComponent = () => {
  return (
    <PwaInstallPopupIOS>
    <div 
      delay={0}
      style={{
        padding: '15px 30px',
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
      }}
    > 
     Instalar aplicación
    <p>Para instalar <b>El Portal del Despacho</b> en su dispositivo debe pulsar en el icono señalado debajo del mensaje.</p>
    </div>
  </PwaInstallPopupIOS>
  );
};

export default PwaInstallPopupIOSComponent;