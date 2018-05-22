# Create directory and file for building Android version.
mkdir -p android/app/src/main/assets
touch android/app/src/main/assets/index.android.bundle

# Copy .env.dev file in order to get environment variables correctly.
cp -n .env.dev .env