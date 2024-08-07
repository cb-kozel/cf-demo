import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  activityIndicator: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "2%",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },

  charCount: {
    color: "#d8d8d8"
  },
  charCountWarning: {
    color: "#FF0000"
  },

  genImage: {
    flex: 3 / 5,
    flexShrink: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  input: {
    padding: 5,
    borderColor: "#E2E2E2",
    borderRadius: 3,
    borderWidth: 1
  },
  inputContainer: {
    flex: 1 / 5,
    width: "100%",
    marginBottom: "2%"
  },

  logoRow: {
    flex: 1 / 5,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: "15px"
  },
  logoAzure: { width: 65, height: 70, marginRight: 30 },
  logoCb: { width: 300, height: 75, marginRight: 10 },
  logoDalle: { width: 200, height: 55 },

  sidebarMenu: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "4%"
  },
  sideBarContainer: {
    flex: 1,
    position: "absolute",
    top: "1%",
    width: "40%",
    left: 0
  },
  sidebar: {
    width: "90%",
    height: "100%",
    backgroundColor: "#fff",
    padding: "3%",
    marginLeft: "2%",
    borderBottomRightRadius: 7
  },
  sidebarTitle: {
    fontSize: 14,
    marginRight: 10,
    color: "#72ABDD"
  },
  sidebarContent: {
    flex: 1,
    backgroundColor: "#fff"
  },
  submitButton: {
    backgroundColor: "#72ABDD",
    alignSelf: "center",

    textAlign: "center",
    padding: 10,
    maxWidth: "30%",
    minWidth: 100,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10
  },
  submitButtonText: {
    color: "#fff"
  },
  webContainer: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    margin: "3%"
  }
})
