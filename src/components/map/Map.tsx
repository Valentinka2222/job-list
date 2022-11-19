import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import CircularProgress from '@mui/material/CircularProgress';
import { defaultTheme } from './Theme';
import logo from '../../images/map-marker-alt-solid.svg';
import { MapProps, Libraries } from '../../types';

const libraries: Libraries = ['places'];
const API_KEY = process.env.REACT_APP_API_KEY;

const containerStyle = {
  width: '402px',
  height: '218px',
  display: 'flex',
  margin: 'auto',
  backgroundColor: '#2A3047',
  borderRadius: '8px',
};

const defaultOptions = {
  panControl: true,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,
};

const Map: React.FC<MapProps> = ({ center }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY || '',
    libraries,
  });

  const renderMap = () => {
    return (
      <>
        {isLoaded && (
          <GoogleMap
            options={defaultOptions}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11}
          >
            <MarkerF
              icon={{
                url: logo,
                scale: 3,
              }}
              position={center}
            />
          </GoogleMap>
        )}
      </>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }
  return isLoaded ? renderMap() : <CircularProgress disableShrink />;
};

export default Map;
