curl -X POST \
'https://routes.googleapis.com/directions/v2:computeRoutes' \
-H 'Content-Type: application/json' \
-H 'X-Goog-Api-Key: AIzaSyD8HBqH4YmdiKH20eK-NnH9VNMisawXR6E' \
-H 'X-Goog-FieldMask: routes.duration,routes.distanceMeters' \
-H 'Referer: http://localhost:5173' \
-d '{
  "origin": {
    "address": "1600 Amphitheatre Parkway, Mountain View, CA"
  },
  "destination": {
    "address": "450 Serra Mall, Stanford, CA"
  }
}'