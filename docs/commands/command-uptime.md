# Uptime
Tells how long to stream has been streaming for.

## Usage
`!uptime`

### Example
`!uptime`

```
Stream uptime: 1 hour 37 minutes 5 seconds
```

## User level
The recommended user level for this command is `everyone`.

## Add command
```js
!addcom !uptime Stream uptime: $(twitch $(channel) "{{uptimeLength}}")
```
