# Expo Linking API Deep Link Handling Issue on Android

This repository demonstrates a bug related to the Expo `Linking` API's inconsistent handling of deep links on Android devices when the app is in the background or closed. Even with a properly registered event listener, the callback function may not be triggered reliably. 

## Problem Description
The `Linking.addEventListener` function, used to listen for deep link events, doesn't always work as expected on Android.  This problem is particularly noticeable when the application is not running in the foreground.  The deep link is received, but the registered callback never executes.

## Steps to Reproduce
1. Clone this repository.
2. Run the app on an Android device (various Android versions recommended for testing).
3. Send a deep link to the app while it's in the background or closed.
4. Observe that the expected action triggered by the `Linking.addEventListener` callback does not occur.

## Solution
The provided solution attempts to address this inconsistency by implementing additional checks and workarounds.  It involves persistently listening for deep links and may require adjustments for specific app architectures.  See `bugSolution.js` for details.