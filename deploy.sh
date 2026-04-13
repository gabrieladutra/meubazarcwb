#!/bin/bash

# Nome do bucket
BUCKET='meubazarcwb.gabrieladutra.com'

# 1) GERAR O BUILD
echo "Gerando build..."
npm run build

# 2) LIMPAR BUCKET
echo "Limpando bucket..."
aws s3 rm s3://$BUCKET --recursive

# 3) ENVIAR NOVO BUILD
echo "Enviando novos arquivos..."
aws s3 cp dist s3://$BUCKET --recursive

# 4) INVALIDAR CLOUDFRONT
echo "Invalidando CloudFront..."
aws cloudfront create-invalidation \
  --distribution-id E2KKZWTR0BTD3K \
  --paths '/*' \
  --no-cli-pager

echo "Deploy finalizado com sucesso!"
