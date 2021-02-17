# fresh-breath

>

[![NPM](https://img.shields.io/npm/v/fresh-breath.svg)](https://www.npmjs.com/package/fresh-breath) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
# Install fresh-breath for React project
npm install --save fresh-breath
```

## Quickstart

```jsx
import React from 'react'

import { Button } from 'fresh-breath'

const Example = () => {
  return <Button>Click me!</Button>
}
```

## Components

#### Anchor

| Props     | Desciption                                            | Type    | Default |
| :-------- | :---------------------------------------------------- | :------ | :------ |
| color | can be set to any supported CSS value e.g. #fff | string  | - |   
| hover | adds animation on mouse hover | boolean | false |   
| underline | adds a line under anchor on hover | boolean | false |   
| Extra | object with `Content` and `position` keys which<br>adds an icon near the anchor, first is icon path<br>and second sets position to either `left` or `right` | object | - |  
| size | can be set to `large`/`medium`/`small` | string | medium |     

#### Button

| | | | |
| :----- | :------------------------------ | :----- | :------ | 
| type   | can be set to `success`/`error` | string | -       |   
| hover  | adds hover effect | boolean | false |   
| inline | makes button thinner | boolean | false |    
  
#### Breadcrumb
   
Simple breadcrumb menu with only one `items` array prop, each item is an object with ``link`` and ``text`` keys,<br />first defines a  path to follow and second is a menu item's button value.  

#### Card

Commonly seen card component, consists of image, heading and paragraph.  **Important!**The card's components depends on order of the props. Thus first three props passed must me either `img`/`heading`/`paragraph`.  Change this order in a way you want your card component rendered.

| Props      | Desciption                                        | Type | Default |
| :--------- | :------------------------------------------------ | :--- | :------ |  
| img | object with `url` and `alt` keys which<br>specifies card's image, first is an image path<br>and second sets the name of your  image | object | - |    
| heading | sets card's heading | string | - |   
| paragraph | sets card's content | string | - |  

#### Modal

| | | | |
| :------ | :------------------------------------------------ | :----- | :------ |  
| title   | sets modal's title                                | string | -       |
| text | sets modal's content | string | - | 
| buttons | array of objects which specifies modal's buttons,<br>object has `text` and `onPress` keys, `text` sets<br>button's value, `onPress` is a function to be<br>executed on button click | object | - |  

#### Search

| | | | | 
| :-------- | :--------------------------------------- | :----- | :------ |  
| width     | sets search bar's width                  | number | 380px   | 
| input | value which holds search's value | variable | - |  
| onChange | function to update search's input | function | - |  
| submit | function to be executed on search submit | function | - | 

## Layout

#### Flex

Layout which represents a common css flex property.

| Props      | Desciption                          | Type | Default |
| :--------- | :---------------------------------- | :--- | :------ | 
| direction  | sets flex's direction, can be `column` / `row` /<br>`column-reverse` / `row-reverse` | string | row |
| align      | sets flex items' vertical alignment, can be<br>`flex-start` / `center` / `flex-end` / `revert` | string | center |
| justify    | sets flex items' horizontal alignment, can be<br>`flex-start` / `center` / `flex-end` / `revert` /<br>`space-between` / `space-around` | string | center |
| wrap       | specifies whether items should be wrapped | boolean | false |

#### Grid

Represents grid layout

| | | | |
| :--------- | :---------------------------------- | :----- | :------ | 
| gap        | sets gap between grid items         | string | 1rem |
| evenly      | makes all grid items same width, can be also<br>be a value which specifies items minimal width | boolean<br>string  | 300px |  
| justify    | same as flex's `justify` prop       | string | - |

#### Table

| | | | |
| :--------- | :---------------------------------------------- | :------ | :------ | 
| heading    | array of strings to appear in table's header    | array   | - |
| data       | array of objects to fill table's rows and cells | array   | - |
| wrap       | whether to wrap table's cells                   | boolean | false |

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)
