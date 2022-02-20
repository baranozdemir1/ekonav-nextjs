import Head from 'next/head';

import { YMaps, Map, ZoomControl, GeolocationControl, Button, Placemark } from 'react-yandex-maps';
import { useRef } from 'react';

export default function Maps( { block } ) {

  const map = useRef(null);

  const mapState = {
    center: [38.390256, 27.056583], // Current location
    zoom: 15
  };

  const addRoute = (ymaps) => {
    const startLocation = mapState.center; // Starter location
    const targetLocation = block.coordinates; // Target location

    const multiRoute = new ymaps.multiRouter.MultiRoute({
      referencePoints: [
        startLocation,
        targetLocation
      ],
      params: {
        routingMode: "pedestrian"
      }
    }, {
      boundsAutoApply: true,
      wayPointDraggable: true,
      wayPointRemovable: true,
      wayPoints: [
        startLocation,
        targetLocation
      ],
      routePanelClassName: "route-panel",
      routePanelActiveClassName: "route-panel_active",
      routePanelOpenedClassName: "route-panel_opened",
      routePanelClosedClassName: "route-panel_closed",
      routePanelToggleClassName: "route-panel__toggle",
      editorDrawRoute: true,
      editorDrawOverlay: true,
      routeStrokeWidth: 5,
      routeStrokeColor: "#0000ff",
      routeActiveStrokeWidth: 5,
      routeActiveStrokeColor: "#ff0000",
      routeActiveStrokeStyle: "solid",
      routeActiveStrokeOpacity: 0.5,
      routeActiveStrokeDashArray: [10, 10],
      routeActiveStrokeDashOffset: 10,
      routeActiveStrokeLineJoin: "round",
      routeActiveStrokeLineCap: "round",
      routeActiveStrokeDashOffset: 10,
    });

    map.current.geoObjects.add(multiRoute);
  };

  return (
    <>
      <Head>
        <title>Maps</title>
      </Head>
      <div className="map">
        <YMaps
          query={{ apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY, lang: process.env.NEXT_PUBLIC_YANDEX_MAPS_LANG }}
        >
          <Map
            className="w-screen calculated"
            modules={["multiRouter.MultiRoute"]}
            state={mapState}
            width="100%"
            height="100%"
            instanceRef={map}
            controls={[
              new ZoomControl(),
              new GeolocationControl()
            ]}
            onLoad={addRoute}
          >
            <ZoomControl options={{ float: 'right' }} />
            <GeolocationControl options={{ float: 'left' }} />
          </Map>
        </YMaps>
      </div>
    </>
  )
}
