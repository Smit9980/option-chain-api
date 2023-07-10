# NSE Option Chain API

This is a Node.js application that provides access to the NSE (National Stock Exchange) option chain data for Nifty and Bank Nifty. Additionally, you can retrieve the expiry dates for these option chains. The API supports fetching option chain data based on specific expiry dates.



## Endpoints

### Get Option Chain

- URL: `/option-chain/`
- Method: `GET`
- Parameters:
  - `symbol` (required): The symbol for which option chain data is requested (nifty or banknifty).
  - `expiry` (required): The expiry date for which option chain data is requested (format: YYYY-MM-DD).
- Example URL: `http://localhost:8000/api/option-chain/?symbol=nifty&expiry=13-Jul-2023`
- Response Format: JSON

### Get Expiry Dates

- URL: `/getexpiry`
- Method: `GET`
- Parameters:
  - `symbol` (required): The symbol for which expiry dates are requested (nifty or banknifty).
- Example URL: `http://localhost:8000/api/getexpiry?symbol=nifty`
- Response Format: JSON

## Error Handling

If an error occurs during the API request, the response will have a status code of 500 and the JSON response body will contain an error property with a message describing the error.

## Installation
```bash
  git clone https://github.com/imsahadeb/option-chain-api.git
  cd option-chain-api
  npm Install
  node start
```
    

## Usage

To use this API, make HTTP requests to the appropriate endpoint as described above. Ensure that you have the necessary parameters in the request URL. The response will be returned in JSON format.

The API assumes that it is running on http://localhost:8000 as indicated in the provided code. Adjust the base URL accordingly based on your setup.

Please refer to the examples provided for guidance on how to make requests to the API and interpret the responses.

## Contributing

Contributions to this project are welcome. To contribute, please follow the standard guidelines for bug reports, feature requests, and pull requests. For any questions or concerns, feel free to reach out to the project maintainers.

## License

This project is licensed under the MIT License.
