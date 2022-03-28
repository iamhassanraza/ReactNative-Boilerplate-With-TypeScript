<!-- //FONTS -->
<!-- ANDROID -->

src -> assets -> fonts
add or replace your fonts in this folder
You need to check the file name before using it . Android will use the font name but in IOS it will use the “PostScript name”.
So rename it to postscript name once and for all before using.

After adding your fonts
RUN
npx react-native link

this command will links fonts in Info.plst for IOS and creates fonts directory (android/app/src/main/assets/fonts) for Android, where copies your fonts

<!-- React Native Vector Icons -->

React Native Vector Icons Are Added in this project. Just Use
visit https://oblador.github.io/react-native-vector-icons/ for icons


