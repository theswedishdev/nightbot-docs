# Love
Let the viewers show test out their love for someone else in chat.

## Usage
`!love [<username>]`

### Example
`!love oatmealemily`

```
SwedishDev loves oatmealemily 69%
```

## User level
The recommended user level for this command is `everyone`.

## Add command
```js
!addcom !love $(user) loves $(touser) $(eval Math.floor(Math.random() * 100))%
```
