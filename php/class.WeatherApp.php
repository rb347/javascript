<?php


class WeatherApp
{
  private $apiKey;

  public function __construct($apiKey)
  {
    $this->apiKey = $apiKey;
  }

  public function get_current_temperature($latitude, $longitude)
  {
    $url = "https://api.weather.gov/points/$latitude,$longitude";
    $options = [
      "http" => [
        "header" => "User-Agent: MyWeatherApp/1.0\r\n"
      ]
    ];
    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    if ($response === FALSE) {
      return "Error fetching weather data.";
    }

    $data = json_decode($response, true);
    if (isset($data['properties']['forecastHourly'])) {
      $forecast_url = $data['properties']['forecastHourly'];
      $forecast_response = file_get_contents($forecast_url, false, $context);
      if ($forecast_response === FALSE) {
        return "Error fetching forecast data.";
      }

      $forecast_data = json_decode($forecast_response, true);
      if (isset($forecast_data['properties']['periods'][0]['temperature'])) {
        return $forecast_data['properties']['periods'][0]['temperature'] . "°" . $forecast_data['properties']['periods'][0]['temperatureUnit'];
      } else {
        return "Temperature data not available.";
      }
    } else {
      return "Forecast URL not available.";
    }
  }

  public function get_latitude_longitude($city, $state)
  {
    $url = "https://api.opencagedata.com/geocode/v1/json?q=" . urlencode($city . ',' . $state) . "&key=" . $this->apiKey;
    $response = file_get_contents($url);
    if ($response === FALSE) {
      return "Error fetching location data.";
    }

    $data = json_decode($response, true);
    if (isset($data['results'][0]['geometry'])) {
      $latitude = $data['results'][0]['geometry']['lat'];
      $longitude = $data['results'][0]['geometry']['lng'];
      return ['latitude' => $latitude, 'longitude' => $longitude];
    } else {
      return "Location data not available.";
    }
  }
}
