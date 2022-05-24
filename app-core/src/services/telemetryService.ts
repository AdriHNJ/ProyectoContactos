import { ApplicationInsights } from "@microsoft/applicationinsights-web";

let appInsights: ApplicationInsights;

export function runInsights(): ApplicationInsights {
  if (!appInsights) {
    appInsights = new ApplicationInsights({
      config: {
        instrumentationKey: process.env.REACT_APP_AZURE_INSTRUMENTATIONKEY,
        url: "https://js.monitor.azure.com/scripts/b/ai.2.min.js",
        disableFetchTracking: false,
        maxBatchInterval: 0,
        //enableCorsCorrelation: true,
      },
    });
    appInsights.loadAppInsights();
    appInsights.trackPageView();
  }

  return appInsights;
}
