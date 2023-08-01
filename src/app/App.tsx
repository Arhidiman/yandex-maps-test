import React from 'react';
import './styles/index.scss';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import Ballon from './components/Ballon';
import Portal from './components/Portal';
import { useState } from 'react';

export function App() {


    const [ activePortal, setActivePortal ] = useState(false)

    return (
        <div className='App'>
            <YMaps>
                <Map state={
                    {   
                        center: [56.474359, 84.949653], 
                        zoom: 9,
                        // modules={ [ 'geoObject.addon.balloon', 'geoObject.addon.hint' ] } 
                    }
                } 
                >
                    <Placemark
                        geometry={[56.474359, 84.949653]}
                        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                        options=
                            {
                                {
                                    preset: 'islands#circleIcon', // список темплейтов на сайте яндекса
                                    iconColor: 'green', // цвет иконки, можно также задавать в hex
                                } 
                            }
                        properties=
                            {
                                {
                                    iconContent: '2', // пару символов помещается
                                    hintContent: '<b>Это ТУСУР</b>',
                                    // создаём пустой элемент с заданными размерами
                                    balloonContent: '<div id="driver-2" class="driver-card"></div>',
                                }
                            }
                        onClick={ () => {
                            // ставим в очередь промисов, чтобы сработало после отрисовки балуна
                            setTimeout(() => { setActivePortal(true)}, 0)
                        } }
                  
                    />
                </Map>
                {
                    activePortal && 
                    <Portal elementId={ 'driver-2' }>
                        {/* ставим свой компонент */}
                        <Ballon/>
                    </Portal>
                }
             
            </YMaps>
        </div>
    );
}