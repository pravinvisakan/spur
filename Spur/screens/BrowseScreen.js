import React, {Component} from 'react';
import { Button,
     Image,
     Platform,
     StyleSheet,
     Text,
     TextInput,
     TouchableOpacity,
     View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import SearchDetails from '../classes/SearchDetails';
import SearchManager from '../classes/SearchManager';
import { MonoText } from '../components/StyledText';

export default class BrowseScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.searchManager = new SearchManager();

    this.state = {
      partySize: '',
      cost: ''
    };
  }

  handlePartySizeChange = e => {
    this.setState({
      partySize: e.nativeEvent.text
    });
  }

  refineSearch = e => {
    // Construct a SearchDetails object and pass it to the searchmanager
    var details = new SearchDetails("start", "end", "location", "cost", this.state.partySize, "categories");
    details.print();

    this.searchManager.filter(details);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.formText}>Party Size</Text>
              <View style={styles.inputContainer} behavior="padding">
                <TextInput onChange={this.handlePartySizeChange} defaultValue={'1'} clearTextOnFocus={true}/>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <Text style={styles.formText}>Current Criteria:</Text>
            <View>
              <Text>Party Size: {this.state.partySize}</Text>
            </View>
          </View>
          <Button
            title="Refine Search"
            onPress={this.refineSearch}
          />
        </ScrollView>
      </View>
    );
  }
}

BrowseScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
  height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center', 
  },
  inputContainer: {
  borderWidth: 1,
  borderColor: 'lightgrey',
    height: 50,
  },
  input: {
  height: 50,
    backgroundColor: 'lightgrey',
    paddingLeft: 15,
    paddingRight: 15  
  },
  formText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  textContainer: {
  flexGrow: 1,
    justifyContent: 'space-evenly',
  flexDirection: 'row',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});