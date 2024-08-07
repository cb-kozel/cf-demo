import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ActivityIndicator,
  Linking
} from "react-native"

import { styles } from "./styles"

function AzureOpenaiDalle({ navigation }) {
  const [prompt, setPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [charCount, setCharCount] = useState(0)

  const hostUrl = "http://localhost:8000"

  const handleSubmit = async () => {
    setIsLoading(true)

    try {
      const response = await fetch(
        `${hostUrl}/modules/azure-openai-dalle/generate-image/?prompt=${encodeURIComponent(
          prompt
        )}`
      )

      const dalleData = await response.json()

      if (dalleData.error) {
        setError(dalleData.error)
      } else {
        setImageUrl(dalleData.data[0].url) // Assuming the response is an array of images
        setError(null)
        setIsLoading(false)
      }
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <View style={styles.webContainer}>
      <View style={styles.logoRow}>
        <Pressable
          onPress={() => {
            Linking.openURL("https://crowdbotics.com")
          }}
        >
          <Image
            source={require("./images/cb-logo.png")}
            style={styles.logoCb}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            Linking.openURL(
              "https://learn.microsoft.com/en-us/azure/ai-services/openai/dall-e-quickstart?tabs=dalle3%2Ccommand-line&pivots=programming-language-python"
            )
          }}
        >
          <Image
            source={require("./images/Azure.png")}
            style={styles.logoAzure}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            Linking.openURL("https://openai.com/index/dall-e-3/")
          }}
        >
          <Image
            source={require("./images/dall-e-logo.png")}
            style={styles.logoDalle}
          />
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a prompt"
          placeholderTextColor="#909090"
          onChangeText={text => {
            if (text.length <= 2000) {
              setPrompt(text)
              setCharCount(text.length)
            }
          }}
          style={styles.input}
          multiline={true}
          numberOfLines={4}
        />
        {charCount > 2000 && (
          <Text style={[styles.charCount, styles.charCountWarning]}>
            You have reached the maximum character limit
          </Text>
        )}
        <Text style={styles.charCount}>{charCount}/2000</Text>
        <Pressable
          title="Generate Image"
          onPress={handleSubmit}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}>Generate Image</Text>
        </Pressable>
      </View>

      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#72ABDD"
          style={styles.activityIndicator}
        />
      ) : imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.genImage} />
      ) : null}
      {error && <Text>{error}</Text>}
    </View>
  )
}

export default {
  title: "azure-openai-dalle",
  navigator: AzureOpenaiDalle
}
