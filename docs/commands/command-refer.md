# Refer
Ask raiders to remove the raid part from the Twitch URL.

## Usage
`!refer`

#### Example usage
`!refer`

```
Welcome in, raiders! If you wouldn't mind, could you please open the stream via this link? https://www.twitch.tv/theswedishdev That way, the raid part of the URL will be removed and you'll count towards our average viewer count! Thank you!
```

## User level
The recommended user level for this command is `moderator`.

## Add command
```js
!addcom !refer -ul=moderator $(twitch $(channel) "Welcome in, raiders! If you wouldn't mind, could you please open the stream via this link? {{url}} That way, the raid part of the URL will be removed and you'll count towards our average viewer count! Thank you!")
```
