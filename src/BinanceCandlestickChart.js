import React, { useEffect, useState } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import axios from "axios";

const BinanceCandlestickChart = () => {
  const [candlestickData, setCandlestickData] = useState([]);

  useEffect(() => {
    // Fetch candlestick data from Binance API
    const fetchCandlestickData = async () => {
      try {
        const response = await axios.get(
          "https://api.binance.com/api/v3/klines",
          {
            params: {
              symbol: "BTCUSDT", // Example trading pair
              interval: "1h", // Example interval (1 hour)
              limit: 100, // Example limit
            },
          }
        );
        setCandlestickData(response.data);
      } catch (error) {
        console.error("Error fetching candlestick data:", error);
      }
    };

    fetchCandlestickData();
  }, []);

  return (
    <iframe
      title="Binance Candlestick Chart"
      width="100%"
      height="800"
      srcDoc={`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Binance Candlestick Chart</title>
                    <style>
                            html, body, #tradingview-widget-container, #tradingview-widget {
                                width: 100%;
                                height: 100%;
                                margin: 0;
                                padding: 0;
                            }
                        </style>
                    <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                </head>
                <body>
                    <div id="tradingview-widget-container">
                        <div id="tradingview-widget"></div>
                    </div>
                    <script type="text/javascript">
                        new TradingView.widget({
                            "autosize": true,
                            "symbol": "BINANCE:BTCUSDT",
                            "interval": "1",
                            "timezone": "Etc/UTC",
                            "theme": "Dark",
                            "style": "1",
                            "locale": "en",
                            "toolbar_bg": "#f1f3f6",
                            "enable_publishing": false,
                            "hide_side_toolbar": false,
                            "allow_symbol_change": true,
                            "details": true,
                            "hotlist": true,
                            "container_id": "tradingview-widget"
                        });
                    </script>
                </body>
            </html>
        `}
    ></iframe>
  );
};

export default BinanceCandlestickChart;
