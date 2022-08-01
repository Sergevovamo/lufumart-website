// import React from "react";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
//   ComboboxOptionText,
// } from "@reach/combobox";
// import "@reach/combobox/styles.css";
// const libraries = ["places"];
// const containerStyle = {
//   height: "100vh",
//   width: "80%",
//   margin: "0px auto",
// };
// const center = {
//   lat: -0.5380000000,
//   lng: 37.45433000,
// };
// const options = {
//   disableDefaultUI: true,
// };
// const position = {
//   lat: -0.5380000000,
//   lng: 37.45433000,
// };
// const MapComponent = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyCrrqzlO5H6S3li-2B8SkfluHvQQMxq8D4",
//     libraries,
//   });
//   if (loadError) return "Error ocurred while loading the map";
//   // if (isLoaded)
//   return (
//     <div>
//       {/* <Search /> */}
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         zoom={10}
//         center={center}
//         options={options}
//       >
//         <Marker position={position} />
//       </GoogleMap>
//     </div>
//   );
// };

// export default MapComponent;

{
  /* <Combobox>
  <ComboboxInput aria-labelledby="demo" className="p-2 border" />
  <ComboboxPopover>
    <ComboboxList aria-labelledby="demo">
      <ComboboxOption value="Apple" />
      <ComboboxOption value="Banana" />
      <ComboboxOption value="Orange" />
      <ComboboxOption value="Pineapple" />
      <ComboboxOption value="Kiwi" />
    </ComboboxList>
  </ComboboxPopover>
</Combobox>; */
}

import React, { useRef, useCallback, useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
const containerStyle = {
  height: "60vh",
  width: "80%",
  margin: "0px auto",
  position: "relative",
};
// const center = {
//   lat: -0.538,
//   lng: 37.45433,
// };
const options = {
  disableDefaultUI: true,
};
// const position = {
//   lat: -0.538,
//   lng: 37.45433,
// };
const libraries = ["places"];
const MapComponent = ({ setOpen, setDeliveryAddress }) => {
  const [marker, setMarker] = useState({});
  const [selected, setSelected] = useState(null);

  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setMarker(currentPosition);
  };

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(18);
    setMarker({
      lat,
      lng,
    });
  }, []);
  // control re-renders
  // const mapRef = useRef();
  // const onMapLoad = useCallback((map) => {
  //   mapRef.current = map;
  // });
  // pan to the chosen address
  // const panTo = useCallback(({ lat, lng }) => {
  //   mapRef.current.panTo({ lat, lng });
  //   mapRef.current.setZoom(14);
  // });
  const { isLoaded, loadError } = useLoadScript({
    // googleMapsApiKey: "AIzaSyCrrqzlO5H6S3li-2B8SkfluHvQQMxq8D4",
    googleMapsApiKey: "AIzaSyBYHRGJadNySkzYGvfz2jPdKe8v6X_99gc",
    libraries,
  });

  if (loadError) return "Error loading the map";
  if (!isLoaded) return "loading map";
  return (
    <section className="  h-screen w-full bg-[rgba(0,0,0,0.5)]  bg-blend-multiply absolute top-0">
      <div className=" bg-white text-center w-[80%] shadow  mx-auto py-8 rounded-lg  absolute top-[110px] left-[0px] right-[0px]">
        <div
          onClick={() => setOpen(false)}
          className=" cursor-pointer absolute top-3 right-3 bg-orange text-white p-2 rounded-full w-9 h-9"
        >
          X
        </div>

        <Search panTo={panTo} setDeliveryAddress={setDeliveryAddress} />

        <GoogleMap
          mapContainerStyle={containerStyle}
          // center={center}
          center={marker}
          zoom={10}
          options={options}
          onLoad={onMapLoad}
        >
          <Locate panTo={panTo} />
          {/* <Marker position={position} /> */}
          <Marker
            key={new Date().toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            draggable={true}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            onClick={() => {
              setSelected(marker);
            }}
          />
        </GoogleMap>
      </div>
    </section>
  );
};

export default MapComponent;

const Locate = ({ panTo }) => {
  return (
    <div className="absolute right-3 top-2  ">
      <button
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
        className="bg-gray-300 rounded flex justify-center items-center p-1.5"
      >
        <ion-icon name="locate-outline"></ion-icon>
      </button>
    </div>
  );
};

const Search = ({ panTo, setDeliveryAddress }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      // location: { lat: () => -0.538, lng: () => 37.45433 },
      location: { lat: () => -1.286389, lng: () => 36.817223 },
      radius: 200 * 1000,
    },
  });
  return (
    <div className="my-5  ">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          setDeliveryAddress(address);
          // console.log("Address is", address);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = getLatLng(results[0]);
            console.log("lat:", lat, "lng:", lng);
            panTo({ lat, lng });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <ComboboxInput
          className="p-2 border  rounded w-1/2 "
          placeholder="Enter your delivery address"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data?.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};
