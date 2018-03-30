<a href='https://infinitered.github.io/solidarity/'><img src='https://github.com/infinitered/solidarity/raw/master/_art/plugin.jpg' align='left' height="60"/></a>

# solidarity-envinfo
## This solidarity plugin allows advanced reporting features using envinfo
This plugin allows you to write advanced rules for Solidarity and capitalize on awesome features provided by EnvInfo.

You can write rules to:

* `infoReport` - This rule will add the items you want to your `solidarity report` output.
* `enforceReport` - This rule add items you identify to your `solidarity report` output, **AND** enforces that all identified items exist during a solidarity check.

## Use:
The envinfo plugin allows you to add whatever info `envInfo` can report on, to your solidarity report.

Here's an example of a requirement that adds NPM Packages and their associated versions to the `solidarity report`
```json5
  "Report Important Stuff": [
    {
      "rule": "custom", "plugin": "envInfo", "name": "infoReport",
      "report": {
        "npmPackages": [
          "victory-native",
          "react-native-svg"
        ]
      }
    }
  ]
```

## Install:
`npm i solidarity-envinfo` or `yarn add solidarity-envinfo`
This plugin will automatically be picked up by Solidarity (which should already be installed).

## :newspaper: What is Solidarity?  What is EnvInfo?

#### [Read More About Solidarity Here](https://github.com/infinitered/solidarity)

#### [Read More about EnvInfo Here](https://github.com/tabrindle/envinfo)
