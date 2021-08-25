When hermes is enabled calling console.error with a large log message will cause an exception due to regex in "parseLogBoxException"

The regex in question is from node_modules/react-native/Libraries/LogBox/Data/parseLogBoxLog.js line 251
```
const BABEL_CODE_FRAME_ERROR_FORMAT = /^(?:TransformError )?(?:.*):? (?:.*?)(\/.*): ([\s\S]+?)\n([ >]{2}[\d\s]+ \|[\s\S]+|\u{001b}[\s\S]+)/u;

...

const babelCodeFrameError = message.match(BABEL_CODE_FRAME_ERROR_FORMAT);
```