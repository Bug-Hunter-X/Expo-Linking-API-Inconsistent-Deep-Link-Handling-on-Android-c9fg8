This bug occurs when using the Expo `Linking` API to handle deep links.  If your app is running in the background or is closed, and a deep link is opened, the `Linking.addEventListener` might not trigger properly. This can lead to the deep link not being handled, even if the event listener is correctly set up. The issue seems to be particularly problematic on Android devices running certain versions of Android.