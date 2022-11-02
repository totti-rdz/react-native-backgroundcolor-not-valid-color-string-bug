# react-native-hex-color-code-missing-hashtag-bug
This repository is a demo to showcase a bug I came across while learning React Native/Expo and navigating between screens with @react-navigation/native-stack.

https://www.loom.com/share/ef9302ca0dc64429910908a186c05295

When adding a (default) background color to every screen by using the screenOptions prop of Stack.Navigator, I noticed on iOS simulator that while navigating between screens the content of the screens seem to overlap.
After searching for the cause, I noticed that I forgot the hashtag in the color hex code. Weirdly the background color was still adapted and there was no error.

On Android emulator there seems to be no issue. This was only tested on virtual devices with expo go.
