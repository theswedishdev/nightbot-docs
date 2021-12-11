# Fahrenheit to Celsius
A utility command to convert from Fahrenheit to Celsius.

## Usage
`!ftoc <temperature in Fahrenheit>`

### Example
`!ftoc 77`

```
77°F is equal to 25°C
```

## User level
The recommended user level for this command is `everyone`.

## Add command
```js
!addcom !ftoc $(1)°F is equal to $(eval new Intl.NumberFormat('en-US', { style: 'unit', unit: 'celsius', maximumFractionDigits: 1 }).format(($(1)-32)/1.8))
```
