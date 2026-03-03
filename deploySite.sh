#!/bin/bash
zip -r -q puppeteer.zip index.js sms.js lanchonete.js dailyMenu.js weeklyMenu.js node_modules/ package.json
echo Uploading zip to lambda
aws lambda update-function-code --function-name ocrRestaurantToDynamo --zip-file fileb://puppeteer.zip --profile gabriela --region sa-east-1 --no-cli-pager
echo "Deploy finalizado com sucesso!"
