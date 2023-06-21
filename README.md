# T1000-App
T1000-App
T1000 App




rm -rf package-lock.json && rm -rf yarn.lock && rm -rf node_modules
rm -rf ios/Podfile.lock && rm -rf ios/Pods
npm i  
cd ios && pod repo update && pod update && pod install
cd ..