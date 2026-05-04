import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

const MapSection = () => {
  const position = { lat: 40.7128, lng: -74.006 };

  return (
    <div className="h-[500px] w-full relative">
      <APIProvider apiKey={"AIzaSyB-sFsLedgs4kb1WHFovbKvVVQpJTKUwmk"}>
        <Map
          defaultCenter={position}
          defaultZoom={13}
          mapId={"MAP_ID"}
          gestureHandling={"cooperative"}
          disableDefaultUI={false}
        >
          <AdvancedMarker position={position} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default MapSection;
