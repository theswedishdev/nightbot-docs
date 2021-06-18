# Viewers
Politely tell chat that we do not want to know about the viewer count.

## Usage
`!viewers`

### Example
`!viewers`

```
Although we appreciate the thought, telling TheSwedishDev the viewer count [good or bad] is unwelcome and just makes us self-conscious.
```

## User level
The recommended user level for this command is `everyone`.

## Add command
```js
!addcom !viewers Although we appreciate the thought, telling $(twitch $(channel) "{{displayName}}") the viewer count [good or bad] is unwelcome and just makes us self-conscious.
```
