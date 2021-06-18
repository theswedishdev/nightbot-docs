# Celsius to fahrenheit
A utility command to convert from celsius to fahrenheit.

## Usage
`!ctof <temperature in celsius>`

### Example
`!ctof 25`

```
25°C is equal to 77°F
```

## User level
The recommended user level for this command is `everyone`.

## Add command
```js
!addcom !ctof $(1)°C is equal to $(eval new Intl.NumberFormat('en-US', { style: 'unit', unit: 'fahrenheit', maximumFractionDigits: 1 }).format($(1)*1.8+32))
```
