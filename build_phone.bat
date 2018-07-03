cd phone

call npm run generate

rmdir  .\dist\newsPackage /s /q
rmdir  .\dist\newsImage /s /q
rmdir  .\dist\phoneImage /s /q
rmdir  .\dist\build /s /q
del  .\dist\newsConfig.json /f /s /q
del  .\dist\whitePaper_en.pdf /f /s /q
del  .\dist\whitePaper_zh.pdf /f /s /q
pause