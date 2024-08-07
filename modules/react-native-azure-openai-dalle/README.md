# OpenAI DALL-E - Image Generator (front-end)

This application is a React Native Web Application that interacts with the Azure OpenAI DALL-E model to generate images based on user prompts. The application is designed to be a front-end module that communicates with a back-end module to generate and display images.

## Features

- User can enter a prompt to generate an image
- Displays generated image from the OpenAI DALL-E model

## Installation

1. Log into the Crowdbotics platform
2. Navigate to Studio and click on Modules
3. Find the "Azure OpenAI DALL-E Image Generator (front-end)" module
4. Click the install button

## Dependencies

- **Azure OpenAI DALL-E Image Generator (back-end)**: You will need to install the backend module in order for the front end module to execute as expected. There is a README.md file there that will assist you in

## Local Setup

If you would like to develop with this module locally on your machine, you will need to install 'corsheaders'. You can find more information about this package [here](https://pypi.org/project/django-cors-headers/). These are the steps I followed to get this working for me:

1. cd to [your app name]/backend/[your app name] and run in terminal

```bash
pipenv install django-cors-headers
```

2. In settings.py in the backend/demo directory add:

```python
INSTALLED APPS=[
  "corsheaders",
  ...
]
```

3. In the same settings.py file add the following to the MIDDLEWARE array:

```python
MIDDLEWARE=[
"corsheaders.middleware.CorsMiddleware",
...,]
```

4. In the same settings.py file add:

```python
   CORS_ORIGIN_WHITELIST = [
   "http://localhost:8000",
   "http://localhost:8080",
   ]

```

5. From demo/backend run the following command in terminal:

```bash
docker compose -p your-project-name up --build
```

## License

This project is licensed under the MIT License.

## Author

Jason Kozel
jason.kozel@crowdbotics.com
