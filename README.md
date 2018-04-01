<a href='https://infinitered.github.io/solidarity/'><img src='https://github.com/infinitered/solidarity/raw/master/_art/plugin.jpg' align='left' height="60"/></a>

# solidarity-envinfo
## Solidarity and envinfo Plugin :heart:
This plugin allows you to write advanced rules for Solidarity and capitalize on awesome features provided by envinfo.

#### Plugin adds the following rules:

* `infoReport` - This rule will add the items you want to your `solidarity report` output.
* `enforceReport` - This rule add items you identify to your `solidarity report` output, **AND** enforces that all identified items exist during a solidarity check.

## Use:
The envinfo plugin allows you to add whatever info `envinfo` can report on, to your solidarity report.


#### _Example 1: Just report some packages_

Here's an example of a Solidarity requirement that adds NPM Packages and their associated versions to the `solidarity report`
```json5
  "Report Important Stuff": [
    {
      "rule": "custom", "plugin": "envinfo", "name": "infoReport",
      "report": {
        "npmPackages": [
          "victory-native",
          "react-native-svg"
        ]
      }
    }
  ]
```

#### _Example 2: Report and enforce language is found_

Here's an example of a Solidarity requirement adds a report of Elixir version, and will **FAIL** if Elixir is not installed!
```json5
  "You Better Have Elixir!": [
    {
      "rule": "custom", "plugin": "envinfo", "name": "enforceReport",
      "report": { "Languages": ["Elixir"] }
    }
  ]
```

## Defining the Report Object
Here's the kitchen-sink list of goodies you can use in your report object.
```json5
{
  "Virtualization": ["Docker", "Parallels", "Virtualbox", "VMware Fusion"],
  "SDKs": ["iOS", "Android"],
  "IDEs": ["Android Studio", "Atom", "VSCode", "Sublime Text", "Xcode"],
  "Languages": ["Bash", "Go", "Elixir", "PHP", "Python", "Ruby"],
  "Browsers": [
    "Chrome",
    "Chrome Canary",
    "Firefox",
    "Firefox Developer Edition",
    "Firefox Nightly",
    "Safari",
    "Safari Technology Preview",
  ],
  // Name any npm package in this array
  "npmPackages": [],
};
```

## Install:
`npm i solidarity-envinfo` or `yarn add solidarity-envinfo`

This plugin will automatically be picked up by Solidarity (which should already be installed).

## :newspaper: What is Solidarity?  
Solidarity is a file of environment rules which can be programatically enforced.  It's a light weight environment checker for automation.
#### [Read More About Solidarity Here](https://github.com/infinitered/solidarity)

## :newspaper:  What is envinfo?
envinfo is a module for gathering environment information.  It's a robust data collector for environments.
#### [Read More about envinfo Here](https://github.com/tabrindle/envinfo)
