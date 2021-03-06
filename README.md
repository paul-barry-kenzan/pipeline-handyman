## pipeline-handyman


## Information

| Package       | Description   | Version|
| ------------- |:-------------:| -----:|
| pipeline-handyman| Pipeline with resources used in several pipes | 0.3.0 |

# Overview

Gulp pipeline that provides several utility methods to facilitate the creation of other pipelines.

## Install

`npm install pipeline-handyman --save-dev`

**NOTE: as this project is still pre 1.0.0, it is subject to possible backwards incompatible changes as it matures.
Also, as part of a repo migration, version 0.1.1 will not install, so please use any of the new versions**

## Usage

### mergeConfig

This function facilitates the process of merging two config objects. It is widely use to take the configuration from the 
user provided one and merge it with default configuration establish by the pipeline.

```javascript
var handyman = require('pipeline-handyman');

pipelineConfig = handyman.mergeConfig(defaultConfig, newConfig);

```

### log

This functions provides a way to log messages in the terminal. You can get feedback from the gulp process on your terminal through personalized messages.

```javascript
var gulp = require('gulp');
var handyman = require('pipeline-handyman');

handyman.log('Your message');
```

### getPackageName

This functions allows you to obtain the package name. This can be useful, for example, during minification processes when you need to name the build packages.

```javascript
var gulp = require('gulp');
var handyman = require('pipeline-handyman');

handyman.getPackageName();
```


## LICENSE
Copyright 2015 Kenzan

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
